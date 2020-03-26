import React, { Component } from 'react';
import CardsArray from './CardsArray';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


class App extends Component {
    
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange = (event) => {        
        this.setState({searchField:event.target.value});
    }

    render(){   
        const filteredRobots = this.state.robots.filter(robot =>
            robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
            );

        return(
            <div className='tc'>
                <h1 className="f1 light-green">Robo Friends</h1>
                <SearchBox searchChnage = {this.onSearchChange} />
                <Scroll>
                    <CardsArray robots={filteredRobots}/>
                </Scroll>
            </div>
        );
    }

    componentDidMount(){
        console.log(this.state.robots);
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({robots: users}));
        console.log(this.state.robots);
    }
}

export default App;