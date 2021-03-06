import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header';
import Stories from './Components/Stories'
import AddPost from './Components/AddPost';
import PostFeed from './Components/PostFeed/PostFeed';
import { BrowserRouter as Router, Route } from "react-router-dom";
import loader from './Images/loader.gif';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {this.props.getPostReducer.loading && <div className="loader-div"><img src={loader} className="loader" /></div> }
          {this.props.addPostReducer.loading && <div className="loader-div"><img src={loader} className="loader" /></div> }
          <Route exact path="/" component={Stories} />
          <Route exact path="/" component={PostFeed} />
          <Route exact path="/add" component={AddPost} />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
}
export default connect(mapStateToProps)(App);