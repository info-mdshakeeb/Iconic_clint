import Lottie from 'lottie-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import signUp from '../../assets/Lotti/signUp.json';
import PrimaryLoading from '../../Components/LoadingSpin/PrimaryLoading';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import { useLoading } from '../../Context/UseLoading';
import { useFirebaseInfo } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';
import { SandData } from '../../Hooks/SandData';
import { END_SIGNUP_GOOGLE, END_SIGNUP_MAIL, START_SIGNUP_GOOGLE, START_SIGNUP_MAIL } from '../../state/ActionType/actionType';

const SignUp = () => {
    const { GoogleLogin, CreateUserEP, updateProfilePic } = useFirebaseInfo()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { successMessage, errorMessage } = AlartMessage()
    const { state, dispatch } = useLoading();
    // console.log(state);
    const url = `http://localhost:3210/api/v2/users`

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const saveToDatabase = (user) => {
        SandData(url, 'POST', user)
    }
    const onSubmit = (data) => {
        dispatch({ type: START_SIGNUP_MAIL })
        const name = data.firstName + data.lastName;
        const email = data.email;
        const password = data.Password;
        const user = {
            name, email, password
        }
        CreateUserEP(data.email, data.Password)
            .then(rs =>
                updateProfilePic(data.firstName)
                    .then(res => {
                        saveToDatabase(user)
                        successMessage("successfully login")
                        setTimeout(() => {
                            navigate(from, { replace: true })
                        }, 200)
                        dispatch({ type: END_SIGNUP_MAIL })

                    }).catch(err => {
                        errorMessage(err.message)
                        dispatch({ type: END_SIGNUP_MAIL })
                    })
            ).catch(err => {
                errorMessage(err.message)
                dispatch({ type: END_SIGNUP_MAIL })
            })
    }
    const heandelGoogleSignIn = () => {
        dispatch({ type: START_SIGNUP_GOOGLE })
        GoogleLogin()
            .then(rs => {
                const user = {
                    email: rs?.user?.email,
                    name: rs?.user?.displayName,
                    photoUrl: rs?.user?.photoURL
                }
                saveToDatabase(user)
                successMessage("successfully login")
                setTimeout(() => {
                    navigate(from, { replace: true })
                }, 200)
                dispatch({ type: END_SIGNUP_GOOGLE })

            }).catch(err => {
                errorMessage(err.message)
                dispatch({ type: END_SIGNUP_GOOGLE })
            })
    }
    return (
        <section className="">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:flex lg:w-2/5">
                    <Lottie animationData={signUp} loop={true} />
                </div>
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full ">
                        <h1 className="text-2xl font-semibold tracking-wider capitalize ">
                            Get your free account now.
                        </h1>
                        <p className="mt-4 text-gray-500 ">
                            Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 ">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" placeholder="md" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.firstName ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                    {...register("firstName", { required: 'First Name must required' })}
                                />
                                {errors.firstName && <span className="label-text text-red-400">{errors?.firstName.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="shakeeb" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.lastName ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                    {...register("lastName", { required: 'Last Name must required' })}
                                />
                                {errors.lastName && <span className="label-text text-red-400">{errors?.lastName.message}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="shakeeb@example.com" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.email ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                    {...register("email", { required: 'Email must required' })}
                                />
                                {errors.email && <span className="label-text text-red-400">{errors?.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="XXX-XXX-XX-XXX" className={`block w-full px-5 py-3 mt-2 text-gray-700 bg-white border rounded-lg ${errors.Password ? ' border-red-700 focus:ring-red-300' : 'focus:border-blue-400 focus:ring-blue-300'} focus:outline-none focus:ring focus:ring-opacity-40`}
                                    {...register("Password", { required: 'Password must required', minLength: 6 })}
                                />
                                {errors.Password && <span className="label-text text-red-400">{errors?.Password.message}</span>}
                            </div>
                            <div className=' py-3 mt-4'>
                                <div className="">
                                    <SecondaryButton>
                                        {state?.SignUpMail ? <PrimaryLoading
                                            color={"#FFFFFF"}
                                            height={'20'}
                                        /> : "  SignUp"}
                                    </SecondaryButton>
                                </div>
                            </div>
                        </form>
                        <div className="py-3 mt-4 w-1/2"
                            onClick={() => heandelGoogleSignIn()}>
                            <SecondaryButton>
                                {state?.SignUpGoogle ? <PrimaryLoading
                                    color={"#FFFFFF"}
                                    height={'20'}
                                /> : "  SignUp With Google"}
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;