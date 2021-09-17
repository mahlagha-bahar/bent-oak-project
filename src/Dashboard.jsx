import React from "react";
import {useHistory} from "react-router-dom";
const Dashboard = () => {
let history=useHistory();
const handleLogout = () =>{
  history.push('/login')
}

  return( 
  <div>Welcome 
  <input  type="button" value="Logout" onClick={handleLogout}/>
  </div>
  );
};
export default Dashboard;
