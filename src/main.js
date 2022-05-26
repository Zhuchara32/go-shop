import { createApp } from 'vue'
import App from './App.vue'
import store from './vuex/store'
import router from './router'

// createApp(App).mount('#app')

const app = createApp(App).use(router)

app.use(store)

app.mount('#app')