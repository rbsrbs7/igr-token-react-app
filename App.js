import { StackNavigator } from 'react-navigation';
import HomeScreen from './src/screens/home';
import ReadBarcodeScreen from './src/screens/readBarcode';
import ReadDateScreen from './src/screens/readBarcode';

console.disableYellowBox = true;

export default StackNavigator({
  'Home' : {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return ({
        // title: title,
        title: "home",
        headerLeft: null,
        headerTitleStyle: {
          fontSize: 30,
          color: '#fff',
          alignSelf: 'center',
        },
      });
    }
  },
  'ReadBarcode' : {
    screen: ReadBarcodeScreen,
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
  'ReadDate' : {
    screen: ReadDateScreen,
    navigationOptions: () => {
      return ({
        title: "Read Date",
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

// disable header
// header: () => null,  //this will hide the Stack navigator's header (TabA_StackNavigator)
// tabBarVisible: false, //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)