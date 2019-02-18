import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import ErrorMessage from '../components/ErrorMessage';
import Icon from 'react-native-vector-icons/FontAwesome';

class ReadDateFromInputScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      session: this.props.navigation.getParam("session"),
      date: "",
      error: ""
    };
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={styles.text}>
            The second step is to get the validity date on product packaging.
          </Text>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.viewRow}>
            <TextInput
              style={styles.textInput}
              maxLength={6}
              placeholder="Type date here on format YYMMDD"
              keyboardType='numeric'
              onChangeText={(text) => { this.setState({date: text}); }}
              value={this.state.date}
            />
            <TouchableOpacity
              onPress={this.checkText}
              style={styles.button}
            >
              <Text style={styles.text}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ErrorMessage message={this.state.error} />
        </View>
        <View style={{flex: 4}}>
        </View>
      </View>
    );
  }

  componentDidMount() {
  };

  checkText = () => {
    if(!(/^\d+$/.test(this.state.date))) {
      this.setState({error: "The date must have just numbers"});
    } else {
      var date = this.state.date;
      var year = "";
      var month = "";
      var day = "";
      if(date.length < 4 || date.length > 6) {
        this.setState({error: "The date must have between 4 and 6 characters"});
      } else {
        if(date.length == 4) {
          year = date[0] + date[1];
          month = date[2] + date[3];
          day = "01";
        } else if(date.length == 5) {
          year = date[0] + date[1];
          month = date[2] + date[3];
          day = "0" + date[4];
        } else {
          year = date[0] + date[1];
          month = date[2] + date[3];
          day = date[4] + date[5];
        }
        if(parseInt(year, 10) == 0 || parseInt(year, 10) < 18) {
          this.setState({error: "The year must be a number between 18 and 99"});
        } else if(parseInt(month, 10) == 0 || parseInt(month, 10) > 12) {
          this.setState({error: "The month must be a number between 1 and 12"});
        } else if(parseInt(day, 10) == 0 || parseInt(day, 10) > 31) {
          this.setState({error: "The day must be a number between 1 and 31"});
        } else {
          let session = {...this.state.session};
          session.date = year + month + day;
          session.concatenation = session.barcode + session.date;
          this.setState({session: session, error: ""}, () => {
            this.props.navigation.navigate('TxInfosScreen', { session: this.state.session } ); 
          });
        }
      } 
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewRow: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  button: {
    backgroundColor: '#DDDDDD',
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 45,
    alignItems: 'center',
    padding: 10
    // color: "#6a4595" // default color
  },
  text: {
    color: '#000',
    fontSize: 15,
    margin: 10
  }
});

export default ReadDateFromInputScreen;