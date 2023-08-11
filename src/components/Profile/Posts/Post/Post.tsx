import React from 'react';

interface Props {
  text: string
}

const Post = (props: Props) => {
  return (
    <div className="flex flex-row gap-2">
      <div className="w-8 h-8 bg-fuchsia-500"></div>
      <p>{props.text}</p>
    </div>
  );
};

export default Post;
