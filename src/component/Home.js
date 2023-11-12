// src/components/Login.js
import React,{useState} from 'react';
import { Button,TextField } from '@mui/material';
import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import {auth,provider,Facebookprovider} from './Firebase';
import { useNavigate,Link } from "react-router-dom";
import '../style.css';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
function Home(){
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

const history=useNavigate();
    const handleGoogleSignIn =  e => {

        e.preventDefault()
        try {
          signInWithPopup(auth, provider).then(()=>{
            history('/Profile')
          })
          .catch(err=>alert(err.message))
        } catch (error) {
          console.error(error);
        }
      };
      const handleFacebookSignIn = async (e) => {
        e.preventDefault();
        try {
          await signInWithPopup(auth, Facebookprovider);
          history('/Profile'); 
        } catch (error) {
          setError(error.message);
        }
      };
      const login = e => {
        history('/Profile');
       
      }
     
  return (
    <div className="Login_container">
        <div className='Login_details'>
      <h2>Login</h2><br/>
      <Button sx={{backgroundColor:"#EA2F0E",color:"#ffff",'&:hover':{backgroundColor:"#EA2F0E"}}} startIcon={<GoogleIcon/>}variant="outlined" onClick={handleGoogleSignIn}  >
        Login with Google
      </Button>&nbsp;&nbsp;&nbsp;&nbsp;
      <Button sx={{backgroundColor:'#2c488e',color:"#ffff",'&:hover':{backgroundColor:'#2c488e'}}} startIcon={<FacebookIcon/>} variant='outlined' onClick={handleFacebookSignIn}>
        Login with Facebook
      </Button><br/><br/>
      <div><TextField id="outlined" label="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>       <br/><br/>
          <TextField label="Password"type="password"autoComplete="current-password" value={password} onChange={(e)=>setPassword(e.target.value)}/>    <br/> <br/>
          <span><Link to='/'>Forgot password?</Link></span><br/><br/>
          <Button variant="contained" onClick={login}>Login</Button> &nbsp;&nbsp;&nbsp;
          
          </div>
    </div>
    </div>
  );
};

export default Home;
