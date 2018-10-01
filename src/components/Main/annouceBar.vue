<template>
    <div :class="'annouce-bar-' + colorTheme">
      <div class="annouce-bar-text">
        <p></p>
        <p>If you haven't already, check out my latest Vlog episode (EP09 - Get Out Of The Office).
          <a target="_blank" href="https://youtu.be/QmNHsJgs9kQ">Watch Video</a>
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
