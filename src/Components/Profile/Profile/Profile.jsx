import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='m-20'>
            <Link className='p-4 bg-slate-900 text-slate-200' to='/profilePrivacy'>Privacy Settings</Link>
        </div>
    );
};

export default Profile;