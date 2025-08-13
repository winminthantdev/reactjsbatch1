import React from "react";

class PhotoPost extends React.Component {
  render() {
    const title = this.props.title;
    const caption = this.props.caption;
    const imagepath = this.props.src;

    return (
      <div>
        <img src={imagepath} className='posticon' alt='posticon' />
        <h4>{title}</h4>
        <h4>{caption}</h4>
      </div>
    );
  }
}

export default PhotoPost;

// // 28PH
