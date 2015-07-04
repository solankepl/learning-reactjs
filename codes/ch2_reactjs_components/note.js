var Note = React.createClass({
	edit: function() {
		alert("Editing note");
	},

	remove: function() {
		alert("Removing note");
	},

	render: function() {
		return (
			<div className="note">
				<p>{this.props.children}</p>
				<span>
					<button onClick={this.edit}>Edit</button>
					<button onClick={this.remove}>Delete</button>
				</span>
			</div>
		);
	}
});

React.render(<Note>Hello World</Note>, document.getElementById("note-component"));