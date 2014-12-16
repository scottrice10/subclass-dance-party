// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};

MakeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step, it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function(top, left, node) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  // var node = node || this.$node;
  // console.log('node', node);
  this.$node.css(styleSettings);
};

MakeDancer.prototype.lineUp = function() {
  for (var key in window.dancers) {
    dancerArr = window.dancers[key];
    for (var i = 0; i < dancerArr.length; i++) {
      var dancer = dancerArr[i];
      // console.log('dancer', dancer);
      dancer.setPosition(dancer.top, 0, dancer);
    }
  }
};
