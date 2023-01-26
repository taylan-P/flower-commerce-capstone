import React from 'react'
import { XCircleIcon } from "@heroicons/react/24/outline";


export default function ProductDrop({ onLogout, user }) {
  return (
    <div className='Profile'>
    <img onClick={() => onLogout()} title={user.username} src='https://cdn.ultimatepetnutrition.com/wp-content/uploads/2019/08/48089784_s.jpg' />
      <div class="dropdown-content">
        <XCircleIcon onClick={() => onLogout()}/>
         <p>Log Out</p>
      </div>
    </div>
  )
}


