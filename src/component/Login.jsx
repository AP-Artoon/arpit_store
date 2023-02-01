import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import loginphoto from './images/signin-image.jpg'
import { VscMail, VscLock } from "react-icons/vsc";
import { BsTwitter, BsFacebook, BsGoogle } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            pass: "",
        }
    });

    const emailFormet = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passFormet = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    const navigate = useNavigate();

    const onSubmit = (values) => {

        if (values.email !== '' && values.password !== '') {

            let users = JSON.parse(localStorage.getItem('userdata'));

            console.log(users, "on sub");

            for (const iterator of users) {

                var useremail = iterator.email;
                var userpassword = iterator.pass;
                var username = iterator.name;
                var userid = iterator.id;
                var cart = iterator.cart;



                if (values.email === useremail && values.pass === userpassword) {

                    // alert('You are logged in.');
                    let currentuserdata = ({ id: userid, name: username, email: values.email, pass: userpassword, cart: cart })
                    localStorage.setItem('current-user-data', JSON.stringify(currentuserdata))
                    navigate("/home");
                    reset();
                    // window.open('https://preview.cruip.com/switch/');
                } else {
                    toast.warn("Invalid cradential")
                }

            }
        }



    }


    return (

        <div className="main">

            <section className="sign-in">
                <div className="my-container">
                    <div className="signin-content">
                        <div className="signin-image">
                            <img src={loginphoto} alt="sing in" />
                            <p className="signup-image-link"> <Link to="/"> Create an account</Link></p>
                        </div>
                        <div className="signin-form">
                            <h2 className="form-title">Sing In</h2>

                            <form className="register-form" id="login-form" onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="your_name"><VscMail /></label>

                                    <input type="text" id="your_name" placeholder="Your Email"
                                        {...register("email", {
                                            // onChange: (e) => handelChange(e.target, setEmail),
                                            required: "This is required",
                                            // pattern: {
                                            //     value: emailFormet,
                                            //     message: "Please enter Valid Email",
                                            // }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>{errors.email?.message}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="your_pass"><VscLock /></label>
                                    <input type="password" name="your_pass" id="your_pass" placeholder="Password"
                                        {...register("pass", {
                                            // onChange: (e) => handelChange(e.target, setMobilenumber),
                                            required: "This is required",
                                            // pattern: {
                                            //     value: passFormet,
                                            //     message: "password must contain 'special characters' 'numbers' 'upper and lowercase letters'",
                                            // },
                                            // minLength: {
                                            //     value: 8,
                                            //     message: "minLength is 6 Number"
                                            // },
                                            // maxLength: {
                                            //     value: 20,
                                            //     message: "maxLength is 20 Number"
                                            // }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>{errors.pass?.message}</span>
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log in" />
                                    <ToastContainer
                                        autoClose={1000}

                                    />
                                </div>

                            </form>
                            <div className="social-login">
                                <span className="social-label">Or login with</span>
                                <ul className="socials">
                                    <li><i className='display-flex-center zmdi zmdi-twitter Twitter'><BsTwitter /> </i></li>
                                    <li><i className='display-flex-center zmdi zmdi-google Instagram'><BsGoogle /></i></li>
                                    <li><i className='display-flex-center zmdi zmdi-facebook facebook'><BsFacebook /></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
