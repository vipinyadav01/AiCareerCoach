import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-black py-24 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8 rounded-lg bg-transparent p-6 shadow-md">
                {children}
            </div>
        </div>
    );
}

export default AuthLayout