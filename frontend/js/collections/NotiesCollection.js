// Generated by CoffeeScript 1.6.2
(function() {
  var _this = this,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define('collections/NotiesCollection', ['backbone', 'models/NotyModel'], function(B, NotyModel) {
    var NotiesCollection, _ref;

    NotiesCollection = (function(_super) {
      __extends(NotiesCollection, _super);

      function NotiesCollection() {
        _ref = NotiesCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return NotiesCollection;

    })(B.Collection);
    return NotiesCollection;
  });

}).call(this);