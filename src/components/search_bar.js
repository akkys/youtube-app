import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state = { searchterm: '' };
	}

	render() {
		return(
				<div className="search_bar">
					<input 
						value={this.state.searchterm}
						onChange={event => this.onInputChange(event.target.value)} />
				</div>
			);
	}

	onInputChange(searchterm) {
		this.setState({searchterm});
		this.props.onSearchTermChange(searchterm);
	}
	
}

export default SearchBar;