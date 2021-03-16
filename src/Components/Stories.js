import React from "react";
import { Link } from 'react-router-dom';
import mas from '../Images/simbolo_mas.png';
import profile1 from '../Images/profile1.jpg';

class Stories extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
  }
  render() {
    return (
      <div id="stories-wrapper">
        <div id="stories-container">
            <button class="story">
                <div class="profile">
                    <img src={mas} alt=""></img>
                </div>
                <div class="title">
                    New
                </div>
            </button>
            <button class="story">
                <div class="profile">
                    <img src={profile1} alt=""></img>
                </div>
                <div class="title">
                    Jose Rodriguez
                </div>
            </button>
        </div>
      </div>
    );
  }
}

export default Stories;