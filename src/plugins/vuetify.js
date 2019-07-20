import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
})

Vue.material = {
  locale: {
    dateFormat: 'yyyy-MM-dd',
    firstDayOfAWeek: 1,
  },
}
