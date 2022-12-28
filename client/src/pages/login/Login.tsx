import './Login.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Login = () => {
    
  const {login} = useContext(AuthContext);

  const handleLogin = () => {
    login();
  }

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Optio itaque velit quaerat doloribus ratione? Aliquam, vitae distinctio quibusdam magni,
                </p>
                <span>Don't you have an account?</span>
                <Link to='/register'>
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" name="username" id="name" placeholder="Enter name"/>
                    <input type="text" name="password" id="password" placeholder="Enter passsword" />
                    <button onClick={handleLogin}>SignIn</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login;
