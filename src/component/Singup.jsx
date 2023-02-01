import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import singphoto from './images/signup-image.jpg';
import { useForm } from 'react-hook-form';
import { VscAccount, VscMail, VscLock } from "react-icons/vsc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
const Singup = () => {

    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: "",
            email: "",
            pass: "",
        }
    });

    const pass = useRef()
    pass.current = watch("pass", "");



    const emailFormet = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const passFormet = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const nameFormet = /^[a-zA-Z]+$/;

    const navigate = useNavigate();

    const onSubmit = (data) => {

        if (
            data.name !== '' &&
            data.pass !== '' &&
            data.email !== '' &&
            data.repass !== ''

        ) {
            const user_data = localStorage.getItem('userdata') ? JSON.parse(localStorage.getItem('userdata')) : []
            if (user_data.some((e) => {
                toast("duplicate", e);
                return e.email === data.email
            })) {
                toast("Account Allread created");
                reset();
            }
            else {
                user_data.push({
                    'id': uuidv4(),
                    'name': data.name,
                    'email': data.email,
                    'pass': data.pass,
                    'cart': data.cart
                })
                // console.log(user_data)
                for (const user of user_data) {
                    console.log(Object.values(user))
                }
                localStorage.setItem('userdata', JSON.stringify(user_data));

                navigate('/login');
                reset();
                toast("Account created");
            }
        }

    }

    return (

        <div className="main">

            <section className="signup">
                <div className="my-container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" id="register-form" onSubmit={handleSubmit(onSubmit)} >
                                <div className="form-group">
                                    <label htmlFor="name"><VscAccount /></label>
                                    <input id="name" placeholder="Your Name"
                                        {...register("name", {
                                            // onChange: (e) => setFirstname(e.target.value),
                                            // onChange: (e) => handelChange(e.target, setFirstname),

                                            required: "This is required",
                                            maxLength: {
                                                value: 80,
                                                message: "maxLength is 80 characters"
                                            },
                                            pattern: {
                                                value: nameFormet,
                                                message: "Please enter only text"
                                            },

                                        })}
                                    />
                                    <span style={{ color: "red" }}> {errors.name?.message}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email"><VscMail /></label>
                                    <input name="email" id="email" placeholder="Your Email"
                                        {...register("email", {
                                            // onChange: (e) => handelChange(e.target, setEmail),
                                            required: "This is required",
                                            pattern: {
                                                value: emailFormet,
                                                message: "Please enter Valid Email",
                                            }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>{errors.email?.message}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pass"><VscLock /></label>
                                    <input type="password" id="pass" placeholder="Password"
                                        {...register("pass", {
                                            // onChange: (e) => handelChange(e.target, setMobilenumber),
                                            required: "This is required",
                                            // pattern: {
                                            //     value: passFormet,
                                            //     message: "password must contain 'special characters' 'numbers' 'upper and lowercase letters'",
                                            // },
                                            minLength: {
                                                value: 8,
                                                message: "minLength is 8 Number"
                                            },
                                            maxLength: {
                                                value: 20,
                                                message: "maxLength is 20 Number"
                                            }
                                        })}
                                    />
                                    <span style={{ color: "red" }}>{errors.pass?.message}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="re-pass"><VscLock /></label>
                                    <input type="password" name="repass" id="re_pass" placeholder="Repeat your password"
                                        {...register("repass", {
                                            required: "This is required",
                                            validate: value =>
                                                value === pass.current || "The passwords do not match"
                                        })}
                                    />
                                    <span style={{ color: "red" }}>{errors.repass?.message}</span>
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <img src={singphoto} alt="sing up" />
                            <p className="signup-image-link"><Link to="/login">I am already member</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Singup
