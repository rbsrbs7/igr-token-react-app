import { StackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import ReadBarcode from './src/screens/readBarcode';

console.disableYellowBox = true;

export default StackNavigator({
  'home' : {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return ({
        // title: title,
        title: "home",
        headerLeft: null,
        headerTitleStyle: {
          fontSize: 30,
          color: '#fff',
          alignSelf: 'center',
        }
      });
    }
  },
  'readBarcode' : {
    screen: ReadBarcode,
    navigationOptions: () => {
      return ({
        title: "Read Barcode",
        headerTitleStyle: {
          fontSize: 30,
          color: '#fff',
          alignSelf: 'center',
        }
      });
    }
  },
},{
  navigationOptions: {
    'title': 'IGR-Token',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000', // vermelho ketchup
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5', // cinza claro
    }, 
    headerTitleStyle: {
      fontSize: 30,
      color: '#fff',
      alignSelf: 'center'
    }
  }
});

// https://github.com/react-native-community/react-native-camera/issues/1530#issuecomment-385752864