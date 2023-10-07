import React from 'react';
import DocItem from '@theme-original/DocItem';
import GiscusComment from '@site/src/components/GiscusComment';
  
export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <GiscusComment />
    </>
  );
}
