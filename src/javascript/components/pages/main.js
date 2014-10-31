/* global React */
/* global EventSystem */
/* global LoginPage */
/* global ListPage */
/* global App */
/* global console */

App.Page.Main = React.createClass({
  render: function() {
    return React.DOM.div({}, [
      React.DOM.h1(
        {},
        [
          "Mikor leszek milliomos?"
        ]
      ),
      App.Module.Section.Calculator()
    ]);
  }
});
