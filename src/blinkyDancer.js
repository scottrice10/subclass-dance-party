var BlinkyDancer = function (top, left) {
  MakeDancer.call(this, top, left, 500);
  // this.top = top;
  // this.left = left;
  // this.timeBetweenSteps = 1000;
};

BlinkyDancer.prototype = Object.create(MakeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  return new BlinkyDancer(top, left, timeBetweenSteps);
};

