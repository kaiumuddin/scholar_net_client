import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';
import { AuthProvider } from '../../../UserContext/UserContext';
import { Button, Label, TextInput } from 'flowbite-react';
const ResetPassword = () => {
const {resetPassword} = useContext(AuthProvider) ;
const handleFormSubmit = (event) => {

event.preventDefault() ;
const email =  event.target.email.value ;
resetPassword(email)
.then(() => {
toast.success("Check your inbox or spam to reset your password.")
})
  .catch((error) => {
    toast.error(error.message)
  });
}
    return (
        <>
        <Helmet><title>Reset your password </title></Helmet>
        <div className="hero min-h-screen bg-base-200 py-1
         px-2 flex  items-center justify-center">
  <div className="hero-content flex justify-around flex-col lg:flex-row-reverse">
    <div className="text-center m-8">
      <h1 className="text-3xl font-bold">Reset password  now!</h1>
      <p className="py-6">Enter your valid email than check your inbox to reset your password.</p>
    </div>
    <form autoComplete='off' onSubmit={handleFormSubmit} className="card flex-shrink-0 w-full max-w-sm bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <Label className="label">
            <span className="label-text">Email</span>
          </Label>
          <TextInput type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <Button className="btn btn-primary w-full"> Reset </Button>
        </div>
      </div>
    </form>
  </div>
</div>   
        </>
    );
};

export default ResetPassword;