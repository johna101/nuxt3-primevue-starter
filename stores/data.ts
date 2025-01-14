import { acceptHMRUpdate, defineStore } from 'pinia'
import { consola } from 'consola'

export const useDataStore = defineStore({
  id: 'data',

  state: () => ({
    appVersion: useRuntimeConfig().public.APP_VERSION,
    products: [],
    riskData: null
  }),
  actions: {
    async initData () {
      if (this.products.length === 0) {
        consola.debug('fetching data ...')
        await fetch('/api/products').then(res => res.json()).then((d) => {
          this.products = d.data
          console.log('products fetched ...', this.products)
        })
          .catch(error => console.error(error))
      }
      if (this.riskData === null) {
        consola.debug('fetching risk data ...')
        await fetch('/api/riskratings').then(res => res.json()).then((d) => {
          console.log('risk ratings fetched ...', d.data)
          this.riskData = d.data
        })
          .catch(error => consola.error(error))
      }
    }
  }

}
)

if (import.meta.hot) { import.meta.hot.accept(acceptHMRUpdate(useDataStore, import.meta.hot)) }
