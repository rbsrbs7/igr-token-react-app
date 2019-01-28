import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
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
            {this.state.errorMessage}
          </Text>
        </View>
      );
    } else {
      return (
        <View style={style.container}>
          <Text>
            {this.state.apiUrlGetAddressTransactions}
          </Text>
        </View>
      );
    }
  }

  componentDidMount() {
    let hash = keccak256.create();
    let session = {...this.state.session};
    session.concatenation = session.barcode + session.date;
    session.address = hash.update(this.state.session.concatenation).hex();
    // session.address = "0x" + session.address.substr(session.address.length - 40);
    session.address = "0x1448Eab3182B71aE5322168D037fEB0125CAC92F";
    session.apiUrlGetAddressTransactions = 'https://api.ethplorer.io/getAddressTransactions/'+session.address+'?showZeroValues=1&apiKey=freekey';
    this.setState({session}, () => {
      this.getDataFromAPI();
    });
  }

  getDataFromAPI() {
    console.log("requesting API...");
    axios.get(this.state.session.apiUrlGetAddressTransactions)
    .then(response => { 
      let session = {...this.state.session};
      session.apiResponseAddressTransactions = response.data;
      this.setState({session}, () => {
        console.log("requenting API... OK");
        this.state.session.apiResponseAddressTransactions.forEach(function(transaction) {
          console.log("getting " + transaction['hash'] + '...');
          axios.get( 'https://api.ethplorer.io/getTxInfo/' + transaction['hash'] + '?apiKey=freekey')
          .then(response => { 
            console.log("received " + response.data['hash']);
            // let session = {...this.state.session};
            // session.apiResponseTxInfo.append(response.data);
            // this.setState({session}, () => {
            //   console.log("session.apiResponseAddressTransactions.length: ");
            //   console.log(session.apiResponseAddressTransactions.length);
            // });
          }).catch(error => {
          });
        });
      });
    }).catch(error => {
      this.setState({
        errorMessage: error,
      });
      setTimeout(() => {
        this.setState({
          errorMessage: "",
        });
        setTimeout(() => {  
          this.getDataFromAPI();
        }, 3000);
      }, 3000);
    });
  }
}
        // setTimeout(() => {
        //   this.setState({
        //     error: false,
        //   });
        //   setTimeout(() => {  
        //     this.getDataFromAPI();
        //   }, 3000);
        // }, 3000);


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