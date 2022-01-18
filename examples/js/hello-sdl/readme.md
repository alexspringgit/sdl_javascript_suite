## SDL JavaScript App Startup Instructions

1. Place [the vanilla JS SDL.min.js file](https://github.com/smartdevicelink/sdl_javascript_suite/releases/download/1.5.0/SDL.min.node-js.zip) into this directory
1. Request a [Manticore instance](https://smartdevicelink.com/resources/manticore/)
1. Open two terminal sessions and `cd` both of them into `./examples/js/hello-sdl`
1. In one terminal session, run `java -jar proxy.jar m.sdl.tools [PORT]`, where `[PORT]` is the one given to you by Manticore
1. In the other terminal session, run `npm install` then `npm start`.
1. Your browser should automatically open and the test app should appear on your Manticore UI.
1. Click on the app in Manticore and observe the series of `Show` RPCs performed. Logs can be seen in your browser's JavaScript console.
