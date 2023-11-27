<script setup>
import { LicenseManager } from 'ag-grid-enterprise' // the AG Grid Vue Component
LicenseManager.setLicenseKey('IRDEVELOPERS_COM_NDEwMjM0NTgwMDAwMA==f08aae16269f416fe8d65bbf9396be5f')

useHead({
  title: 'Nuxt 3 PrimeVue Starter'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import 'App.scss';
</style>
