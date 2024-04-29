import React from 'react'
import Personalinfo from './Personalinfo'
import Experince from './Experince'
import Contact from './Contact'
import userImg from './assets/image.png'

const UserCv = () => {
  return (
    <div>
     <img src={userImg}></img>
      <Personalinfo/>
      <Experince/>
      <Contact/>
    </div>
  )
}

export default UserCv