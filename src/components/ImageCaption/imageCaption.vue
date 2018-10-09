<template>
  <div class="ctnr" :style="styleSize">
    <div :class="getClassByAnimationType()" :style="styleSize">
      <div class="ctnr-caption-holder">
        <h2 style="color: white; font-size: 1.5em; font-style:italic; font-family:adobe-garamond-pro;">{{captionGroup}}</h2>
        <!-- <h1 style="color: white; font-size: 2em; text-transform:uppercase; font-size:"><b>{{captionTitle}}</b></h1> -->
        <h1 style="color: white; font-size: 2em; font-size:"><b>{{captionTitle}}</b></h1>
        <!-- <button class="caption-button">WATCH PROJECT</button> -->
        <!-- <router-link tag="button" :to="'/project/' + projectId" class="caption-button">WATCH PROJECT</router-link> -->
        <router-link tag="button" :to="{name: 'project', params: {project_id: projectId}}" class="caption-button">WATCH PROJECT</router-link>
      </div>
    </div>
    <div class="ctnr-mask" :style="styleSize">
    </div>
    <img class="ctnr-img" :src="imgSrc" :style="styleSize">
  </div>
</template>

<script>
export default {
  name: 'img-caption',
  props: {
    imgSrc: {
      type: String,
      default: 'https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b51a50d9297be55ef560b/1512788410501/Squarespace+Trucking+Website+Project?format=750w'
    },
    imgWidth: {
      type: Number,
      default: 400
    },
    imgHeight: {
      type: Number,
      default: 400
    },
    captionGroup: {
      type: String,
      default: 'Project Group'
    },
    captionTitle: {
      type: String,
      default: 'Project Title'
    },
    projectId: {
      type: String
    },
    animationType: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      imgSelected: false,
      styleSize: {
        'max-width': String(this.imgWidth) + 'px',
        'max-height': String(this.imgHeight) + 'px',
        'width': String(this.imgWidth) + 'px',
        'height': String(this.imgHeight) + 'px'
      },
      test: this.testProps()
    }
  },
  components: {
  },
  methods: {
    testProps () {
      console.log(this.projectId)
      console.log(this.captionTitle)
      return true
    },
    getClassByAnimationType () {
      if (this.animationType == 0) {
        return 'ctnr-caption'
      }
      return 'ctnr-caption-1'
    }
  }
}
</script>

<style>

  .ctnr {
    position: relative;
    /*width: 350px;
    height: 350px;*/
    margin-top: 20px;
    margin-left: 20px;
  }

  .ctnr-caption {
    /*width: 350px;*/
    /*height: 350px;*/
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: transparent;
    visibility: visible;
    opacity: 1.0;
  }

  .ctnr:hover .ctnr-caption {
    visibility: visible;
    transition: .5s opacity linear, .3s transform linear;
    opacity: 1.0;
    transform: translateY(5px);
  }

  .ctnr-caption-1 {
    /*width: 350px;*/
    /*height: 350px;*/
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 4;
    background-color: transparent;
    visibility: visible;
    opacity: 0.5;
  }

  .ctnr:hover .ctnr-caption-1 {
    /*visibility: visible;*/
    transition: .5s opacity linear;
    opacity: 1.0;
    /*transform: translateY(5px);*/
  }

  .ctnr-mask {
    position: absolute;
    top: 0;
    left: 0;
    /*width: 350px;
    height: 350px;*/
    z-index: 1;
    opacity: 0.65;
    background-color: black;
  }

  .ctnr:hover .ctnr-mask {
    opacity: 0.25;
    transition: .5s opacity ease-in-out, .5s background-color ease-in-out;
    background-color: black;
  }

  .caption-button {
    text-align: center;
    text-decoration: none;
    color: white;
    border-width: 2px;
    border-style: solid;
    border-color: white;
    background-color: transparent;
    /*font-family: proxima-nova;*/
    font-size: 0.8em;
    font-weight: 400;
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: .1em;
    transition: 0.1s background-color linear, 0.1s color linear;
    /*padding: 21px 34px;*/
    padding: 2% 1%;
    width: 35%;
    margin-top: 10px;
  }

  .caption-button:hover {
    background-color: #fff;
    color: #000;
    transition: 0.1s background-color linear, 0.1s color linear;
    border-style: solid;
    border-color: white;
    text-decoration: none;
  }

  .caption-button:focus {
    outline: none;
  }

</style>
