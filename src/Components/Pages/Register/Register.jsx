import React, { useContext, useState } from 'react';
import Helmet from "react-helmet";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from 'react-router-dom';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { AuthProvider } from '../../../UserContext/UserContext';
import { toast } from "react-toastify";
import authToken from '../../../hooks/authToken';
import ButtonLoader from '../../Shared/ButtonLoader/ButtonLoader';
import { Button, Label, Select, TextInput } from 'flowbite-react';
import { format } from 'date-fns';
const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);
  //navigate
  const navigate = useNavigate();
  //get user data from user context
  const { createUser, updateUserProfile, googelSignIn, githubSignIn } = useContext(AuthProvider);
  //image bb key 
  const image_bb_key = process.env.REACT_APP_imageBbKey;
  //get form data 
  const formData = new FormData();
  formData.append("image", profile);
  const date = format(new Date(), "PP");
  //save user information in the mongo atlas 
  const createMongoDBUser = (name, email, profileImage, role , date) => {
    setLoading(true);
    const userData = {
      name: name,
      email: email,
      profile: profileImage,
      role: role,
      date:date
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
        if (data.insertedId) {
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
  //submit form data 
  const onSubmit = userFormData => {
    //create new user email and password based 
    setLoading(true);
    fetch(`https://api.imgbb.com/1/upload?key=${image_bb_key}`, {
      method: "POST",
      body: formData,
    },)
      .then(res => res.json())
      .then(data => {
        const profileImage = data.data.url;
        createUser(userFormData.email, userFormData.password)
          .then((result) => {
            const email = result.user.email;
            authToken(email);
            updateUserProfile(userFormData.name, profileImage)
              .then(() => {
                navigate("/");
                createMongoDBUser(userFormData.name, userFormData.email, profileImage,
                  userFormData.role);

              }).catch(error => {
                toast.error(error.message, { position: "top-center" });
                setLoading(false);
              })
          })
          .catch(error => {
            toast.error(error.message, { position: "top-center" });
            setLoading(false);
          }
          )
      })
      .catch((error) => {
        console.log(error)
        setLoading(false);
      });

  }

  //create user by google sign in 
  const handleGoogleSignIn = () => {
    setLoading(true);
    googelSignIn()
      .then(result => {
        navigate("/");
        toast.success("Congratulation you are login successfully by Google 😀 ");
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const profileImage = result?.user?.photoURL;
        const role = "Buyer";
        authToken(email);
        createMongoDBUser(name, email, profileImage, role, date);
      })
  }


  //create user by google sign in 
  const handleGithubSignIn = () => {
    setLoading(true);
    navigate("/");

    toast.success("Congratulation you are login successfully by Github 😀 ");
    githubSignIn()
      .then(result => {
        const name = result?.user?.displayName;
        const email = result?.user?.email;
        const profileImage = result?.user?.photoURL;
        const role = "Buyer";
        authToken(email);
        createMongoDBUser(name, email, profileImage, role ,date);
      })
  }

  //on drop image callback 
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    setProfile(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <>
      <Helmet>
        <title>Register page </title>
      </Helmet>

      <div className="hero min-h-96 my-8 shadow-xl ">
        <div className="flex flex-col lg:flex-row">
          <div className=''>
            <img src="https://i.ibb.co/CBgPBfW/regiter.gif"
              alt="register" className='w-full bg-base-100'
              style={{ height: "840px" }} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full text-info p-4">
              <div className='flex justify-end'>
                <img src="https://i.ibb.co/h13pH8B/registerimage.gif" alt="register" className='w-72 h-20 flex justify-end mt-0 md:-mt-3' />
              </div>
              <div className="form-control mb-2">
                <Label className="label">
                  <span className="label-text"> Name </span>
                </Label>
                <TextInput type="text" placeholder="Please enter your  full name"
                  {...register("name", {
                    required: true,
                  })}
                  className="input input-bordered" />
                {errors.name && <p className='bg-error p-3 rounded-md text-dark
my-3'> Please enter your full name  before submit this form  </p>}
              </div>
              <div className="form-control  mb-2">
                <Label className="label">
                  <span className="label-text">Email</span>
                </Label>
                <TextInput type="text" placeholder="Please enter your  email" {...register("email", {
                  required: true,
                })} className="input input-bordered" />
                {errors.email && <p className='bg-error p-3 rounded-md text-dark
my-3'> Please enter your email address before submit this form  </p>}
              </div>
              <div className="form-control  mb-2">
                <Label className="label">
                  <span className="label-text">Password</span>
                </Label>
                <TextInput type="password" placeholder="Please enter your password"
                  {...register("password", {
                    required: true, pattern: /[$%^*@&!()+=~]/, minLength: 10, maxLength: 20
                  })}
                  className="input input-bordered" />

                {errors.password && <p className='bg-error p-3 rounded-md text-dark
my-4'> Please enter password between 10 to 20 character with one special
                  character (like : @$%)  </p>}

              </div>
              <div className="form-control  mb-2">
                <Label className="label">
                  <span className="label-text">Profile </span>
                </Label>
                <div {...getRootProps()} className="hover:cursor-pointer">
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <div className='border-2 border-dotted py-6 px-2 text-info rounded-md border-lime-600  text-center '>
                        <ButtonLoader className="flex justify-center"> </ButtonLoader>
                        <p> Your profile pictures is uploading ....  </p>
                      </div>

                      :

                      <div className='border-2 border-dashed py-6 px-2 rounded-md border-lime-600 '>
                        <MdFileUpload className='text-center text-3xl font-bold text-info
                            mx-auto '></MdFileUpload>
                        {
                          profile.name ? <p> Your profile picture name is  {profile.name}</p> :
                            <p>Drag and drop your profile picture here or click on this area to select an file </p>
                        }
                      </div>
                  }
                </div>
              </div>

              <div className="form-control  mb-2">
                <Label className="label">
                  <span className="label-text"> Role </span>
                </Label>
                <Select className="select select-bordered"
                  {...register("role", {
                    required: true,
                  })}>
                  <option disabled selected value="Buyer">Please select your role ?</option>
                  <option value="Buyer">Buyer</option>
                  <option value="Seller">Seller </option>
                </Select>
                {errors.role && <p className='bg-error p-3 rounded-md text-dark
my-3'> Please enter your role before submit this form  </p>}
              </div>

              <NavLink to="/login" >
                <Label className="flex my-3 hover:cursor-pointer">
                  <span> Already have an account  please ? </span>
                  <span className='mx-2'>  Login  </span>
                </Label>
              </NavLink>

              <div className="form-control  mt-6 ">
                <Button className="btn btn-primary w-full text-primary" type='submit'>
                  {
                    loading ? <div className='text-sm'>
                      <ButtonLoader className="mx-auto"></ButtonLoader>
                    </div> : "Register"
                  }
                </Button>
              </div>
              <div className="divider mt-10 mb-2 text-2xl font-bold">Or register with </div>
              <div className='bg-blue-400 p-2 my-3 text-white rounded-md flex justify-between hover:cursor-pointer' onClick={handleGoogleSignIn}>
                <>
                  <FcGoogle className='text-2xl'> </FcGoogle>
                  <div> Google </div>
                </>
              </div>
              <div className='bg-blue-400 p-2  text-white my-3 rounded-md flex justify-between hover:cursor-pointer'
                onClick={handleGithubSignIn}>
                <BsGithub className='text-2xl'> </BsGithub>
                <div> Github  </div>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Register;