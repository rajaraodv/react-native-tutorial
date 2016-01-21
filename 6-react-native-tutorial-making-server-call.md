---
layout: module
---
# 3. Making Server Call
In this module you'll learn about how to use `fetch` api to make external calls.


## fetch API
React Native uses a library called `fetch` to make AJAX calls to the server. `fetch` library is similar to other AJAX libraries and is now supported out of the box in latest Chrome browsers.
<img search-cmp-2>

Specifically, you'll learn how React Native **states** work and also learn how to use TextInput, TouchableHighlight and ActivityIndicatorIOS. 

1. TextInput - This is similar to an Input field in a web application.
2. TouchableHighlight - This is similar to a button.
3. ActivityIndicatorIOS - This is similar to a busy spinner.

#### States
States in React components is simply a way to keep track of some data(think JSON or string) once that component is initialized. For example: In the below example, we need to keep track of `count` once the component is initialized. And everytime you want to change the component's data (may be to display something new), you simply update it's state by using `this.setState`. Then React automatically rerenders the component with the new data.  

```
var Counter = React.createClass({
  getInitialState: function() {
    return {count: this.props.initialCount};
  },

  handleClick: function() {
   // Update count's value
    this.setState({count: this.state.count + 1});
  },

  render: function() {
    return <div onClick={this.handleClick}>{this.state.count}</div>;
  }
});

ReactDOM.render(<Counter initialCount={7}/>, mountNode);
```

#### TouchableHighlight
It's similar to a button. It takes the following properties (among many others):

1. style - Style info for styling
2. onPress - A callback function to call when it's pressed
3. underlayColor - Color it should show when pressed.
4. <Text /> A Text child-component that has the button's label.

	```
	 <TouchableHighlight
	          style={styles.button}
	          onPress={this.handleSubmit.bind(this)}
	          underlayColor="white">
	          <Text style={styles.buttonText}> SEARCH </Text>
	        </TouchableHighlight>
	```
5. handleSubmit Callback - When the user presses the button, we need to show loading spinner, fetch results from stackoverflow, show result screen

```
 handleSubmit(){
    //1.  update our indicatorIOS spinner
    //2.  fetch data from Stackoverflow
    //3. navigate to the next results view
     }
```


  
#### TextInput
It's similar to an input field. It takes the following properties (among many others):

1. style - A JSON object with style information
2. value - Text present inside it.
3. onChange - A JS callback function to call when the text(value) changes.

	```
	<TextInput
	        style={styles.searchInput}
	        value={this.state.username}
	        onChange={this.handleChange.bind(this)} />
	```
4. handleChange Callback - When the user types letters, we need to listen to the keystrokes and update the state. Note that the `event` property will contain the text entered by the user.

	```
  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }
  ```
#### Update React.Component Class
 Update React.Component class to put everything togeather as below:
 
  ```
 class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  }
  handleChange(event){
    this.setState({
      username: event.nativeEvent.text
    })
  }
  handleSubmit(){
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    console.log('SUMBIT', this.state.searchText);
    // fetch data from github
    //rerout to the next passing that github information
  }
  render() {
    return(
      <View style={styles.mainContainer}>
      <Text style={styles.title}> Search for a Github User </Text>
      <TextInput
        style={styles.searchInput}
        value={this.state.username}
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
```

####Styles
Finally, update the styles for each component. Copy paste the following code:

```
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
```


> Please get the final code from here.

## Additional Resources

- <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> Contains the everything you need to build React Native apps.



<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="react-native-tutorial-create-forceios-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
