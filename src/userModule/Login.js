import React, { useState } from 'react';
import { loginapi } from '../apicalls/apicalls';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
       
            UserName: "",
            UserPassword: ""
        
    })
    const onChangeHandler =(keyname,value)=>{
        setLoginData({...loginData,[keyname]:value})
    }
    const onSubmitHandler=(e)=>{
      e.preventDefault();
      
       if(loginData.UserName==="admin" && loginData.UserPassword==="123"){
        localStorage.setItem("isAdmin","true");
        localStorage.setItem("isLogin","true");
        navigate('/')
        setLoginData({ UserName: "",UserPassword: ""})
       }else{

           loginapi(loginData).then((response)=>{
                   console.log(response);
                   if(response.message==="Login Successful"){
                        localStorage.setItem("isLogin","true");
                        localStorage.setItem("userid",response.data.custId);
                        setLoginData({ UserName: "",UserPassword: ""})
                        navigate('/')
                        
                   }else{
                     alert(response.message)
                   }
           })
       }


    }
return (
    <div className='col-4 offset-4'>
        <h4 className='text-center'>Login Form</h4>

        <form onSubmit={(e)=>onSubmitHandler(e)}>
            <div className="form-group">
                <label >Email address</label>
                <input type="text" value={loginData.UserName} className="form-control"  onChange={(e)=>onChangeHandler("UserName",e.target.value)} placeholder="enter mobile number" />
                
            </div>
            <div className="form-group">
                <label >Password</label>
                <input type="text" value={loginData.UserPassword}   onChange={(e)=>onChangeHandler("UserPassword",e.target.value)} className="form-control" placeholder="Password" />
            </div>
            
            <button type="submit" className="btn btn-primary mt-4">Login</button>
        </form>

    </div>
);
};

export default Login;