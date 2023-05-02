import React, { useContext, useState } from 'react';
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdFileUpload } from "react-icons/md";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { TextInput, Label, Textarea, FileInput, Button } from "flowbite-react";
import ButtonLoader from "../../../../Shared/ButtonLoader/ButtonLoader"
import { AuthProvider } from '../../../../../UserContext/UserContext';
const PostModal = () => {
  
    const [postImage, setPostImage] = useState({});
    //navigate user 
    const navigate = useNavigate();
    //get form data 
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
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
                const insertInformation = {
                    title: postData.title?.trim(),
                    postImage: postImage?.trim(),
                    description: postData.description?.trim(),
                    publishDate: date?.trim(),
                    publishTime: time?.trim(),
                    name: user.displayName?.trim(),
                    email: user.email?.trim(),
                    profile: user.photoURL?.trim(),
                }
                // if (!user.email) return toast.error("Your email is not found ");
                fetch(`https://scholar-net-subrota.vercel.app/posts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${localStorage.getItem("scholar-net")}`
                    },
                    body: JSON.stringify(insertInformation)
                })
                    .then(res => {
                        if (res.status === 403 || res.status === 401) {
                            toast.error("Forbidden access");
                            navigate("/login");
                        }
                        return res.json();
                    })
                    .then(data => {
                        if (data.acknowledged) {
                            toast.success("Great job you add a post successfully  😀 😀 ");
                            setLoading(false);
                            reset() ;
                            setPostImage({}) ;

                        }
                        if (data.categoryExisted) {
                            toast.info(data.categoryExisted);
                            setLoading(false);
                        }
                    })
                    .catch(error => { console.log("Error: ", error); setLoading(false) })
            })
    }
    return (

        <>
    
            {/* <!-- Main modal --> */}
            <div id="PostModal" tabIndex="-1" aria-hidden="true" className="fixed hidden top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                <span>   Create a new post </span>
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="PostModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">

                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control my-2">
                                    <Label className="label">
                                        <span className="label-text"> Title </span>
                                    </Label>
                                    <TextInput type="text" placeholder="Enter your post  title"
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
                                                        postImage.name ? <p> Your post picture name is  {postImage.name}</p> :
                                                            <p>Drag and drop your post picture here or click on this area to select an file </p>
                                                    }
                                                </div>
                                        }
                                    </div>
                                </div>
                                <div className="form-control mt-6 ">
                                    <Button className="btn btn-primary text-white w-full px-12" type='submit'>
                                        {loading ? <ButtonLoader></ButtonLoader> : "Create post"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PostModal;