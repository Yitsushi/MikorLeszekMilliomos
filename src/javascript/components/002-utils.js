/* global App */

App.Util.GenerateRandomId = function() {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz0123456789";

  for(var i=0; i < 4; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

App.Util.getHtmlParam = function(param) {
  return jQuery('param[name="' + param + '"]').attr('value');
};

App.Util.EventSystem = (function() {
  var self = this;

  self.queue = {};

  return {
    publish: function (event, data) {
      var queue = self.queue[event];

      if (typeof queue === 'undefined') {
        return false;
      }

      for(var i = 0, _l = queue.length; i < _l; i++) {
        (queue[i])(data);
      }

      return true;
    },
    subscribe: function(event, callback) {
      if (typeof self.queue[event] === 'undefined') {
        self.queue[event] = [];
      }

      self.queue[event].push(callback);
    }
  };
}());
