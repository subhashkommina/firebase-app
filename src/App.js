import { useEffect,useState } from "react";
import { Auth } from "./components/Auth";
import { db } from "./config/firebase";
import { getDocs,collection,addDoc,deleteDoc,doc,updateDoc } from "firebase/firestore";
function App() {

  const [users,setUsers]=useState([])
  const [name,setName]=useState("")
  const [age,setAge]=useState(0)
  const [check,setChecked]=useState(false)
  const [updateName,setUpdatedName]=useState("")
  const userRef=collection(db,"USERS")
  
  
  const getUsers=async ()=>{
    try{
     let data=await getDocs(userRef)
   
     const filteredData=data.docs.map((doc)=>
     ({...doc.data(),id:doc.id}
     ))
     console.log(filteredData)
     setUsers(filteredData)
    }
    catch(err){
    console.error(err)
    }
  }
  
  
  const deleteUser= async (id)=>{
    const userDoc=doc(db,"USERS",id)
    await deleteDoc(userDoc)
  }

   const updateUser= async (id)=>{
    const userDoc=doc(db,"USERS",id)
    await updateDoc(userDoc,{name:updateName})
    getUsers()
  }
  
  
  useEffect(() =>{ 
  getUsers();
   // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 

  const signIn= async()=>{
    try{
    await addDoc(userRef,{name:name,age:age,checked:check})
    getUsers()
    }
    catch(err){ console.error(err)}
  }
  
  
  return (
    <div>
       <Auth/>
       <div>
       <h2> User Data</h2>
       <input 
        placeholder="User Name..."
        onChange={(e)=>setName(e.target.value)}
        type="text"
        />
        <input 
        placeholder="Age..."
        onChange={(e)=>setAge(e.target.value)}
        type="number"
        />
        <input 
        onChange={(e)=>setChecked(e.target.checked)}
        type="checkbox"
        />
        <label>SignIn</label>
        <button onClick={signIn}>Submit User </button>    
       </div>
      {users.map((user)=>(
        <div>
          <h1 style={{color:user.checked? "green":"red"}}> {user.name}</h1>
          <h2 style={{color:user.age > 20? "blue":"red"}}>{user.age}</h2>
          <button onClick={()=>deleteUser(user.id)}>Delete User</button>
          <input placeholder="updateName..." onChange={(e)=> setUpdatedName(e.target.value)} />
          <button onClick={()=>updateUser(user.id)}>update Name</button>

        </div>
))}
    </div>
  );
}
export default App;