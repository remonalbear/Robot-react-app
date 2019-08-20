import React from 'react';
import Card from './Card';

const CardList =({robots}) => {
const CardComponent = robots.map((user,i) => {
	
/*if(true)
{

	throw new Error  ('Nooooooooo');
}*/
	return (
		<Card key={robots[i].id} 
		name={robots[i].name} 
		id={robots[i].id} 
		email ={robots[i].email} 
		/>
		);

})

	return (
			<div>
			{CardComponent}
			</div> 
		);
}



export  default CardList;