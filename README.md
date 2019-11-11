# cameraApp_RC
 For rc 

In order to make this app run you'll need API keys from the following sites (they're free):
-https://www.clarifai.com/
-https://www.alphavantage.co/

Once you have them you'll need to replace the key within the files that interact with the API. 
You'll find them within app\services\api folder.

Now you can run: npm i

Then you'll need to make some changes to the node_modules folder to make the app run initially:

-In \node_modules\metro-config\src\defaults\blacklist.js, there is an invalid regular expression that needed to be changed. I changed the first expression under sharedBlacklist from:

var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
to:

var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];

-Update node_modules\react-native\scripts\launchPackager.bat file. 

// delete this line
node "%~dp0..\cli.js" start 

Add this line
node "%~dp0..\cli.js" start --projectRoot ../../../ 

pause
exit

From there run: react-native run-android --verbose 
