import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

// eslint-disable-next-line react/prop-types
const UserCard = ({user}) =>
{
    // eslint-disable-next-line react/prop-types
    const {_id, firstName, lastName, age, gender} = user;
    const dispatch = useDispatch();

    const handleResponse = async (status, _id) =>
    {
      try
      {
        await axios.post(BASE_URL + "/request/send/" + status + "/" + _id, {}, {withCredentials:true});
        dispatch(removeUserFromFeed(_id));        
      }
      catch(err)
      {
        console.log(err.message);
      }
    }


    return (
        <div className="card bg-base-300 w-96 shadow-xl my-10 mx-10">
  <figure>
    <img
      src={lastName}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName}</h2>
    <p>{age}, {gender}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>handleResponse("interested", _id)}>Interetsed</button>
      <button className="btn btn-primary" onClick={()=>handleResponse("ignored", _id)}>Ignore</button>
    </div>
  </div>
</div>
    )
}

export default UserCard;