import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
const myCustomLightTheme = {
    dark: false,
    colors: {
      background: '#3B4F5E',
      surface: '#FFFFFF',
      primary: '#3B4F5E',
      'primary-darken-1': '#3700B3',
      secondary: '#03DAC6',
      'secondary-darken-1': '#018786',
      error: '#B00020',
      info: '#2196F3',
      success: '#4CAF50',
      warning: '#FB8C00',
    },
  }
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
          myCustomLightTheme,
        },
      },
  })
  app.vueApp.use(vuetify)
})