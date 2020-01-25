import React from 'react';
import { Dimensions, BackHandler, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default class Main extends React.Component {
    webView = {
      canGoBack: false,
      ref: null,
    }
  
    onAndroidBackPress = () => {
      if (this.webView.canGoBack && this.webView.ref) {
        this.webView.ref.goBack();
        return true;
      }
      return false;
    }
  
    componentWillMount() {
      if (Platform.OS === 'android') {
        BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
      }
    }
  
    componentWillUnmount() {
      if (Platform.OS === 'android') {
        BackHandler.removeEventListener('hardwareBackPress');
      }
    }

    _onShouldStartLoadWithRequest = (u) => {
      console.log("Url: ", u.url.toString())
      if(u.url.toString().contains("whatsapp://app"))
        Linking.openURL('whatsapp://app')

      return true  
    }
  
    render() {
      return (
        <WebView
          style={{
            height,
            width,
          }}
          source={{ uri: "https://www.romtree.com" }}
          ref={(webView) => { this.webView.ref = webView; }}
          // onShouldStartLoadWithRequest={(url) => this._onShouldStartLoadWithRequest(url)}
          userAgent="Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"
          onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
        />
      );
    }
}