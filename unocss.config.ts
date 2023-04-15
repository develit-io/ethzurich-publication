import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  shortcuts: [

  ],
  exclude: ['display'],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        ubuntu: 'Ubuntu',
      },
    }),
    presetForms(),
  ],
  theme: {
    colors: {
      app: {
        primary: '#0072C6',
        background: '#1e2636',
      },
    },
    container: {
      center: true,
    },
  },
})
