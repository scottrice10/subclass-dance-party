var HappyDancer = function (top, left) {
  MakeDancer.call(this, top, left, 1000);
  this.$node = $('<span class="happy"></span>');
  this.setPosition(top, left);
};

HappyDancer.prototype = Object.create(MakeDancer.prototype);
HappyDancer.prototype.constructor = HappyDancer;

HappyDancer.prototype.step = function () {
  MakeDancer.prototype.step.call(this);
};

var makeHappyDancer = function (top, left, timeBetweenSteps) {
  return new HappyDancer(top, left, timeBetweenSteps);
};
