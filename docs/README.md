---
home: false
---

<template>
  <div>
    <div class="titleContainer">
      <h1>
        기록보다
        <br/>생각을
      </h1>
      <div class="infoContainer">
        <div class="name">⠎⠕⠝⠀⠚⠊⠝⠎⠥</div>
            <div style="text-align: right">
                <p><a href="https://github.com/rhange" target="_blank">GitHub</a></p>
                <p><a href="https://rhange.tistory.com" target="_blank">Tistory</a></p>
                <p><a href="https://rhange.gatsbyjs.io/" target="_blank">Blog</a></p>
            </div>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
    font-family: 'SLEIGothicTTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2104@1.0/SLEIGothicTTF.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
.infoContainer {
  text-align: right;
}
h1 {
  font-family: "SLEIGothicTTF", cursive;
  font-weight: 400;
  border-bottom: 8px solid #0096FF;
  word-break: keep-all;
  font-size: 4rem;
  margin-bottom:3px;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}
@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }
  .name {
    font-size: 1.7rem;
  }
}
@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>
