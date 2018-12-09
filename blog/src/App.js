import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import{ MyBlogBody } from './lib/componentSt'



//components
import Header from './components/header'
import Home from './components/home'
import PostPage from './components/postPage'
import Post from './components/post'


class App extends Component {


  render() {
   

    return (
    
      <BrowserRouter>
        <MyBlogBody>
          <Header/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route  path='/Posts' component={PostPage}/>
            <Route  path='/Post/:Post_Number' component={Post}/>
          </Switch>
        </MyBlogBody>
      </BrowserRouter>
    
    );
  }
}


export default App
