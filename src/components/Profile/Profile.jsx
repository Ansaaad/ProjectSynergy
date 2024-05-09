import React from 'react';

function Profile() {
    // Sample user data
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        role: 'Teacher', // Or 'Coordinator', etc.
        // Add more user data as needed
    };

    return (
        <div>
            <h1>User Profile</h1>
            <div>
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Role: {user.role}</p>
                {/* Add more profile details as needed */}
            </div>
        </div>
    );
}

export default Profile;
