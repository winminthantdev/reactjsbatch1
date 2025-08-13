import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { deleteuser } from "../../store/usersreducer";

export default function DeleteUser() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const users = useSelector(state => state.users.users);
  const currentuser = users.find(user => user.id === Number(id));

  const deleteHandler = () => {
    dispatch(deleteuser(Number(id)))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(err => {
        console.error(err);
      });
  };

  if (!currentuser) return <p>User not found.</p>;

  return (
    <div>
      <h3>Are you sure you want to delete user "{currentuser.name}"?</h3>
      <button type="button" onClick={deleteHandler}>
        Yes, Delete
      </button>
      <button type="button" onClick={() => navigate(-1)}>
        Cancel
      </button>
    </div>
  );
}
