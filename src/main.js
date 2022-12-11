import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far} from '@fortawesome/free-regular-svg-icons'

const app = createApp(App);
library.add(fas, far)

app.use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')