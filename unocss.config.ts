import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserat: 'Montserrat',
      },
    }),
  ],
  theme: {
    colors: {
      app: {

      },
    },
  },
})
