import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export class App extends Component {
  constructor() {
    super();
    this.state={
      bg : 'light'
    };
  }
  changeCol = () =>{
    if(this.state.bg==='light'){
      this.setState({bg : 'dark'})
      document.body.style.backgroundColor = '#000000'
    }
    else{
      this.setState({bg : 'light'})
      document.body.style.backgroundColor = '#ffffff'
    }
  }
  pageSize=15;
  // api_key = process.env.REACT_NEWS_APP_API_KEY
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <NavBar changeCol={this.changeCol}/>
          <LoadingBar
          height={3}
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
          <Route exact path='/' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="home" bg={this.state.bg} category='general'/>}> </Route> 
          <Route exact path='/business' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="business" bg={this.state.bg} category='business'/>}> </Route>
          <Route exact path='/sports' element={ <News  setProgress={this.setProgress} pageSize={this.pageSize} key="sports" bg={this.state.bg} category='sports'/>}></Route>
          <Route exact path='/general' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="general" bg={this.state.bg} category='general'/>}> </Route>
          <Route exact path='/entertainment' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="entertainment" bg={this.state.bg} category='entertainment'/>}> </Route>
          <Route exact path='/health' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="health" bg={this.state.bg} category='health'/>}> </Route>
          <Route exact path='/technology' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="technology" bg={this.state.bg} category='technology'/>}> </Route>
          <Route exact path='/science' element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="science" bg={this.state.bg} category='science'/>}> </Route>
          </Routes>
          </Router>
      </div>
    )
  }
}

export default App
