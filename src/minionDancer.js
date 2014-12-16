var MinionDancer = function(top, left) {
  MakeDancer.call(this, top, left, 1000);
  this.$node = $('<span class="minion"></span>');
  this.setPosition(top, left);
};

MinionDancer.prototype = Object.create(MakeDancer.prototype);
MinionDancer.prototype.constructor = MinionDancer;

MinionDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

var makeMinionDancer = function(top, left) {
  return new MinionDancer(top, left);
};
