<template>
    <div class="nav-bar-items">
        <div class="nav-bar-name-icon">
          <a href="/" class="name-icon" v-if="colorTheme == 'dark'">
            <img src="../../../static/images/name_icon.png" alt="shawn3298317.com">
          </a>
          <a href="/" class="name-icon" v-else>
            <img src="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/597ba17ed7bdce94eb29e455/1538084688919/?format=1500w" alt="shawn3298317.com">
          </a>
        </div>
        <div class="nav-bar-links">
          <nav>
            <div :class="'nav-bar-links-inner-' + colorTheme">
              <a class="" href="">Home</a>
              <a href="">Resume/CV</a>
              <a href="">About</a>
              <a href="">Portfolio</a>
              <a href="">Contact</a>
            </div>
          </nav>
        </div>
      </div>
</template>

<script>

export default {
  name: 'nav-bar',
  components: {
  },
  props: {
    colorTheme: {
      type: String,
      default: 'dark'
    }
  },
  methods: {
  }
}
</script>
<style>
#nav-bar {
  display: block;
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

.nav-bar-links-inner-dark {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
}

.nav-bar-links-inner-dark a {
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

.nav-bar-links-inner-dark:hover > a {
  opacity: 0.5;
  transition: opacity 0.3s linear;
}

.nav-bar-links .nav-bar-links-inner-dark > a:hover{
  opacity: 1.0;
}

.nav-bar-links-inner-light {
  display: flex;
  flex: 1 1 auto;
  align-items: center;
}

.nav-bar-links-inner-light a {
  color: black;
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

.nav-bar-links-inner-light:hover > a {
  opacity: 0.5;
  transition: opacity 0.3s linear;
}

.nav-bar-links .nav-bar-links-inner-light > a:hover{
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
</style>
