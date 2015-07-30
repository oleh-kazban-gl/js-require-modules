define(function (require) {
  var Erase = require('./Erase');
  var Line = require('./Line');
  var Spray = require('./Spray');
  var Text = require('./Text');

  var tools = Object.create(null);

  tools.erase = Erase;
  tools.line = Line;
  tools.spray = Spray;
  tools.text = Text;

  return tools;
});