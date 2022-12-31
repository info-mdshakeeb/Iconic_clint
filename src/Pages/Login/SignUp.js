import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import signUp from '../../assets/Lotti/signUp.json';
import SecondaryButton from '../../Components/share/Buttons/SecondaryButton';
import { AuthUser } from '../../Context/UserContext';
import AlartMessage from '../../Hooks/AlartMessage';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { successMessage, errorMessage } = AlartMessage()
    const { GoogleLogin, CreateUserEP } = useContext(AuthUser)
    const onSubmit = (data) => {
        const user = {
            name: data.firstName + data.lastName,
            email: data.email,
            password: data.Password
        }
        console.log(user);
        CreateUserEP(data.email, data.Password)
            .then(rs => {
                successMessage("successfully Create Accourt")
                navigate(from, { replace: true })
            }
            )
            .catch(err => errorMessage(err.message))
    }
    const heandelGoogleSignIn = () => {
        GoogleLogin()
            .then(rs => {
                successMessage("successfully login")
                navigate(from, { replace: true })
            }
            )
            .catch(err => {
                errorMessage(err.message)
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
                                <div className=""><SecondaryButton>SignUp</SecondaryButton>
                                </div>
                            </div>

                        </form>
                        <div className="py-3 mt-4 w-1/2"
                            onClick={() => heandelGoogleSignIn()}>
                            <SecondaryButton>
                                SignUp With Google
                            </SecondaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;