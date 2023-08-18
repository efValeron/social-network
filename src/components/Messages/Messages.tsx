import React from 'react'
import {UserNav} from "./UserNav/UserNav";
import {UserDialog} from "./UserDialog/UserDialog";
import profileImage from "../../images/profileImage.jpg";

type Props = {}

export const Messages = (props: Props) => {
  const users = [
    {
      avatar: profileImage,
      user: "Saleh Amen",
      newMessageCount: 2,
      lastMessage: {
        message: "Lorem ipsum dolor sit amet, consectetur.",
        time: "11:26"
      }
    },
    {
      avatar: profileImage,
      user: "Viktor Ivanov",
      newMessageCount: 0,
      lastMessage: {
        message: "Lorem.",
        time: "00:03"
      }
    },
    {
      avatar: profileImage,
      user: "Valeriy Safronov",
      newMessageCount: 1,
      lastMessage: {
        message: "Lorem ipsum dolordolordolordolordolordolordolordolordolordolordolordolordolor ",
        time: "15:23"
      }
    }
  ]
  const user = {
    avatar: profileImage,
    user: "Saleh Amen",
    status: true
  }

  const userNavList = users.map(u => {
    return <UserNav userInfo={u}/>
  })

  return (
    <div className="grid grid-cols-12 gap-4 p-4 box-border rounded-t-3xl bg-slate-100">
      <div className='col-span-3 bg-slate-50 rounded-t-2xl p-4 box-border flex flex-col gap-2'>
        {userNavList}
      </div>
      <div className='col-span-9 bg-slate-50 rounded-t-2xl overflow-hidden'>
          <UserDialog user={user}/>
      </div>
    </div>
  )
}