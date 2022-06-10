import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// font-awesome과 관련된 import를 정의
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas)

const app = createApp(App);
createApp(App).use(store).use(router).mount('#app')

// 위에 createApp을 통해 생성한 Vue Application 인스턴스의 component API 활용
app.component('font-awesome-icon', FontAwesomeIcon)