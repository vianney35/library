# Ionic usage
Run on browser `ionic serve`
Run on device `ionic cordova run android --device`

# Ionic deployement on device
https://ionicframework.com/docs/intro/deploying/

Install java 8

On windows, set variable
`set JAVA_HOME "C:\Program Files\Java\jdk1.8.0_161"`
`set JAVA_OPTS="-Dhttp.proxyHost=proxy -Dhttp.proxyPort=8080 -Dhttps.proxyHost=proxy -Dhttps.proxyPort=8080"`

Add in your PATH
`C:\Program Files\Java\jdk1.8.0_161\bin` to get java in prompt
`C:\Users\S0006483\AppData\Local\Android\Sdk\platform-tools` to get adb available in prompt

# Ionic start a project

If you have trouble to create a new project
`set PROXY=http://proxy:8080`

And create the project
`ionic start myApp tabs`
