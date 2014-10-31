/* global React */
/* global App */

App.Module.Section.Calculator = React.createClass({
  getInitialState: function() {
    return {
      actualSavings: 0,
      actualAge: 27,
      monthlySavings: 15000,
      goal: 1000000
    };
  },
  render: function() {
    var _ = this;
    return React.DOM.div(
      { className: "calculator" },
      [
        App.Module.Form.TextInput({
          label: "Eddig félretett pénz",
          name: "actual-savings",
          value: this.state.actualSavings,
          onChange: function(newValue) {
            newValue = parseInt(newValue, 10);
            if (isNaN(newValue)) {
              newValue = 0;
            }
            return _.setState({actualSavings: newValue });
          }
        }),
        App.Module.Form.TextInput({
          label: "Hány éves vagy most?",
          name: "actual-age",
          value: this.state.actualAge,
          onChange: function(newValue) {
            newValue = parseInt(newValue, 10);
            if (isNaN(newValue) || newValue < 1) {
              newValue = 1;
            }
            return _.setState({actualAge: newValue});
          }
        }),
        App.Module.Form.TextInput({
          label: "Mennyit szeretnél félrerakni egy hónapban?",
          name: "monthly-savings",
          value: this.state.monthlySavings,
          onChange: function(newValue) {
            newValue = parseInt(newValue, 10);
            if (isNaN(newValue) || newValue < 1) {
              newValue = 1;
            }
            return _.setState({monthlySavings: newValue});
          }
        }),
        React.DOM.div(
          { className: "years-remains" },
          [
            React.DOM.span(
              { className: "important-value" },
              (Math.round(
                (
                  (this.state.goal - this.state.actualSavings) /
                  this.state.monthlySavings /
                  12
                ) * 10,
                2
              ) / 10)
            ),
            " év múlva leszel milliomos."
          ]
        ),
        React.DOM.div(
          { className: "years-will-be" },
          [
            "Mire eléred a milliomos címert ",
            React.DOM.span(
              { className: "important-value" },
              (this.state.actualAge + Math.floor(
                (
                  (this.state.goal - this.state.actualSavings) /
                  this.state.monthlySavings /
                  12
                ),
                2
              ))
            ),
            " éves leszel."
          ]
        )
      ]
    );
  }
});
