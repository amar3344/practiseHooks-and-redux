/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import FetchAPI from './src/FetchAPI';
import CounterApp from './src/CounterApp';
import { Provider } from 'react-redux';
import ClassBasedComponent from './src/ClassBasedComponent';
import { Store } from './src/redux/Store';
import ReducerHook from './src/ReducerHook';
import UseMemoHook from './src/UseMemoHook';
import UseMemoExample from './src/UseMemo2';
import UseCallbackExample from './src/UseCalback';
import CustomeHook from './src/CustomeHook';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={Store}>
    <View style={{backgroundColor:"#FFFFFF",flex:1}}>
      {/* <FetchAPI/> */}
      {/* <CounterApp/> */}
      {/* <ClassBasedComponent/> */}
      {/* <ReducerHook/> */}
      {/* <UseMemoHook/> */}
      {/* <UseMemoExample/> */}
      {/* <UseCallbackExample/> */}
      <CustomeHook/>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
