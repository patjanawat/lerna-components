import Vue from 'vue'
import App from './App.vue'
// import JTable from '@jsilva-pt/j-table'
import JTableRow from '@jsilva-pt/j-table/JTable'

Vue.config.productionTip = false
// Vue.use(JTableRow)

new Vue({
  render: h => h(App),
}).$mount('#app')
