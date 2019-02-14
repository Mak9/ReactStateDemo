import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={setup:null,punchline:null,loading:false}
    window.fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response=>response.json()).then(data=>this.setState({setup:data.setup,punchline:data.punchline}))
  }
  clickhandle(){
    this.setState({loading:true})

     window.fetch('https://official-joke-api.appspot.com/jokes/random')
    .then(response=>response.json()).then(data=>this.setState({setup:data.setup,punchline:data.punchline,loading:false}))
    
    
    
  }
  render() {
    
    return (
      <div>
      <center><h1>Jokes Pandora</h1>
      <div className="App" onClick={()=>{this.clickhandle()}}>
    {this.state.loading?<p>Loading...</p>:<div><p>{this.state.setup}</p>
    <p>{this.state.punchline}</p></div>}
    
      </div>
      </center>
      </div>
    );
  }
}

export default App;
