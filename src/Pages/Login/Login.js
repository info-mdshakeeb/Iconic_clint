import Lottie from 'lottie-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import { useLoading } from '../../Context/UseLoading';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';
import signUp from '../../assets/Lotti/signUp.json';
import { END_LOGIN_MAIL, START_LOGIN_MAIL } from '../../state/ActionType/actionType';

const Login = () => {
    const { successMessage, errorMessage } = AlartMessage()
    const { loginEmail, GoogleLogin } = useFirebaseInfo()
    const { register, handleSubmit, formState: { errors } } = useForm();


    //uas reducer :
    const { state, dispatch } = useLoading();
    // console.log(state);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // const heandelGoogleSignIn = () => {
    //     dispatch({ type: START_LOGIN_GOOGLE })
    //     GoogleLogin()
    //         .then(result => {
    //             setTimeout(() => {
    //                 navigate(from, { replace: true })
    //             }, 200)
    //             successMessage('login successful')
    //             dispatch({ type: END_LOGIN_GOOGLE })

    //         }).catch(error => {
    //             errorMessage(error.message)
    //             dispatch({ type: END_LOGIN_GOOGLE })
    //         })
    // }
    const onSubmit = data => {
        dispatch({ type: START_LOGIN_MAIL })
        loginEmail(data.email, data.password)
            .then(re => {
                setTimeout(() => {
                    navigate(from, { replace: true })
                }, 200)
                successMessage("login Successfull")
                dispatch({ type: END_LOGIN_MAIL })
            })
            .catch(err => {
                errorMessage(err.message)
                dispatch({ type: END_LOGIN_MAIL })
            })
    }
    return (
        <div className="flex items-center">
            <div className="hidden  lg:flex lg:w-3/5 min-h-screen ">
                <div className="mx-auto m-auto">
                    <Lottie animationData={signUp} loop={true} />
                </div>
            </div>
            <div className="w-full mx-auto lg:w-2/5   bg-white  flex flex-col items-center justify-center h-screen">
                <div className=" shadow-md rounded-xl max-w-md flex flex-col">
                    <h1 className="text-3xl font-semibold text-center text-gray-700 pt-10">ICONIC</h1>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className=" ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className={`w-auto px-4 py-2 mt-2 border-2 text-gray-700 bg-white  rounded-lg ${errors.email ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("email", { required: 'Email must required' })}
                            />
                            {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm text-gray-800 ">Password</label>
                                <a href="/" className="text-xs text-gray-600  hover:underline">Forget Password?</a>
                            </div>
                            <input type="text" placeholder="password" className={`w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg ${errors.password ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                {...register("password", { required: 'password must required' })}
                            />
                            {errors.password && <span className="label-text text-red-400">{errors?.password.message}</span>}
                        </div>
                        <div className="mt-6">
                            <SecondaryButton>
                                {state?.LoginMail ? <PrimaryLoading
                                    color={"#FFFFFF"}
                                    height={'18'}
                                /> : "    Sign In"}
                            </SecondaryButton>
                        </div>
                    </form>
                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b  lg:w-1/5"></span>
                        {/* <p className="text-xs text-center text-gray-500 uppercase  ">
                            or login with Social Media
                        </p> */}
                        <p className=" text-xs font-light text-center text-gray-400"> Don't have an account? <Link to='/resister' className="font-medium text-gray-700  hover:underline">Create One</Link></p>

                        <span className="w-1/5 border-b  lg:w-1/5"></span>
                    </div>

                    <div className="flex items-center mt-6 -mx-2">
                        {/* <button
                            // onClick={() => heandelGoogleSignIn()}
                            type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none">
                            {state?.LoginGoogle ?
                                <PrimaryLoading
                                    color={"#FFFFFF"}
                                    height={'18'} /> :
                                <>
                                    <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                        </path>
                                    </svg>
                                    <span
                                        className="hidden mx-2 sm:inline">Sign in with Google</span>
                                </>
                            }
                        </button> */}

                        {/* <a href="/" className=" p-2 mx-2 text-sm font-medium text-gray-500 transition-colors duration-300 transform bg-gray-300 rounded-lg hover:bg-gray-200">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z">
                                </path>
                            </svg>
                        </a> */}
                    </div>


                </div>
            </div>
        </div>

    );
};

export default Login;