var self = require('sdk/self');

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

var Panel = require('dev/panel').Panel;
var Tool = require('dev/toolbox').Tool;
var Class = require('sdk/core/heritage').Class;

console.log("Define MyPanel");
var MyPanel = Class({
  extends: Panel,
  label: "label",
  icon: "./img/redo.png",
  tooltip: "tooltip",
  url: "./html/panel.html"
});

console.log("Create Tool");
var myTool = new Tool({
  panels: {
    myPanel: MyPanel
  }
});

exports.dummy = dummy;
