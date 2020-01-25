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
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  React.useEffect(()=>{

  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
        {
          loader ? 
            <Splash />
          :
            <Main />  
        }
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
