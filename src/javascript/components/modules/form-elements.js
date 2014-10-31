/* global React */
/* global App */

App.Module.Form.TextInput = React.createClass({
  getInitialState: function() {
    return {
      randomId: this.props.name + "-" + App.Util.GenerateRandomId(),
      active: false
    };
  },
  onChange: function() {
    if (typeof this.props.onChange === "function") {
      this.props.onChange(
        this.refs.field.getDOMNode().value,
        this.props.name
      );
    }
  },
  onFocus: function() {
    return this.setState({active: true});
  },
  onBlur: function() {
    return this.setState({active: false});
  },
  render: function() {
    if (typeof this.props.extraClass === "undefined") {
      this.props.extraClass = "";
    } else {
      this.props.extraClass = " " + this.props.extraClass;
    }
    return React.DOM.div({
      className: "form-line " +
                 this.props.name + "-line" +
                 this.props.extraClass +
                 (this.state.active ? " active" : ""),
      children: [
        React.DOM.label({ htmlFor: this.state.randomId }, this.props.label),
        React.DOM.input({
          type: "text",
          ref: "field",
          id: this.state.randomId,
          name: this.props.name,
          autoComplete: "off",
          placeholder: this.props.placeholder,
          onChange: this.onChange,
          value: this.props.value,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        })
      ]
    });
  }
});
