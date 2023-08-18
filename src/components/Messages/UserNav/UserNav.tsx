import React from 'react'

type UserType = {
  avatar: string
  user: string;
  lastMessage: {
    message: string;
    time: string;
  };
  newMessageCount: number;
};

type PropsType = {
  userInfo: UserType
}

export const UserNav = (props: PropsType) => {
  const {avatar, user, lastMessage, newMessageCount} = props.userInfo;

  return (
    <div className="hover:bg-slate-100 rounded-lg flex items-center gap-4 p-4 cursor-pointer">
      <img
        src={avatar}
        alt="img"
        className="object-cover rounded-full h-12 w-12"
      />
      <div className="grid grid-cols-4 grid-rows-2 w-full">
          <div className="flex items-center justify-between col-span-4 row-span-1">
            <h1 className="text-lg font-semibold">{user}</h1>
            <span className="text-sm font-semibold opacity-60 text-gray-500">
                {lastMessage.time}
              </span>
          </div>
          <div className="flex items-center justify-between col-span-4 row-span-1">
            <p className="text-sm font-normal opacity-60 truncate w-2/3">
              {lastMessage.message}
            </p>
            {newMessageCount > 0 && (
              <span
                className="text-sm p-0.5 font-semibold text-gray-50 bg-red-400 w-5 h-5 rounded flex items-center justify-center">
                {newMessageCount}
              </span>
            )}
          </div>
      </div>
    </div>
  );
};