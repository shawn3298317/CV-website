<template>
  <div class="main">
    <div class="announcement-bar">
      <div class="announcement-bar-text">
        <p></p>
        <p>If you haven't already, check out my latest Vlog episode (EP09 - Get Out Of The Office).
          <a target="_blank" href="https://youtu.be/QmNHsJgs9kQ">Watch Video</a>
        </p>
      </div>
    </div>

    <div class="nav-bar" style="overflow: hidden;">
      <!-- <iframe id="player" frameborder="0" allowfullscreen="1" allow="autoplay; encrypted-media" title="YouTube video player" width="560" height="315" src="https://www.youtube.com/embed/CJny8XlzcDU?autohide=1&amp;autoplay=1&amp;controls=0&amp;enablejsapi=1&amp;iv_load_policy=3&amp;loop=0&amp;modestbranding=1&amp;playsinline=1&amp;rel=0&amp;showinfo=0&amp;wmode=opaque&amp;origin=https%3A%2F%2Fwww.devonstank.com&amp;widgetid=1" class="background-video ready" style="width: 1310.22px; height: 737px; left: -17.1111px; top: 0px;"></iframe> -->
      <img class="background-video2" src="../../../static/images/bg_video.jpeg" width="560" height="315" style="width: 1310.22px; height: 737px;">

      <div class="nav-bar-items">
        <div class="nav-bar-name-icon">
          <a href="/" class="name-icon">
            <img src="../../../static/images/name_icon.png" alt="shawn3298317.com">
          </a>
        </div>
        <div class="nav-bar-links">
          <nav>
            <div class="nav-bar-links-inner">
              <a class="" href="">Home</a>
              <a href="">Code Shop</a>
              <a href="">Portfolio</a>
              <a href="">About</a>
              <a href="">Resume</a>
              <a href="">Blog</a>
              <a href="">Contact</a>
            </div>
          </nav>
        </div>
      </div>

      <div class="nav-intro" style="margin-top: 164px">
        <h2 style="color: white; font-style:italic; font-family:adobe-garamond-pro;">I'm here to build best chatbots!!!</h2>
        <h1 style="color: white; text-transform:uppercase; font-size: 72px; "><b>Let's build something amazing together</b></h1>
        <button href="" class="white-button">WATCH VIDEO</button>
      </div>
    </div>

    <div class="project-bar">
      <div class="project-bar-contents">
        <h2 style="font-size:42px; color: black; font-style:normal; font-family:adobe-garamond-pro; text-rendering: optimizeLegibility;"> These are my projects!! </h2>
        <div class="project-items">
          <imgCaption :imgSrc="'https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b520a652dea32996c6415/1512788496834/squarespace-photographer-website-project.jpg'" :imgWidth="350" :imgHeight="350" :captionGroup="'Project Group'" :captionTitle="'Tensorflow'">
          </imgCaption>

          <imgCaption :imgSrc="'https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/584598f9d1758ec839a47e61/1512788537207/Squarespace+Personal+Brand+Website+Project?format=750w'" :imgWidth="350" :imgHeight="350" :captionGroup="'Project Group'" :captionTitle="'Tensorflow'">
          </imgCaption>

          <imgCaption :imgSrc="'https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b51a50d9297be55ef560b/1512788410501/Squarespace+Trucking+Website+Project?format=750w'" :imgWidth="350" :imgHeight="350" :captionGroup="'Project Group'" :captionTitle="'Tensorflow'">
          </imgCaption>

          <!-- <div class="project-items-img">
              <img width="600" height="600" src="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b520a652dea32996c6415/1512788496834/squarespace-photographer-website-project.jpg">
          </div>
          <div class="project-items-img">
            <img width="600" height="600" src="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/584598f9d1758ec839a47e61/1512788537207/Squarespace+Personal+Brand+Website+Project?format=750w">
          </div>
          <div class="project-items-img">
            <img width="600" height="600" src="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b51a50d9297be55ef560b/1512788410501/Squarespace+Trucking+Website+Project?format=750w">
          </div> -->
        </div>
        <div class="btn-container">
          <button href="" class="black-button">VIEW MORE PROJECTS</button>
        </div>
      </div>
    </div>

  </div>

</template>

<script>

import imgCaption from '@/components/ImageCaption/imageCaption'

