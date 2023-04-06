import React from 'react';
import { useForm } from 'react-hook-form';
import useTitle from '../../../Hooks/Hooks';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Login = () => {

    useTitle("Login")

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = React.useContext(AuthContext);
    const [loginError, setLoginError] = React.useState('');
    const [loggingIn, setLoggingIn] = React.useState(false);

    const [userEmail, setUserEmail] = React.useState(null);
    // const [token] = useToken(userEmail)


    // const location = useLocation();
    // const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    // if (token) {
    //     navigate(from);
    // }

    const handleLogin = (data) => {
        log_true();
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                if (user) {
                    setemail(user.email);
                    log_false();
                    // toast.success('Login Successful')
                }

            }).catch(error => {
                setLoginError(error.message);
                log_false();
            });
    }

    const setemail = (email) => {
        setUserEmail(email)
    }

    const log_true = () => setLoggingIn(true);
    const log_false = () => setLoggingIn(false);

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='bg-green-100 rounded-xl drop-shadow-md w-96 p-7'>
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input disabled={loggingIn ? true : false} className='btn btn-accent w-full' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p>New to Swap Hand ! <Link className='text-primary hover:underline' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                {/* <SocialLogin /> */}
            </div>
        </div>
    );
};

export default Login;