import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main/main'
import Portfolio from '@/components/Portfolio/portfolio'
import Resume from '@/components/Resume/resume'
import project from '@/components/Portfolio/project'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/project/:project_id',
      name: 'project',
      component: project,
      props: true
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio,
    },
    {
      path: '/resume',
      name: 'resume',
      component: Resume,
    },
    {
      path: 'contacttag',
      name: 'contact',
      component: Main,
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
