import React from 'react';

type UserType = {
  avatar: string
  user: string;
  status: boolean
};

type Props = {
  user: UserType
}

export const UserDialog = (props: Props) => {
  const {avatar, user, status} = props.user

  return (
    <div>
      <div className="p-4 border-b-2 border-slate-200 box-border flex flex-row gap-4">
        <img
          src={avatar}
          alt="img"
          className="object-cover rounded-full h-16 w-16"
        />
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold h-1/2">{user}</h1>
          <p className="text-sm font-normal opacity-60 truncate h-1/2">
            {status ? "Online" : "Offline"}
            <span className={`ml-1 ${status ? 'bg-green-500' : 'bg-red-500'} rounded-full w-2 h-2 inline-block`} />
          </p>
        </div>
      </div>
      <div className="p-4 h-20 border-slate-200 opacity-60">

      </div>
    </div>
  )
}