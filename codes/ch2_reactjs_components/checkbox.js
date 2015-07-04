var Checkbox = React.createClass({
	getInitialState: function() {
		return {
			checked: true
		}
	},

	handleCheck: function() {
		this.setState({
			checked: !this.state.checked
		});
	},

	render: function() {
		var message;
		if(this.state.checked) {
			message = "checked";
		} else {
			message = "unchecked";
		}
		return (
			<div>
				<input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked} />
				<p>This box is {message}</p>
			</div>
		);
	}
});

React.render(<Checkbox/>, document.getElementById("reactjs-component"));