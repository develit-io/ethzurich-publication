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
        ubuntu: 'Ubuntu Mono',
      },
    }),
  ],
  theme: {
    colors: {
      app: {
        background: '#1e2636',
      },
    },
    container: {
      center: true,
    },
  },
})
