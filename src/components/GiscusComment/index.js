import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComment() {
  const { colorMode } = useColorMode();

  return (
    <Giscus    
      repo="Zi-Yi-ZHANG/Docusaurus-Giscus"
      repoId="R_kgDOKCZNvA"
      category="Announcements"
      categoryId="DIC_kwDOKCZNvM4CYSY4"     // E.g. id of "General"
      mapping="title"                       // Important! To map comments to URL
      term="Welcome to @giscus/react component!"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="1"
      inputPosition="top"
      theme={colorMode}
      lang="zh-CN"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  );
}

