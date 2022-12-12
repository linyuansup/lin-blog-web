import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@mdi/font/css/materialdesignicons.css'
import Request from '@/utils/request'
import "@/assets/base.scss"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import BlogItem from '@/components/BlogItem.vue'
import CategoryItem from '@/components/CategoryItem.vue'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        iconfont: 'mdi'
    }
})

const app = createApp(App)
app.config.globalProperties.Request = Request
app.use(vuetify)
app.component(BlogItem)
app.component(CategoryItem)
app.use(router)
app.mount('#app')
