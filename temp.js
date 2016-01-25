var React = require('react-native');
var Search = require('./src/Search.js');


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});

class StackOverflowSearch extends React.Component{
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'Github NoteTaker',
          component: Search 
        }} />
    );
  }
};


AppRegistry.registerComponent('StackOverflowSearch', () => StackOverflowSearch);