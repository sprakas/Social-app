import './Post.scss';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {Link} from 'react-router-dom';
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import Comments from '../comments/Comments';
import { useState } from 'react';


const Post = ({post}) => {

    const [showComments, setShowComments] = useState(false);

  //TEMPORARY
  const liked = true;

  return <div className="post">
    <div className="container">
        <div className="user">
            <div className="user-details">
                <img src={post.profilePic} alt="" />
                <div className='user-name'>
                    <Link to='/' style={{textDecoration: 'none', color: 'inherit'}}>
                        <span className='name'>{post.name}</span>
                    </Link>
                    <span className="date">1 min ago</span>
                </div>
            </div>
            <MoreHorizIcon/>
        </div>
        <div className="body">
            <span>{post.desc}</span>
            <img src={post.img} alt="" />
        </div>
        <div className="actions">
            <div className="item">
                {liked ? <FavoriteOutlinedIcon/> : <FavoriteBorderOutlinedIcon/>}
                100 likes
            </div>
            <div className="item" onClick={()=>setShowComments(!showComments)}>
                <TextsmsOutlinedIcon/>
                10 comments
            </div>
            <div className="item">
                <ShareOutlinedIcon/>
                Share
            </div>
        </div>
        {showComments&&<Comments/>}
    </div>
  </div>;
}

export default Post;
