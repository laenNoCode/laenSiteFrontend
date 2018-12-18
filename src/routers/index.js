import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import projects from '@/components/projects'
import fractals from '@/components/projects/fractals/index'
import julia from '@/components/projects/julia/index'
import project from '@/components/project'

import home from '@/components/home'
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: home
        },
        {
            path: "/projectList",
            name: "projects",
            component: projects
        },
        {
            path: "/project/:id",
            name: "project",
            component: project
        },
        {
            path: "/home",
            name: "home",
            component: home
        },
        {
            path: "/frame/fractals",
            name: "frame",
            component: fractals
        },{
            path: "/frame/julia",
            name: "frame",
            component: julia
        },
        {
            path: "*",
            name: "404",
            component: home
        }
    ]
})