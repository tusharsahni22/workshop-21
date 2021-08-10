import { useState } from 'react';
import Loginform from"./component/Loginform";
import './App.css';

function App() {
  const adminUser ={
   email:"admin@admin.com",
   password: "admin@123"     
  }
  const [user,setUser] =useState({name:"",email:""});
  const [error,SetError] =useState("");

  const Login = details =>{
    console.log(details);
    if (details.email == adminUser.email && details.password ==adminUser.password){
    console.log("Logged In")
    setUser ({
      name: details.name,
      email: details.email,
      password:details.password
    }) 
  }
  
  
   else {
    console.log("Details Missmatched")}
    SetError("Details Missmatched")
      
  }
  const Logout =() =>{
    setUser({name:"",email:""})
}

  


  return (
    <div className="App">
      {(user.email != "")?(
      <div className="welcome">
      <h2>Welcome, <span>{user.name}</span></h2>
      <button onClick={Logout}> Logout</button> 
      </div>
      ):(
        <Loginform Login={Login} error ={error} />
      )}     
    </div>
  );
}


export default App;
