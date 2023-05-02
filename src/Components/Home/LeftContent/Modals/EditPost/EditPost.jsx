import React, { useContext, useState } from 'react';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { TextInput, Label, Textarea, FileInput, Button } from "flowbite-react";
import ButtonLoader from "../../../../Shared/ButtonLoader/ButtonLoader"
import { AuthProvider } from '../../../../../UserContext/UserContext';
const EditPost = () => {
 const data = useLoaderData() ;
    const [postImage, setPostImage] = useState({});
    //navigate user 
    const navigate = useNavigate();
    //get form data 
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    //user info
    const { user } = useContext(AuthProvider);
    //
    const [loading, setLoading] = useState(false);
    //on drop image callback 
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        setPostImage(acceptedFiles[0])
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    //image bb key 
    const image_bb_key = process.env.REACT_APP_imageBbKey;
    //get form data 
    const formData = new FormData();
    formData.append("image", postImage);
    //submit form data 
    const onSubmit = postData => {
        //create new user email and password based 
        setLoading(true);
        if (!postImage) {
            toast.error("Please enter your post image !!");
            setLoading(false);
            return;
        }
        // if (!user.email) return toast.error("Your email address is not found !!");
        fetch(`https://api.imgbb.com/1/upload?key=${image_bb_key}`, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(postImageUrl => {
                const postImage = postImageUrl?.data?.url;
                const date = format(new Date(), "PP");
                const time = new Date().toLocaleTimeString();
                const updateInformation = {
                    title: postData.title?.trim(),
                    postImage: postImage?.trim(),
                    description: postData.description?.trim(),
                    publishDate: date?.trim(),
                    publishTime: time?.trim(),
                    name: user.displayName?.trim(),
                    email: user.email?.trim(),
                    profile: postImage ? postImage : data?.postImage,
                }
                // if (!user.email) return toast.error("Your email is not found ");
                fetch(`https://scholar-net-subrota.vercel.app/edit-posts/${data?._id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("scholar-net")}`
                    },
                    body: JSON.stringify(updateInformation)
                })
                    .then(res => {
                        if (res.status === 403) {
                            toast.error("Forbidden access");
                            navigate("/login");
                        }
                        return res.json();
                    })
                    .then(data => {
                        console.log(data);
                        if (data?.acknowledged === true) {
                            toast.success(" Great job data updated  successfully  😀 😀 ");
                            setLoading(false);
                            reset();
                            setPostImage({});
                            navigate("/");
                        }
                        if (data.categoryExisted) {
                            toast.info(data.categoryExisted);
                            setLoading(false);
                        }
                    })
                    .catch(error => { console.log("Error: ", error); setLoading(false) })
            })
            .catch(() => setLoading(false))
    }
    return (

        <>

            <div className="flex  lg:flex-row justify-around  mb-80 md:my-10 ">
                <div className="p-6 space-y-6 max-w-lg mx-auto  ">

                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl p-4">
                        <div className="form-control my-2">
                            <Label className="label">
                                <span className="label-text"> Title </span>
                            </Label>
                            <TextInput type="text" placeholder="Enter your post  title"
                            defaultValue={data?.title}
                                {...register("title", {
                                    required: true,
                                })} className="input input-bordered" />
                            {errors.title && <p className='bg-red-400 text-white rounded-lg text-lg font-bold my-2 p-3'>
                                Please enter your title of post
                            </p>}
                        </div>


                        <div className="form-control my-2">
                            <Label className="label my-2">
                                <span className="label-text">Description </span>
                            </Label><Textarea type="text" placeholder="Write   description about the post "
                                     defaultValue={data?.description}
                                {...register("description", { required: true, })}
                                className="textarea textarea-bordered py-4 " />
                            {errors.description && <p className='bg-red-400 text-white rounded-lg text-lg font-bold my-2 p-3'>
                                Please enter your post description
                            </p>}
                        </div>

                        <div className="form-control my-2">
                            <Label className="label my-2">
                                <span className="label-tex"> Post picture  </span>
                            </Label>
                            <div {...getRootProps()} className="text-center hover:cursor-pointer">
                                <FileInput {...getInputProps()} />
                                {
                                    isDragActive ?
                                        <div className='border-2 border-dotted py-6 px-2 rounded-md border-gray-600  text-center '>
                                            <ButtonLoader className="flex justify-center"> </ButtonLoader>
                                            <p> Your post pictures is uploading ....  </p>
                                        </div>

                                        :

                                        <div className='border-2 border-dashed py-6 px-2 rounded-md border-gray-600 '>
                                            <MdFileUpload className='text-center text-3xl font-bold text-gray-600
                     mx-auto '></MdFileUpload>
                                            {
                                                postImage?.name ? <p> Your post picture name is  {postImage.name}</p> :
                                                  <>
                                                    <p>Drag and drop your post picture here or click on this area to select an file </p>
                                                    <img src={data?.postImage} alt="postImage"  className='h-14 w-14 rounded-full mx-auto border-2 border-indigo-600 my-2' />
                                                  </>
                                            }
                                        </div>
                                }
                            </div>
                        </div>
                        <div className="form-control mt-6 ">
                            <Button className="btn btn-primary text-white w-full px-12" type='submit'>
                                {loading ? <ButtonLoader></ButtonLoader> : "Edit post"}
                            </Button>
                        </div>
                    </form>
                </div>

                <div>
                    <img src="https://i.ibb.co/qsZk03w/worldgif.gif" alt="world" className='hidden lg:block h-96  mt-14 roud rounded-l-xl' />
                </div>
            </div>

        </>
    );
};

export default EditPost;