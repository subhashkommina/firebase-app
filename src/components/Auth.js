import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "../config/firebase"

export const Auth=()=>{
//state for email
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

const signin=async()=>{
    await createUserWithEmailAndPassword(auth,email,password)
    
}
return(
    <div>
        EMail:<input placeholder="email..." onChange={(e)=>setEmail(e.target.value)}/>
        Password:<input placeholder="password..." onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={signin}>signin</button>
    </div>
)
}