import React from "react";
import logo from '../Images/logo-instagram.png';
import { Link } from 'react-router-dom';
import noti from '../Images/noti.png';
import mensaje from '../Images/mensage.png';
import profile1 from '../Images/profile1.jpg';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      search: ""
    }
  }
  render() {
    return (
      <div className="header">
        <div className="brand">
          <img src={logo} className="logo" alt="Brand" />
          <input type="text" name="search" value={this.props.search} placeholder="Search" className="search_url" />
        </div>
        <Link to="/add"><button className="add-post">Add Post</button></Link>
        <Link to=""><button className="add-user">User profile<img src={profile1}></img></button></Link>
        <img src={noti} className="noti"></img>
        <img src={mensaje} className="mensage"></img>
      </div>
    );
  }
}

export default Header;