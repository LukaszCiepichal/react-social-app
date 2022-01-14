import React from 'react';
import Folowing from './Following';
import UserPost from './UserPost';

import {
    Heading
} from './MyProfileStyle';



function MyProfile() {


    let user = JSON.parse(localStorage.getItem('user'))

    return (
        <>

            <Heading>Hi, {user.username}!</Heading>

            <Folowing />

            <UserPost />

        </>
    )
}

export default MyProfile;