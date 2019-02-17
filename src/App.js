import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/home';
import ReadBarcodeFromInputScreen from './screens/readBarcodeFromInput';
import ReadBarcodeFromCameraScreen from './screens/readBarcodeFromCamera';
import ReadDateFromInputScreen from './screens/readDateFromInput';
import TxInfoScreen from './screens/txInfo';
import TxInfosScreen from './screens/txInfos';

console.disableYellowBox = true;

export default StackNavigator({
  'HomeScreen' : {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return ({
        // title: title,
        title: "IGR valued ingredient certification",
        headerLeft: null,
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          alignSelf: 'center'
        },
      });
    }
  },
  'ReadBarcodeFromInputScreen' : {
    screen: ReadBarcodeFromInputScreen,
    navigationOptions: () => {
      return ({
        title: "Read Barcode",
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          alignSelf: 'center'
        }
      });
    }
  },
  'ReadBarcodeFromCameraScreen' : {
    screen: ReadBarcodeFromCameraScreen,
    navigationOptions: () => {
      return ({
        title: "Read Barcode",
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          alignSelf: 'center'
        }
      });
    }
  },
  'ReadDateFromInputScreen' : {
    screen: ReadDateFromInputScreen,
    navigationOptions: () => {
      return ({
        title: "Read Date",
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          alignSelf: 'center'
        }
      });
    }
  },
  'TxInfosScreen' : {
    screen: TxInfosScreen,
    navigationOptions: () => {
      return ({
        title: "TxInfos",
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          alignSelf: 'center'
        }
      });
    }
  },
  'TxInfoScreen' : {
    screen: TxInfoScreen,
    navigationOptions: () => {
      return ({
        title: "TxInfo",
        headerTitleStyle: {
          fontSize: 20,
          color: '#fff',
          alignSelf: 'center'
        }
      });
    }
  }
},{
  navigationOptions: {
    'title': 'IGR-Token',
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#000', // vermelho ketchup
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5' // cinza claro
    }, 
    headerTitleStyle: {
      fontSize: 20,
      color: '#fff',
      alignSelf: 'center'
    }
  }
});

// disable header
// header: () => null,  //this will hide the Stack navigator's header (TabA_StackNavigator)
// tabBarVisible: false, //this will hide the TabBar navigator's header (LoggedIn_TabNavigator)