import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Line from '../components/Line';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import axios from 'axios';
import { keccak256 } from 'js-sha3';

export default class ShowResults extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      session: this.props.navigation.getParam("session"),
      loading: true,
      errorMessage: '',
    };
  }

  render() {
    if(this.state.loading) {
      return (
        <View style={style.container}>
          <View>
            <Loading />
          </View>
        </View>
      );
    } else if(this.state.errorMessage) {
      return (
        <View style={style.container}>
          <Text>
            error: {this.state.errorMessage}
          </Text>
        </View>
      );
    } else if(this.state.session.txInfos.length > 0) {
      return (
        <View style={style.container}>
          <Text>
            txInfo size: {this.state.session.txInfos.length}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={style.view}>
          <Text>
            txInfo size: {this.state.session.txInfos.length}
          </Text>
        </View>
      );
    }
  }

  componentDidMount() {
    let hash = keccak256.create();
    let session = {...this.state.session};
    session.barcode = "1234567890123";
    session.date = "180901";
    session.concatenation = session.barcode + session.date;
    session.address = hash.update(this.state.session.concatenation).hex();
    session.address = "0x" + session.address.substr(session.address.length - 40);
    session.address = "0x1448Eab3182B71aE5322168D037fEB0125CAC92F";
    this.setState({session}, () => {
      this.getDataFromAPI();
    });
  }

  getDataFromAPI() {
    let session = {...this.state.session};
    session.txInfos = [];
    session.addressTransactions = [];
    this.setState({session}, () => {
      console.log("requesting API...");
      let apiUrlGetAddressTransactions = 'https://api.ethplorer.io/getAddressTransactions/'+this.state.session.address+'?showZeroValues=1&apiKey=freekey';
      axios.get(apiUrlGetAddressTransactions)
      .then(response => { 
        let session = {...this.state.session};
        response.data.forEach(element => {
          session.addressTransactions.push(element);
        });
        this.setState({session}, () => {
          this.state.session.addressTransactions.forEach(addressTransaction => {
            let apiUrlGetTxInfo = 'https://api.ethplorer.io/getTxInfo/' + addressTransaction['hash'] + '?apiKey=freekey'
            axios.get(apiUrlGetTxInfo)
            .then(response => {
              let session = {...this.state.session};
              session.txInfos.push(response.data);
              this.setState({session}, () => {
                if(this.state.session.txInfos.length == this.state.session.addressTransactions.length) {
                  this.setState({loading: false, errorMessage: ""}, () => {
                    console.log("requesting API... OK");
                  });
                }
              });
            }).catch(error => {
              let errorMessage = "Ethereum API didn't response.";
              this.setState({errorMessage: errorMessage});
            }); 
          });
        });
      }).catch(error => {
        console.log("requesting API... ERROR");
        let errorMessage = "Ethereum API didn't response. Please wait for a new request after 5 seconds.";
        this.setState({errorMessage: errorMessage, loading: false}, () => {
          setTimeout(() => {
            this.setState({
              loading: true,
              errorMessage: ""
            });
            setTimeout(() => {  
              this.getDataFromAPI();
            }, 3000);
          }, 5000);
        });
      });
    });
  }
}

const style = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#fff",
    flex: 1,
    // justifyContent: 'center',
  },
  registerContainer: {
    marginTop: 15,
    backgroundColor: "#FF0000",
    // justifyContent: 'center',
  },
  input: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
  },
});