---
layout: module
---
# 2. Running And Debugging
In this unit, you'll learn how to create and run app.


	
	react-native init StackOverflowSearch --verbose
	cd StackOverflowSearch/
	subl .
	open ios/StackOverflowSearch.xcodeproj/
	
	In Xcode, Update to recommended settings
	<img 0>
	Change target version to 8.0
	<img 1>
	(Ignore any other warnings for now)
	
	You should see React Native in Simulator
	<img 3>
	
	Command+D to bring up RN simulator debugger menu
	<img 4>
	
	
	####Live Reload
	1. Select "Enable Live Reload" in the Simulator debugger menu.
	2. Switch to Sublime Text and open index.ios.js. This is the main or the starting file for the app.
	2. Around line# 20 change `Welcome to React Native!` to `Welcome to StackOverFlow Search!`
	3. You should see the change reflected immediately.
		<img 5>
		
	#####Debugger
	You can debug the app in the browser just like you can debug a web application.
	
	1. Add a  `debugger;` statement as the first line of  *StackOverflowSearch* render function (just above the return statement).
	2. Switch to Simulator.
	3. Press `Cmd+D` and select `Enable Chrome Debugging`. This opens up a Chrome browser tab. Open the JavaScript debugger for this page by typing `Cmd+Option+J` or (right-click + Inspect). 
	4.  Switch back to the Simulator.
	5. Press `Cmd+R` to refresh the app.
	6. You'll see that the control stops at the `debugger` statement inside Chrome debugger window.
	<img 6>
	
	7. Press Continue button to give the control back to React Native.

<div class="row" style="margin-top:40px;">
<div class="col-sm-12">
<a href="index.html" class="btn btn-default"><i class="glyphicon glyphicon-chevron-left"></i> Previous</a>
<a href="react-native-tutorial-create-forceios-app.html" class="btn btn-default pull-right">Next <i class="glyphicon glyphicon-chevron-right"></i></a>
</div>
</div>
