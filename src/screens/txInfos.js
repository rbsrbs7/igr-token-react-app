import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, ActivityIndicator, Picker } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Line from '../components/Line';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import TxInfos from '../components/TxInfos';
import axios from 'axios';
import { keccak256 } from 'js-sha3';

export default class TxInfosScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      session: this.props.navigation.getParam("session"),
      loading: true,
      errorMessage: '',
    };
  }

  render() {
    if(this.state.error) {
      return (
        <View style={style.view}>
          <Text style={style.text_error}> Falha na conexão</Text>
        </View>
      );
    }
    if(this.state.loading) {
      return (
        <View style={style.view}>
          <Loading />
        </View>
      )
    }
    return (
      <View style={style.view}>
        <TxInfos 
          key="list" 
          txInfos={this.state.session.txInfos} 
          onPressTxInfo={(pageParam) => {
            this.props.navigation.navigate('TxInfoScreen', pageParam); 
          }}
        />
      </View>
    );
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
    // session.address = "0xf048ca17c958ca3a284529f2e74d17fa276d93a8"; no data response
    this.setState({session}, () => {
      this.getDataFromAPI();
    });
  }

  getDataFromAPI() {
    let session = {...this.state.session};
    session.txInfos = [];
    session.addressTxInfos = [];
    this.setState({session}, () => {
      let apiUrlGetAddressTxInfos = 'https://api.ethplorer.io/getAddressTransactions/'+this.state.session.address+'?showZeroValues=1&apiKey=freekey';
      axios.get(apiUrlGetAddressTxInfos)
      .then(response => {
        let session = {...this.state.session};
        response.data.forEach(element => {
          session.addressTxInfos.push(element);
        });
        this.setState({session}, () => {
          this.state.session.addressTxInfos.forEach(addressTxInfo => {
            let apiUrlGetTxInfo = 'https://api.ethplorer.io/getTxInfo/' + addressTxInfo['hash'] + '?apiKey=freekey'
            axios.get(apiUrlGetTxInfo)
            .then(response => {
              let session = {...this.state.session};
              session.txInfos.push(response.data);
              this.setState({session}, () => {
                if(this.state.session.txInfos.length == this.state.session.addressTxInfos.length) {
                  this.setState({loading: false, errorMessage: ""}, () => {
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
  view: {
    flex: 1,
    justifyContent: 'center',
  }, 
  text_error: {
    backgroundColor: '#FF0000',
    color: '#fff',
    fontSize: 30,
    alignSelf: 'center',
  },
});