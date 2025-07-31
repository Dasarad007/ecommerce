import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
var [Email,SetEmail] = useState("")
var [password,Setpassword] = useState("")
 var Navigate = useNavigate()

 async function handleChange() {
    var result = await fetch("https://68877a71071f195ca980ef32.mockapi.io/users")
    var response = await result.json()
    var data = response.find(item=>item.myEmail == Email && item.mypassword == password)
    if(data){
        alert("Login sucess")
        Navigate("/home")
    }else{
        alert("Login failed")
        SetEmail("")
        Setpassword("")
    }
 }
  return (
    <div id='div'>
      <h1>LOGIN</h1>
    <div id='new'>
    <label htmlFor="">Enter email</label>
    <input value={Email} onChange={(e)=>{SetEmail(e.target.value)}} type="text" />
    <label htmlFor="">enter password</label>
    <input value={password} onChange={(e)=> {Setpassword(e.target.value)}} type="text" />
    <button onClick={handleChange}>login</button>
    </div>
    </div>
  )
}

export default Login