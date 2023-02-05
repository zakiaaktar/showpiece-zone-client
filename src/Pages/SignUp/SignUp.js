import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setAuthToken } from '../../api/auth';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';




const SignUp = () => {

    const{createUser} = useContext(AuthContext);


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setAuthToken(user);
        })
        .catch(err => console.log(err));
    }


    return (
        <div className="hero w-full">
            <div className="hero-content grid md:grid-cols-2 gap-20 flex-col lg:flex-row">
                <div className="text-center lg:text-left">

                    <img className='w-3/4' src={img} alt="" />
                </div>
                <div className="py-20 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-gradient-to-br from-blue-900 to-purple-500 rounded-none" type="submit" value="Sign Up" />
                        </div>
                    </form>

                    <p className='text-center'>Already have an account? <Link className='text-blue-900 font-bold' to='/login'>Login</Link></p>


                </div>
            </div>
        </div>
    );
};

export default SignUp;