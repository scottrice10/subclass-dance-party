var HappyDancer = function (top, left) {
  MakeDancer.call(this, top, left, 100);
  this.$node = $('<span class="happy"></span>');
  this.setPosition(top, left);
  this.$node.on('mouseover', (function(event){
    console.log("here");
    var randomTop = ($("body").height() * Math.random());
    var randomLeft = ($("body").width() * Math.random());
    this.setPosition(randomTop, randomLeft);
  }).bind(this));
};

HappyDancer.prototype = Object.create(MakeDancer.prototype);
HappyDancer.prototype.constructor = HappyDancer;

HappyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
};

var makeHappyDancer = function (top, left, timeBetweenSteps) {
  return new HappyDancer(top, left, timeBetweenSteps);
};
