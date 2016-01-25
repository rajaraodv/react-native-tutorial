var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  ActivityIndicatorIOS
} = React;

var styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Search extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchText: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event){
    this.setState({
      searchText: event.nativeEvent.text
    })
  }
  handleSubmit(){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    console.log('submit..', this.state.searchText);
    // fetch data from Stackoverflow
    //rerout to the next passing that Stackoverflow information
  }
  render() {
    return(
      <View style={styles.searchContainer}>
      <Text style={styles.title}> Search for a Stackoverflow Question</Text>
      <TextInput
        style={styles.searchInput}
        value={this.state.searchText}
        onChange={this.handleChange.bind(this)} />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleSubmit.bind(this)}
          underlayColor="white">
          <Text style={styles.buttonText}> SEARCH </Text>
        </TouchableHighlight>
      </View>
      )
  }
};

module.exports = Search;