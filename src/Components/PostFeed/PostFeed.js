import React from "react";
import user from "../../Images/user.jpeg";
import post from "../../Images/post.jpg";
import Comment from "./Comment";
import { connect } from "react-redux";
import { getPostThunk } from "../../Actions/getPostActions";

class PostFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getPostThunk());
  }
  render() {
    let postList = "No Posts Found";
    if(this.props.getPostReducer.data){
      postList = this.props.getPostReducer.data.map((e, i) => {
        var likeCheck = false;
        var likecount = 0;
        if(likeCheck){
          likecount = e.likes + 1;
        }else{
          likecount = e.likes;
        }
        return (
        <div key={i} className="post">
          <div className="caption">
            <img  src={user} alt="dp" className="user" />
            
          </div>
          <img onDoubleClick={() => {console.log("aa"); likeCheck = true } } src={e.image_url} alt="Post" className="post-image" />
          <p className="caption-text">{e.caption}</p>
          <Comment isLiked={likeCheck} likes={likecount} comments={e.comments} timestamp={e.time} />
        </div>);
      }).reverse();
    }

    return (<div className="post-area" >
      {postList}
    </div>
  );
  }
}
const mapStateToProps = state => {
  return state;
};
export default connect(mapStateToProps)(PostFeed);