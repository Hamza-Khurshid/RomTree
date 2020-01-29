import React from 'react';
import { Dimensions, BackHandler } from 'react-native';
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

    whatHappened = (params) => {
      this.props.setLoader(false);
    }
  
    render() {
      let { loader } = this.props;

      return (
        <WebView
          style={
            loader ?
            {
              display: "none"
            }
            :
            {
              height,
              width,
            }
          }
          onLoadEnd={(p)=>this.whatHappened(p)}
          source={{ uri: "https://www.romtree.com" }}
          ref={(webView) => { this.webView.ref = webView; }}
          userAgent="Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3"
          onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
        />
      );
    }
}