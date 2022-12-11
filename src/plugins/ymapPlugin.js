import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = { 
apiKey: '4a0942b7-5c26-417e-a32d-287f9cabe73c',
lang: 'ru_RU',
coordorder: 'latlong',
enterprise: false,
version: '2.1' } // настройки плагина

Vue.use(YmapPlugin, settings);