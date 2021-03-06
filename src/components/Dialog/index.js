import Vue from 'vue'
import _ from 'lodash'
import Dialog from './index.vue'

export default function({
  attrs,
  data,
  on,
  title,
  content,
  footer
}) {
  const Constructor = Vue.extend(Dialog)
  const vm = new Constructor({
    el: document.createElement('div')
  })

  // 设置标题
  vm.$props.title = title

  // 传入更多props
  if (attrs && _.isObject(attrs) && !_.isEmpty(attrs)) {
    for (const key in attrs) {
      vm.$props[key] = attrs[key]
    }
  }

  // 传入slot
  if (_.isFunction(content)) {
    vm.$slots.content = Vue.extend({
      data,
      render: content
    })
  }
  if (_.isFunction(footer)) {
    vm.$slots.footer = Vue.extend({
      render: footer
    })
  }

  // 绑定事件，目前dialog仅支持确认和取消操作，分别为 ok确认 close取消
  if (on && _.isObject(on) && !_.isEmpty(on)) {
    for (const name in on) {
      const fn = on[name]
      if (_.isFunction(fn)) {
        vm.$on(name, fn)
      }
    }
  }

  // 控制抽屉显示隐藏
  vm.$on('update:visible', (newVisible) => {
    vm.$props.visible = newVisible
  })

  Vue.nextTick(() => {
    vm.$props.visible = true
  })
  return vm
}

