<template>
    <div class="carousel-cntnr">
    <div @mouseover="hoverImage = true" @mouseleave="hoverImage = false" id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
      <div class="carousel-inner" >
        <div :class="'carousel-item '+isFirstImage(index)" v-for="(item, index) in images">
            <img class="d-block w-100 carousel-image" height="350" :src="'@/../static/images/wix/'+item.src" alt="First slide">
            <div class="mcarousel-caption" v-show="hoverImage">
                <h5 style="position: absolute; top:10px; left:480px; color: white; text-align: right; font-size: 15px;">{{index}}/{{images.length - 1}}</h5>
                <p style="margin-top:15px; margin-left:25px; color:white; text-align:left; font-size:20px;">{{item.caption}}</p>
            </div>
        </div>
      </div>

      <a class="cursor-left carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" v-show="hoverImage">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="cursor-right carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" v-show="hoverImage">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    </div>
</template>
<script>
export default {
  name: 'img-carousel',
  components: {
  },
  props: {
    images: {
      type: Array,
      default: [
        {
            "src": "https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/584598f9d1758ec839a47e61/1512788537207/Squarespace+Personal+Brand+Website+Project?format=750w",
            "caption": "Discription for image_0"
        },
        {
            "src": "https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/5a2b520a652dea32996c6415/1512788496834/squarespace-photographer-website-project.jpg",
            "caption": "Discription for image_1"
        }
      ]
    }
  },
  data () {
    return {
        'processedImages': this.doProcessImages(),
        'hoverImage': false
    }
  },
  methods: {
    isFirstImage (idx) {
        if (idx == 0) {
            return 'active'
        }
        return ''
    },
    doProcessImages () {

    }
  }
}
</script>
<style>

.carousel-cntnr {
    position: relative;
    width: 525px;
    height: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    /*padding: 60px;*/
}

.carousel-image {
    position: relative;
    margin: auto;
    background-color: rgba(0, 0, 0);
    min-height: 100% !important;
    min-width: 100% !important;
    object-fit: cover;
    /* For the following settings we set 100%, but it can be higher if needed 
    See the answer's update */
    /*left: -100%;
    right: -100%;
    top: -100%;
    bottom: -100%;*/
}

.mcarousel-caption {
    position: absolute;
    width: 100%;
    top: 280px;
    height: 70px;
    background-color: rgba(0, 0, 0, 0.5);
}

.cursor-left {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 280px;
    width: 30px;
    background-color: rgba(0, 0, 0, 0.5);
}

.cursor-right {
    position: absolute;
    top: 0px;
    right: 30px;
    height: 280px;
    width: 30px;
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
