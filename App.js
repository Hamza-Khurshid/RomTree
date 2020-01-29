import React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Splash from './source/Splash';
import Main from './source/Main';

const App = () => {
  const [loader, setLoader] = React.useState(true);

  function loaderHandler(p) {
    setLoader(p)
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {
          loader ?
          <Splash loader={loader} />
          :
          null  
        }      
        <Main loader={loader} setLoader={loaderHandler} />  
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3c3241',
  }
});

export default App;
