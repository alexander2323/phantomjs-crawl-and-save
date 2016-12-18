var page = require('webpage').create();
var fs = require('fs');
var system = require('system');
var args = system.args;


console.log("\n\n##################################\n####### ALEX'S SUPER CRAWLER #####\n####### super copyright ##########\n##################################\n\n\n");

if (args.length === 1) {
  console.log("Mate are you serious?");
  phantom.exit();
}else{

    var url = args[1];
    var dist = args[2];

    console.log("URL: " +url);
    console.log("Dest: " +dist + "\n\n");

    page.open(url, function (status) {
        if (status !== 'success') {
            console.log('Unable to access network');
        } else {
            var p = page.evaluate(function () {
                return document.getElementsByTagName('html')[0].innerHTML
            });
            console.log('ok');
            fs.write(dist, p, 'w');
        }
        phantom.exit();
    });

}
