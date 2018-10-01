<template>
  <div>

    <annouceBar colorTheme="dark"></annouceBar>
    <navBar colorTheme="dark"></navBar>

    <div class="portfolio-banner">
      <h1 style="margin-top: 90px; color: white; text-transform:uppercase; font-size: 72px; "><b>My Portfolio</b></h1>
      <h2 style="font-size: 40px; color: white; font-style: italic; font-family:'Cormorant Garamond';">I'm a NLP algorithm engineer!</h2>
      <h2 style="margin-top: 25px; line-height: 1.5em; font-style: normal; font-family:'Lato'; color: white; font-size: 25px; ">Here are all the projects that I've done. <br> Please enjoy!</h2>
    </div>

    <div class="portfolio-projects">
      <h2 style="font-size:42px; text-decoration: underline; color: black; font-style:normal; font-family:'Cormorant Garamond'; text-rendering: optimizeLegibility;"> Projects </h2>

      <div class="project-items" v-for="projects in project_infos" :key="projects.id">
        <imgCaption v-for="item in projects" :key="item.id" :projectId="item.pid" :imgSrc="'https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b520a652dea32996c6415/1512788496834/squarespace-photographer-website-project.jpg'" :imgWidth="280" :imgHeight="280" :captionGroup="item.obj.projectGroup" :captionTitle="item.obj.projectName" :animationType="1">
        </imgCaption>
      </div>

    </div>
  </div>

</template>

<script>

import imgCaption from '@/components/ImageCaption/imageCaption'
import annouceBar from '@/components/Main/annouceBar'
import navBar from '@/components/Main/navBar'

export default {
  name: 'portfolio',
  components: {
    imgCaption,
    annouceBar,
    navBar
  },
  methods: {
    getProjectInfoFromAsset () {
      var project_infos = require('@/../static/projects/project_infos.json')
      var project_batchs = Array()

      var count = 0
      var buffer = Array()
      for (var key in project_infos) {
        count += 1
        console.log(key + '\t' + project_infos[key] + "\t" + count + "\t" + Object.keys(project_infos).length)
        buffer.push({"pid": key, "obj": project_infos[key]})

        if (((count % 4) == 0) || (count == Object.keys(project_infos).length)) {
          project_batchs.push(buffer)
          buffer = []
        }
      }
      return project_batchs
    }
  },
  props: {
  },
  data () {
    return {
      'project_infos': this.getProjectInfoFromAsset()
    }
    
  }
}
</script>

<style>

.portfolio-banner {
  display: block;
  position: relative;
  top: 40px;
  width: 100%;
  height: 550px;
  padding: 80px 60px;
  background-color: rgba(0, 0, 0, 0.9); /*#eaeced;*/
  z-index: -1;
}

.portfolio-projects {
  display: block;
  position: relative;
  width: 100%;
  /*height: 400px;*/
  padding: 80px 40px;

  background-color: white; /*rgba(0, 0, 0, 0.9); /*#eaeced;*/
}

.project-items{
  /*margin-left: 10px;
  margin-left: 10px;*/
  display: flex;
  justify-content: space-between;
  /*margin-top: 25px;*/
  position: relative;
  /*z-index: -100;*/
}

</style>
