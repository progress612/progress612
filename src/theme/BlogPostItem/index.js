import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import GiscusComment from '@site/src/components/GiscusComment';

export default function BlogPostItemWrapper(props) {

  const { isBlogPostPage } = useBlogPost()

  return (
    <>
      <BlogPostItem {...props} />
      {(isBlogPostPage) && (
        <GiscusComment />
      )}
    </>
  );
}
