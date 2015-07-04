var Note = React.createClass({
	getInitialState: function() {
		return {
			editing: false
		};
	},

	edit: function() {
		this.setState({
			editing: true
		});
	},

	save: function() {
		this.setState({
			editing: false
		});
	},

	remove: function() {
		alert("Removing note");
	},

	renderDisplay: function() {
		return (
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit}>Edit</button>
					<button onClick={this.remove}>Delete</button>
				</span>
			</div>
		);
	},

	renderForm: function() {
		return (
			<div className="note">
				<textarea defaultValue={this.props.children}></textarea>
				<button onClick={this.save}>Save</button>
			</div>
		);
	},

	render: function() {
		if(this.state.editing) {
			return this.renderForm();
		} else {
			return this.renderDisplay();
		}
	}
});

React.render(<Note>Hello World</Note>, document.getElementById("note-component"));