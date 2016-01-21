---
layout: module
---
# 3. Navigation And Routing
Navigating from one component to another in React Native is pretty easy to implement. You'll use <a href="https://facebook.github.io/react-native/docs/navigatorios.html" target="_blank">NavigatorIOS</a> as the parent component and then push or pop child components components into this.

> Think of `NavigatorIOS` component as an **Invisible** parent component that helps show/hide other components within itself.

#### Implementation Overview:
In our app, the initial view is the Search view(`Search` component) and search result is the 2nd view (`Searchresult` component). 

1. First, you'll make the `NavigatorIOS` as the first parent component 
 > Usually this parent component is implemented in the main `index.ios.js`.

2. **Initial View -** You'll load `NavigatorIOS` component and then embed the `Search` as its child.
3. **Next View -** You'll simply **Push** the `Searchresult` on-top-of `Search` component (similar to pushing items to an array).
4. **Previous View -** You'll simply **Pop** the `Searchresult`.

## Step 1 - Create Parent/Initial View
1. Open index.ios.js 
2. Load our first component `Search` component (we'll create it soon in a folder called `src`). 

	```
	var Search = require('./src/Search');
	```

2. Replace the StackOverflowSearch component with the following code. Notice that we have embedded `Search` as the NavigatorIOS child.

	```
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
	```

3. Import Search component
Add the following line as the 2nd line.
`var Search = require('./src/Search');`

4. Import NavigatorIOS from React.
Update the code where we load React modules to include NavatioIOS.

```

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Search,
  NavigatorIOS
} = React;
```

## Step 2 - Create Search Component

Let's create a folder called `src` to store all our future components and create `Search.js` file for the `Search` component.

1. Open terminal in the root `StackoverflowSearch` folder.
2. Type `mkdir src` and hit Enter.
3. Type `touch src/Search.js` and hit Enter.
4. Open `Search.js` file.
5. Update Search component's code:
	
	```
			// 1. Import dependencies 
			var React = require('react-native');
				
			var {
			  View,
			  Text,
			  StyleSheet
			} = React;
	
			// 2. Create React Class - The following code simply returns 
			//a text "Search Container"			
			class Search extends React.Component{
			  render() {
			    return(
			      <View style={styles.searchContainer}>
			      <Text> Search Container </Text>
			      </View>
			      )
			  }
			};
		
			// 3. Add Component Styles	
			var styles = StyleSheet.create({
			  searchContainer: {
			    flex: 1,
			    padding: 30,
			    marginTop: 65,
			    flexDirection: 'column',
			    justifyContent: 'center',
			    backgroundColor: 'green'
			  }
			});
				
		
			// 4. Export the component		
			module.exports = Search;
	```

6. Now let's udate the `index.ios.js` to include the Search component. 

```
	// 1. Import dependencies - 
	// We import Search.js using "./src/Search.js" relative path
	var React = require('react-native');
	var Search = require('./src/Search.js');
	var {
	  AppRegistry,
	  StyleSheet,
	  Text,
	  NavigatorIOS,
	  View,
	} = React;
	
	// 2. Update the component to use Search component. 
	// Note that we are using NavigatorIOS as the parent component and passing 
	//*Search* as the first child component.
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

	// 3. Add Styles
	var styles = StyleSheet.create({
	container:{
	    flex: 1,
	    backgroundColor: '#111111'
	  },
	});
	
	// 4. Register the main StackOverflowSearch component
	AppRegistry.registerComponent('StackOverflowSearch', () => StackOverflowSearch);
```
<img search-cmp-1>

> Notice how we follow the 4 steps of component creation? i.e. Import dependencies, Create component, Add styles, Export component.  We'll use those same steps through out this tutorial.

9. 
## Additional Resources

- <a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> Contains the everything you need to build React Native apps.



<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="react-native-tutorial-create-forceios-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
