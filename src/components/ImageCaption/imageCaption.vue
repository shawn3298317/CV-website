<template>
  <div class="ctnr" :style="styleSize">
    <div class="ctnr-caption" :style="styleSize">
      <div class="ctnr-caption-holder">
        <h2 style="color: white; font-size: 1.5em; font-style:italic; font-family:adobe-garamond-pro;">{{captionGroup}}</h2>
        <h1 style="color: white; font-size: 2em; text-transform:uppercase; font-size:"><b>{{captionTitle}}</b></h1>
        <button href="" class="white-button">WATCH PROJECT</button>
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
      }
    }
  },
  components: {
  },
  methods: {
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
    visibility: hidden;
    opacity: 0;
  }

  .ctnr:hover .ctnr-caption {
    visibility: visible;
    transition: .5s opacity linear, .3s transform linear;
    opacity: 1.0;
    transform: translateY(5px);
  }

  .ctnr-mask {
    position: absolute;
    top: 0;
    left: 0;
    /*width: 350px;
    height: 350px;*/
    z-index: 1;
    background-color: transparent;
  }

  .ctnr:hover .ctnr-mask {
    opacity: 0.65;
    transition: .5s opacity ease-in-out, .5s background-color ease-in-out;
    background-color: black;
  }

  .white-button {
    text-align: center;
    text-decoration: none;
    color: white;
    border-width: 2px;
    border-style: solid;
    border-color: white;
    background-color: transparent;
    /*font-family: proxima-nova;*/
    font-size: 0.8em !important;
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

  .white-button:hover {
    background-color: #fff;
    color: #000;
    transition: 0.1s background-color linear, 0.1s color linear;
    border-style: solid;
    border-color: white;
    text-decoration: none;
  }

  .white-button:focus {
    outline: none;
  }

</style>
