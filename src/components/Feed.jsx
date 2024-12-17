import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import {addFeed} from "../utils/feedSlice"
import { useEffect } from "react";
import UserCard from "./UserCard";

const Feed = () =>
{
    const feed = useSelector((store) => store.feed)
    const dispatch = useDispatch()
    console.log(feed);

    const fetchFeed = async () =>{
        if(feed) return;
        const res = await axios.get(BASE_URL + "/feed", {withCredentials:true})
        console.log(res.data.usersToShow);
        dispatch(addFeed(res?.data?.usersToShow))
    }

    useEffect(()=>{
        fetchFeed()
    }, []);

    if(!feed) return;
    return (
        feed && (
          <div className="flex justify-center my-10">
            <UserCard user={feed[1]} />
          </div>
        )
      );
}

export default Feed;