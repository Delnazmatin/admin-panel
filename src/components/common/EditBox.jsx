import './EditBox.css'
import React from 'react'
import { LiaEditSolid } from "react-icons/lia";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

export const EditBox = () => {
  return (
    <>
        <span className='editBox'>
            <Link to='/products/edit'><span><LiaEditSolid /></span></Link>
            <span><IoTrashOutline color='var(--Red)'/></span>
        </span>
    </>
  )
}
