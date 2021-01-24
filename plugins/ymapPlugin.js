import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'
const settings = {
    apiKey: '9c55a1c8-5d06-4b34-b3e8-17e1fa80f0ad',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1'
  }  
Vue.use(YmapPlugin, settings);
