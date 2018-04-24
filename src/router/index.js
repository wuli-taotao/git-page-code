import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import comTest from '@/view/components-test'

import index from '@/view/index'
import technicalBlog from '@/view/technical-blog'
import blogList from '@/view/technical-blog/blog-list'
import blogPage from '@/view/technical-blog/blog-page'

import introduction from '@/view/introduction'

import space from '@/view/space'
import spaceIndex from '@/view/space/space-index'
import cutSmoke from '@/view/space/cutSmoke'
import movie from '@/view/space/movie'

import haveFun from '@/view/have-fun'
import funIndex from '@/view/have-fun/fun-index'
import flip from '@/view/have-fun/flip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/comTest',
      name: 'comTest',
      component: comTest
    },
    {
      path: '/technicalBlog',
      name: 'technicalBlog',
      component: technicalBlog,
      redirect: '/technicalBlog/blogList',
      children: [
        {
          path: 'blogList',
          name: 'blogList',
          component: blogList
        },
        {
          path: 'blogPage',
          name: 'blogPage',
          component: blogPage
        }
      ]
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/space',
      name: 'space',
      component: space,
      redirect: 'space/spaceIndex',
      children: [
        {
          path: 'spaceIndex',
          name: 'spaceIndex',
          component: spaceIndex
        },
        {
          path: 'cutSmoke',
          name: 'cutSmoke',
          component: cutSmoke
        },
        {
          path: 'movie',
          name: 'movie',
          component: movie
        }
      ]
    },
    {
      path: '/haveFun',
      name: 'haveFun',
      component: haveFun,
      redirect: '/haveFun/funIndex',
      children: [
        {
          path: 'funIndex',
          name: 'funIndex',
          component: funIndex
        },
        {
          path: 'flip',
          name: 'flip',
          component: flip
        }
      ]
    },

  ]
})
