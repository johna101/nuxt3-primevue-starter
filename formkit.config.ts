// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
import {createProPlugin, dropdown, rating, toggle, datepicker} from '@formkit/pro'
// import { generateClasses } from '@formkit/themes'
import '@formkit/themes/genesis'
import '@formkit/pro/genesis'
// import { genesisIcons } from '@formkit/icons'
import { primeInputs } from '@sfxcode/formkit-primevue'
import tailwindTheme from "./tailwind-formkit-theme.js"

const proPlugin = createProPlugin('fk-390439ab89', {
  rating,
  toggle,
  dropdown,
  datepicker
  // ... and any other Pro Inputs
})

const config: DefaultConfigOptions = {
  plugins: [proPlugin],
  // icons: {
  //   ...genesisIcons
  // },
  // config: {
  //   classes: generateClasses(tailwindTheme)
  // },
  // theme: 'genesis',
  inputs: primeInputs
}

export default config
