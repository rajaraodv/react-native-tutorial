---
layout: module
---
# 3. ES6 And Code Structure
In this unit, you'll learn abou the code structure.


#### ES6
React Native supports regular JavaScript and also  ES6 (aka JavaScript 2015) out of the box. You can also mix both syntax. We'll build the entire app in ES6. 

For example:
The following Code:

```var StackOverflowSearch = React.createClass({```

Becomes:

```
class StackOverflowSearch extends React.Component{
```

	
Change the following JavaScript code..

```
//ES5
var StackOverflowSearch = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to StackOverflow Search!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});
```
..with:

```
//ES6
class StackOverflowSearch extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to StackOverflow Search!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
};
```

### 4 Parts Of A React File
Before we go ahead and build out the app, you should know that every React file pretty much has the following 4 sections.

1. Load - A section to load dependent libraries

	```
	var React = require('react-native');
	var {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  View,
	} = React;
	```

2. React Class - A section for a React class that renders a component.

	> A component may contain other inner-components.

	```
	class StackOverflowSearch extends React.Component{
	  render() {
	    return (
	    ...
	    );
	  }
	};
	```
3.  Styles - A section to contain styles used by the current component
	
	```
	var styles = StyleSheet.create({
	  container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#F5FCFF',
	  }
	});
	```
	
4. Export - A section to Export a component so other components can import and use it(or Register if it's the main/first component).

	```
	AppRegistry.registerComponent('StackOverflowSearch', () => StackOverflowSearch);
	```


## Additional Resources

- <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> Contains the everything you need to build React Native apps.



<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="react-native-tutorial-create-forceios-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
