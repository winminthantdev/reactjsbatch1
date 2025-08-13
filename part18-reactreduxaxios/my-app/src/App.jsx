import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addmovie } from "./store/moviesreducer.js";
// import { setrole , getusers} from "./store/usersreducer.js";
import { setrole, fetchusers } from "./store/usersreducer.js";

function App() {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  console.log(movies);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fechuser())

    dispatch(fetchusers())
      // .upwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div>
        <h3>Movies List</h3>

        <ul>
          {movies
            ? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
            : null}
        </ul>

        {/* <button type="button" onClick={()=>dispatch(addmovie())}>Add Movie</button> */}
        <button
          type="button"
          onClick={() => dispatch(addmovie({ id: 4, title: "3 idiots" }))}
        >
          Add Movie
        </button>

        <hr />

        <h3>User Role : {users.role}</h3>

        <button type="button" onClick={() => dispatch(setrole("Admin"))}>
          Set User Role
        </button>

        <hr />

        <div>{users.loading ? "loading..." : null}</div>
        <ol>
          {users
            ? users.users.map((user) => <li key={user.id}>{user.name}</li>)
            : null}
        </ol>
        {/* before tunnk */}
        {/* <button type="button" onClick={()=>dispatch(setrole(getusers()))}>Get Users</button> */}

        {/* before tunnk */}
        <button type="button" onClick={() => dispatch(fetchusers())}>
          Get Users
        </button>
        {/* <button type="button" onClick={()=>dispatch(fetchusers({id:1}))}>Get Users</button> */}
      </div>
    </div>
  );
}

export default App;


