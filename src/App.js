import React from 'react';
import axios from 'axios';
import './App.css';
import Joke from "./joke";

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      question:"Programming",
      punchline:"Your momma is so fat, we had to switch to NTFS to store her."
    }
  }

  async componentDidMount(){
    const res = await axios.get("https://sv443.net/jokeapi/category/Programming?blacklistFlags=nsfw&");
    this.setState({
      question:res.data.setup |res.data.delivery|res.data.category| this.state.question,
      punchline: res.data.joke | res.data.delivery |res.data.category | this.state.punchline
    })
  }

  render(){
    return (
      <div className="App">
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
        <Joke question={this.state.question} punchline={this.state.punchline} />
      </div>
    );
  }
}

export default App;
