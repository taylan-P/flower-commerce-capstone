import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function ProductDrop({onLogout}) {
  return (
    <>
      <img onClick={()=>onLogout()} src='https://cdn.ultimatepetnutrition.com/wp-content/uploads/2019/08/48089784_s.jpg' className='Profile' />
    </>
  )
}


