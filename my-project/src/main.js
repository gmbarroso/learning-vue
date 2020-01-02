// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({ // uma nova instancia do Vue.js. E estou trabalhando com um objeto. Sempre teremos chave e valor, chave e valor
  el: '#app', // aqui estou falando com o Vue qual é o meu elemento principal
  router,
  components: { App },
  template: '<App/>'
})
