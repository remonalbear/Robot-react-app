import React from 'react';


const SearchBox =({searchChange}) => {
	return (
		<div className="tc pa2">
		 <input  className="tc pa3 ba b--green bg-lightest-blue" 
		 type ="search"
		  placeholder='search robots'
		  onChange={searchChange} />
		</div>
		);

}


export default SearchBox;