import Checkbox from './src/Checkbox.vue'

export function install(Vue) {
  if (install.installed) return

  install.installed = true

  Vue.component('vue-chk', component)
}

let GlobalVue = null

if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}

if (GlobalVue) {
  GlobalVue.use({
    install
  })
}

export default Checkbox
