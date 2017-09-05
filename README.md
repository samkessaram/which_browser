# which_browser

https://which-browser.herokuapp.com

From https://github.com/WhichBrowser/Parser-JavaScript

From the horse's mouth:
> This is an extremely complicated and almost completely useless browser sniffing library written in JavaScript. Useless because you shouldn't use browser sniffing. So stop right now and go read something about feature detecting instead. I'm serious. Go away. You'll thank me later.

This is the setup for a simple Node.js server that returns an object which has information about the browser, rendering engine, os and device. I'm using this purely for informational purposes to help with debugging. Keep in mind that this is not 100% reliable and you probably shouldn't be trying to serve version-specific content. 

Making this seemed easier than using the php server provided at https://github.com/WhichBrowser/Server, plus it gave me an excuse to mess around with Node a little.

