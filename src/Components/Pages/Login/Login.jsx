import React, { useContext, useState } from 'react';
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthProvider } from '../../../UserContext/UserContext';
import { toast } from "react-toastify";
import authToken from '../../../hooks/authToken';
import ButtonLoader from '../../Shared/ButtonLoader/ButtonLoader';
import { Button, Label, TextInput } from 'flowbite-react';
import { format } from 'date-fns';
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  //navigate
  const navigate = useNavigate();
  //get user data from user context
  const { loginUser, googelSignIn, githubSignIn } = useContext(AuthProvider);

  //save user information in the mongo atlas 
  const createMongoDBUser = (name, email, profileImage, role , date) => {
    setLoading(true);
    const userData = {
      name: name,
      email: email,
      profile: profileImage,
      role: role,
      date:date,
    }
    fetch("https://scholar-net-subrota.vercel.app/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.existed) {
          toast.info(data.existed);
          setLoading(false);
          return;
        }
        if (data.acknowledged) {
          setLoading(false);
          toast.success("Congratulation your account was created successfully 😀 ");
          navigate("/");
        }
      }).catch(error => {
        setLoading(false);
        console.log(" Error: ", error)
      })
  }
  //
  const date = format(new Date(), "PP");

  //submit form data 
  const onSubmit = userFormData => {
    //create new user email and password based 
    setLoading(true);
    loginUser(userFormData.email, userFormData.password)
      .then((result) => {
        const email = result.user.email;
        authToken(email);
        toast.success("Congratulation your are login successfully 😀 ");
        navigate("/");
      }).catch(error => {
        toast.error(error.message, { position: "top-center" });
        setLoading(false);
      })

  }

  //create user by google sign in 
  const handleGoogleSignIn = () => {
    setLoading(true);
    googelSignIn()
      .then(result => {
        toast.success("Congratulation your login successfully by Google 😀 ");
        navigate("/");
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const profileImage = result?.user?.photoURL;
        const role = "Buyer";
        authToken(email);
        createMongoDBUser(name, email, profileImage, role , date);
      })
  }


  //create user by google sign in 
  const handleGithubSignIn = () => {
    setLoading(true);
    toast.success("Congratulation your login successfully by Github 😀 ")
    navigate("/");
    githubSignIn()
      .then(result => {
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const profileImage = result?.user?.photoURL;
        const role = "Buyer";
        authToken(email);
        createMongoDBUser(name, email, profileImage, role , date);
      })
  }

  return (
    <>
      <Helmet>
        <title>Login page </title>
      </Helmet>

      <div className="hero min-h-96 my-8 shadow-xl">
        <div className="flex flex-col  justify-center lg:flex-row-reverse">
          <div>
            <img src="https://i.ibb.co/MhTyZS0/login.gif"
              alt="login" className='w-full bg-base-100  h-auto' />
          </div>
          <div className="card flex-shrink-0 w-full max-w-lg  rounded-md my-1 border-l-4 border-indigo-600    bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body  h-96 w-full font-bold text-info p-4">
              <h2 className='text-2xl text-center my-1 animate-pulse uppercase'>Login now !!</h2>
              <div className="form-control mb-2">
                <Label className="label">
                  <span className="label-text">Email</span>
                </Label>
                <TextInput type="text" placeholder="Please enter your  email" {...register("email", {
                  required: true,
                })} className="input input-bordered" />
                {errors.email && <p className='bg-error p-3 rounded-md text-white
my-3'> Please enter your email address before submit this form  </p>}
              </div>
              <div className="form-control mb-2">
                <Label className="label">
                  <span className="label-text">Password</span>
                </Label>
                <TextInput type="password" placeholder="Please enter your password"
                  {...register("password", {
                    required: true
                  })}
                  className="input input-bordered" />

                {errors.password && <p className='bg-error p-3 rounded-md text-white
my-4'> Please enter password before submit this form  </p>}

              </div>


              <NavLink to="/register" >
                <label className="flex my-3 hover:cursor-pointer">
                  <span> Have no account create new account  please ? </span>
                  <span className='mx-2'>  Register  </span>
                </label>
              </NavLink>

              <NavLink to="/reset-password" >
                <label className="flex my-3 hover:cursor-pointer">
                  <span> If you forgot password click on ? </span>
                  <span className='mx-2'>  forgot password  </span>
                </label>
              </NavLink>
              <div className="form-control mt-6">
                <Button className="btn btn-primary w-full text-primary" type='submit'>
                  {
                    loading ? <div className='text-sm'>
                      <ButtonLoader className="mx-auto"></ButtonLoader>
                    </div> : "Login"
                  }
                </Button>
              </div>
              <div className="divider my-2 text-2xl font-bold mt-12">Or sign in with </div>
              <div className='btn btn-primary rounded-md flex my-2 bg-blue-400 p-2 text-white justify-between hover:cursor-pointer' onClick={handleGoogleSignIn}>
                <>
                  <FcGoogle className='text-2xl'> </FcGoogle>
                  <span> Google </span>
                </>
              </div>
              <div className='btn btn-primary rounded-md flex my-3  bg-blue-400 p-2 text-white  justify-between hover:cursor-pointer'
                onClick={handleGithubSignIn}>
                <BsGithub className='text-2xl'> </BsGithub>
                <span> Github  </span>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Login;