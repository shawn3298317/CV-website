<template>
    <div :class="'annouce-bar-' + colorTheme">
      <div class="annouce-bar-text">
        <p></p>
        <p>Hi, there! This is Wei-Hsiang, Lin's personal website! I can be reached at 
          <!-- <router-link tag="a" :to="{name: 'contact', param: {}}">here</router-link>. -->
          <a href="#contacttag">here</a>
        </p>
      </div>
    </div>

</template>

<script>

export default {
  name: 'annouce-bar',
  components: {
  },
  methods: {
  },
  props: {
    colorTheme: {
      type: String,
      default: 'dark'
    }
  }
}

</script>

<style>
.annouce-bar-light {
  background-color: #eaeced;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 0px;
}

.annouce-bar-dark {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 0px;
}

.annouce-bar-text p {
  font-size: 15px;
}
</style>
