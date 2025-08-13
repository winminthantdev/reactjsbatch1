import React from "react";
import PhotoPost from "./PhotoPost";
import items from "./data/items.json";

import icon1 from "./../assets/icons/icon1.png";
import icon2 from "./../assets/icons/icon2.png";
import icon3 from "./../assets/icons/icon3.png";
import icon4 from "./../assets/icons/icon4.png";
import icon5 from "./../assets/icons/icon5.png";
import icon6 from "./../assets/icons/icon6.png";

const images = {icon1,icon2,icon3,icon4,icon5,icon6};

class AllPosts extends React.Component {
  render() {
			const posts = items.todayposts;
    return (
      // <div className='d-flex'>

      //   <div className="item">
      //   <PhotoPost title='This is new post 1' caption='News Post' src={icon1} />
      //   </div>

      //   <div className="item-container">
      //   <PhotoPost title='This is new post 2' caption='News Post' src={icon2} />
      //   </div>

      //   <div className="item-container">
      //   <PhotoPost title='This is new post 3' caption='News Post' src={icon3} />
      //   </div>

      //   <div className="item-container">
      //   <PhotoPost title='This is new post 4' caption='News Post' src={icon4} />
      //   </div>
      //   <div className="item-container">
      //   <PhotoPost title='This is new post 5' caption='News Post' src={icon5} />
      //   </div>

      //   <div className="item-container">
      //   <PhotoPost title='This is new post 6' caption='News Post' src={icon6} />
      //   </div>
								
      //   {/* {posts.map((item, idx) => (
      //     <PhotoPost key={idx} title={item.title} caption={item.caption} src={item.src} />
      //   ))} */}

      
      // </div>

      <div className="d-flex">
        {items.todayposts.map((item,idx) =>{
          return (
            <div className='item-container' key={idx}>
             <PhotoPost title={item.title} caption={item.caption} src={images[item.src]} /> 
            </div>
          );
        })}
      </div>
    );
  }
}

export default AllPosts;
