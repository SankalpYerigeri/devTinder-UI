import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () =>
{

    const dispatch = useDispatch()
    const connections = useSelector((store) => store.connections)
    const fetchConnections = async () =>
    {
        try
        {
            const res = await axios.get(BASE_URL + "/user/connections",{withCredentials:true})
            console.log(res.data.data)
            dispatch(addConnections(res.data.data));
        }
        catch(err)
        {
            console.log(err.message)
        }

    }

    useEffect(()=>{
        fetchConnections();
    }, [])

    if(!connections) return;

    if(connections.length === 0) return  <h1>No Connections Found</h1>

    return(
        <>
        <div className="text-center my-10">
            <h1 className="text-2xl text-white my-10">Connections</h1>
        

        {connections.map((connection) => {
           
            const {firstName, lastName, age, gender, _id} = connection;

            return(
                <div key={_id} className="flex m-4 p-4  w-1/2 mx-auto rounded-lg bg-base-300">
                    <div>
                        <img className="w-20 h-20 rounded-full"  src={lastName}/>
                    </div>
                    <div className="text-left mx-4">
                        <h1 className="text-2xl text-white">{firstName}</h1>
                        {age && gender && <p>{age} , {gender}</p>}
                        
                    </div>
                </div>
            )

            

        })}

        </div>


        </>

   


    )
}

export default Connections;