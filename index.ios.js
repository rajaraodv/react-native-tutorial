var React = require('react-native');
var Search = require('./src/Search.js');


var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

class StackOverflowSearch extends React.Component{
  render() {
    return (
      <NavigatorIOS
      style={styles.container}
        initialRoute={{
          title: 'StackOverflow Search',
          component: Search 
        }} />
    );
  }
};


var styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111111'
  },
});


AppRegistry.registerComponent('StackOverflowSearch', () => StackOverflowSearch);