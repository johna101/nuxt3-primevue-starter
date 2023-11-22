// formkit.config.ts
import type { DefaultConfigOptions } from '@formkit/vue'
// import { generateClasses } from '@formkit/themes'
// import '@formkit/themes/genesis'
// import { genesisIcons } from '@formkit/icons'
import { primeInputs } from '@sfxcode/formkit-primevue'
import tailwindTheme from "./tailwind-formkit-theme.js"

const config: DefaultConfigOptions = {
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
