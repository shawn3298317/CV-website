<template>
  <div>

    <annouceBar colorTheme="light"></annouceBar>
    <navBar colorTheme="light"></navBar>

    <div class="project-ctnr">
      <div class="project-ctnr-pd">
        <!-- <div class="spacer-block"/> -->

        <h2 class="project-title"> {{project_info.projectName}}</h2>
        <h2 class="project-intro">{{project_info.intro}}</h2>
        <!-- <button href="" class="black-button">WATCH VIDEO</button> -->
        

        <iframe class="project-video" v-if="hasProjectVideo()" width="560" height="400" :src="project_info.info.video" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

        <imageCarousel v-if="hasProjectImages()" :images="project_info.info.pics"></imageCarousel>

        <ul style="position: relative; top: 50px;">
          <li class="project-summary-item" v-for="item in project_info.info.summary">{{item}}</li>
        </ul>

      </div>
    </div>

  </div>

</template>

<script>

import imgCaption from '@/components/ImageCaption/imageCaption'
import annouceBar from '@/components/Main/annouceBar'
import navBar from '@/components/Main/navBar'
import imageCarousel from '@/components/ImageCaption/imageCarousel'

export default {
  name: 'project',
  components: {
    imgCaption,
    annouceBar,
    navBar,
    imageCarousel
  },
  methods: {
    getProjectInfoFromAsset () {
      var project_infos_json = require('@/../static/projects/project_infos.json')

      var pi = project_infos_json['0']
      if (this.project_id in project_infos_json) {
        pi = project_infos_json[this.project_id]
      }
      
      console.log(this.project_id)
      console.log(pi['projectName'])
      console.log(pi['info'])
      console.log('video' in pi['info'])
      return pi
    },
    hasProjectVideo () {
      console.log("has Project video")
      console.log('video' in this.project_info.info)
      if ('video' in this.project_info.info) {
        return true
      }
      return false
    },
    hasProjectImages () {
      console.log("has Project Images")
      if (this.project_info.info.pics.length > 0) {
        return true
      }
      return false
    }
  },
  props: {
    project_id: {
      type: String,
      default: '0'
    }
  },
  data () {
    return {
      'project_info': this.getProjectInfoFromAsset()
    }
    
  }
}
</script>

<style>

.project-ctnr {
  display: block;
  position: absolute;
  top: 138px;
  width: 100%;
  height: 1500px;
  padding: 80px 60px;
  /*box-sizing: border-box;*/
  /*width: 83.33%;
  margin-right: auto;
  margin-left: auto;*/
}

.project-ctnr-pd {
  display: block;
  position: relative;
  box-sizing: border-box;
  width: 83.33%;
  margin-right: auto;
  margin-left: auto;
}

.project-title {
  font-size:55px;
  color: black;
  font-style:normal;
  /*font-family: adobe-garamond-pro;*/
  font-family: 'Cormorant Garamond';
  text-align: left;
  -webkit-font-smoothing: antialiased;
  font-weight: 400;
  letter-spacing: 0.015em;
}

.project-intro {
  font-size:24px;
  color: black;
  font-style:normal;
  font-family: 'Lato';
  /*font-family: 'proxima-nova';*/
  text-align: left;
  -webkit-font-smoothing: antialiased;
  /*font-weight: 400;*/
  letter-spacing: 0.015em;
  line-height: 1.4em;
}

.project-video {
  display: block;
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto; 
  padding-top: 20px;

}

.project-summary-item {
  display: list-item;
  font-size:20px;
  color: black;
  font-style:normal;
  font-family: 'Lato';
  /*font-family: 'proxima-nova';*/
  text-align: left;
  -webkit-font-smoothing: antialiased;
  /*font-weight: 400;*/
  /*letter-spacing: 0.015em;*/
  line-height: 2.0em;

}

.project-info {
  display: block;
  position: relative;
  width: 83%;
}

.spacer-block {
  display: block;
  position: relative;
  width: 100%;
  height: 10px;
  /*margin-top: 30px;*/
  margin-right: auto;
  margin-left: auto;
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

</style>
