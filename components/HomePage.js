import React from 'react';
import { signIn, signOut, useSession } from "next-auth/react";

function HomePage() {
    return (
        <div onClick={signIn} className='h-screen flex items-center justify-center'>
            <h1>Sign In</h1>
        </div>
    );
}

export default HomePage;