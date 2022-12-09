import './Register.scss';
import { Link } from 'react-router-dom'; 

const Register = () => {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Lama Social.</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Optio itaque velit quaerat doloribus ratione? Aliquam, vitae distinctio quibusdam magni,
                </p>
                <span>Do you have an account?</span>
                <Link to='/login'>
                    <button>Login</button>
                </Link>
            </div>
            <div className="right">
                <h1>Register</h1>
                <form>
                    <input type="text" name="username" placeholder="Enter user name"/>
                    <input type="email" name="email" placeholder="Enter email"/>
                    <input type="text" name="password" placeholder="Enter passsword" />
                    <input type="text" name="name" placeholder="Enter name"/>
                    <button>Register</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register;
