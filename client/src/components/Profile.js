import React from 'react';

function Profile({ imageUrl }) {
  return (
    <>
    <div className='Profile'>
      <img src={imageUrl} alt="User Profile" />
    </div>
    </>
  );
}

export default Profile;
