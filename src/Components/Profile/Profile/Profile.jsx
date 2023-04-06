import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div className='m-20'>
            <Link className='p-4 text-blue-600' to='/profilePrivacy'>Privacy Settings</Link>
        </div>
    );
};

export default Profile;