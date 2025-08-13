import { useEffect, useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { togglefavorite, fetchposts, fetchcomments } from "./store/postreducer.js";

function App() {
  const {posts,comments,favorites,loading,error} = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(fetchposts())
      // .upwrap()
      .then((response) => {
        // console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

      dispatch(fetchcomments())
      // .upwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Group comments by postId
  const commentsbypost = comments.reduce(((init,comment)=>{
    init[comment.postId] = init[comment.postId] || []
    init[comment.postId].push(comment);
    return init;
  }),{})

  // console.log(commentsbypost);


  return (
    <div>
        <h3>Posts List</h3>
          {loading && <p>Loading posts...</p>}
          {error && <p style={{color:"red"}}>{error}</p>}

        <ul>
          {posts.map(post=>(
              <li key={post.id}>
                <h3>{post.title}</h3> 
                <p>{post.body}</p>

                <h4>Comment :</h4>

                <ul>
                  {
                    commentsbypost[post.id] ? (
                      commentsbypost[post.id].map(comment=>(
                        <li key={comment.id}>
                          <strong>{comment.name}</strong> : {comment.body}
                        </li>
                      ))
                    ) :
                    (
                      <p>No comments available</p>
                    )
                  }
                </ul>
                <button type="button" onClick={()=>dispatch(togglefavorite(post.id))}>
                  {favorites.includes(post.id) ? 'Unfavorite' : 'Favorite'}
                </button>
              </li>
          ))}
        </ul>

        {/* <h3>Comments</h3>
        <ul>
          {comments.map(comment=>(
              <li key={comment.id}>
              <strong>{comment.name}</strong> : {comment.body}
            </li>
          ))}
        </ul> */}



    </div>
  );
}

export default App;




// 20CT

// 24EX