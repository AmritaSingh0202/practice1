import { useEffect,useState } from "react";
import { getPosts ,getRandomUser} from "./api";
import "./App.css";
import PostCards from "./component/postcars";
import UserCard from "./component/UserCard";

function App() {
  const[data,setData]= useState(null);
  const[userData,setUserData]= useState(null);

  useEffect(() => {
    getPosts().then((posts) => setData(posts));
  }, []);

useEffect(()=>{
  getRandomUser().then((user)=> setUserData(user.results[0]));
},[]); 
  
  
  return (
  <div className="App">
    {userData && <UserCard data={userData}/>}
    {
    data ? data.map((e)=> <PostCards title={e.title} body={e.body}/>):<p>No Data</p>
    }
  </div>

  )
}

export default App;