export default {
  name: 'main',
  components: {
    imgCaption
  },
  methods: {
    changeNavView (e) {
      console.log(e + ' ')
      console.log(this.children)
    }
  }
}
</script>

<style>

#main {
  position: relative;
}
#announce-bar {
  /*background-color: transparent;*/
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 25px;
}

#annouce-bar-text p {
  font-size: 15px;
}

#nav-bar {
  display: block;
  /*position: relative;*/
  /*background: transparent;*/
  /*display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;*/
  /*flex: 1;
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  -webkit-flex: 1 1 auto;*/
}

.background-video2 {
  position: absolute;
  top: 40px;
  left: 0;
  /*width: 100%;*/
  opacity: 1;
  overflow: hidden;
}

.nav-bar-items {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /*flex: 1 1 auto;*/
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  /*-webkit-box-flex: 1;*/
  /*-ms-flex: 1 1 auto;*/
  /*-webkit-flex: 1 1 auto;*/
}

.nav-bar-name-icon {
  /*margin-left: auto;*/
  /*position: relative;*/
  /*top: 0;*/
  /*left: 0;*/
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 50px;
  text-align: left;
  width: auto;
}

.nav-bar-links {
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 50px;
  vertical-align: center;
}

.nav-bar-links-inner {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
}

.nav-bar-links-inner a {
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
  letter-spacing: .15em;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  margin-left: 2em;
  margin-right: 2em;
  text-decoration: none;
  transition: opacity 0.3s linear;
}

.nav-bar-links-inner:hover > a {
  opacity: 0.5;
  transition: opacity 0.3s linear;
}

.nav-bar-links .nav-bar-links-inner > a:hover{
  opacity: 1.0;
}

.nav-intro {
  position: absolute;
  top: 115px;
  left: 15%;
  width: 70%;
  text-align: center;
  z-index: 1;
}

.btn_container {
  display: block;
  position: relative;
  /*box-sizing: border-box;*/
  top: 50px;
  width: 83.33%;
  /*height: 0px;*/
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
  /*padding-top: 17px;*/
  /*padding-bottom: 17px;*/
}

.white-button {
  /*position: relative; */
  text-align: center;
  text-decoration: none;
  color: white;
  border-width: 2px;
  border-style: solid;
  border-color: white;
  background-color: transparent;
  /*font-family: proxima-nova;*/
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: .1em;
  transition: 0.1s background-color linear, 0.1s color linear;
  padding: 21px 34px;
  margin-top: 10px;
}

.white-button:hover {
  background-color: #fff;
  color: #000;
  transition: 0.1s background-color linear, 0.1s color linear;
  border-style: solid;
  border-color: white;
  text-decoration: none;
}

.black-button {
  /*position: relative; */
  text-align: center;
  text-decoration: none;
  color: black;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  background-color: transparent;
  /*font-family: proxima-nova;*/
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: .1em;
  transition: 0.1s background-color linear, 0.1s color linear;
  padding: 21px 34px;
  margin-top: 10px;
}

.black-button:hover {
  background-color: #000;
  color: #fff;
  transition: 0.1s background-color linear, 0.1s color linear;
  border-style: solid;
  border-color: black;
  text-decoration: none;
}

.btn-container {
  margin-top: 15px;
}

.project-bar {
  position: absolute;
  top: 780px;
  left: 0;
  width: 100%;
  background-color: #edeeef;
}

.project-bar-contents {
  display:  inline-block;
  /*box-sizing: border-box;*/
  padding: 60px 60px;
  /*text-align: center;*/
  width: 100%;
}

.project-items{
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  position: relative;
}

.project-items-img {
  /*width: auto;*/
  /*height: auto;*/
  position: relative;
  /*left: 0;*/
  /*top: 0;*/
  /*left: */
  width: auto;
  height: auto;
  z-index: 100;
  /*width: 100%;*/
  height: auto;
  background-color: black;
  opacity: 1;
}

.project-items-img:hover {
  position: relative;
  /*left: 0;*/
  /*top: 0;*/
  /*left: */
  /*width: auto;*/
  /*height: auto;*/
  z-index: 100;
  /*width: 100%;*/
  /*height: auto;*/
  background-color: black;
  opacity: 0.8;
}

.project-items-img img{
  float: left;
  text-align: center;
  max-width: 350px;
  max-height: 350px;
  z-index: -1;
  /*visibility: hidden;*/
  /*overflow: hidden;*/
}

</style>
