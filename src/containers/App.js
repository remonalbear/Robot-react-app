import React ,{Component}from 'react';
import CardList from '../components/CardList';
import SearchBox from'../components/SearchBox';
import Scroll from '../components/Scroll'
//import {robots} from './robots.js';
import './App.css';
import ErrorBoundry from '../components/ErrorBoundry'


class App extends Component {

	constructor ()
	{
		super()
		this.state= {
			robots: [],
			searchfield: '',
		}
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response =>{return response.json();})
		.then(users => {this.setState({robots:users})
	});
		

	}


	onSearchChange =(event)=>{
		this.setState({searchfield:event.target.value})
		
	}

	render() {
		 const filterRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		 })
		return (
				<div>
				 <h1 className="tc f1 ">RoboFriend</h1>
				 <SearchBox searchChange={this.onSearchChange}/>
				 <Scroll>
				  <ErrorBoundry>
				   <CardList robots={filterRobots}/>
				  </ErrorBoundry>
				 </Scroll>
				</div>
		);
	}
		
}

export default App ;