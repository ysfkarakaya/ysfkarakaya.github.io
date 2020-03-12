<template>
  <div v-if="$page.frontmatter.youtube" style="
  position: relative; 
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  width: 100%; height: auto;">
    <iframe style=" position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;}"
    width="100%"
    height="400"
    :src="'https://www.youtube.com/embed/' + $page.frontmatter.youtube"
    frameborder="0"
    allow="autoplay; encrypted-media"
    allowfullscreen
    >
    </iframe>
  </div>

</template>
