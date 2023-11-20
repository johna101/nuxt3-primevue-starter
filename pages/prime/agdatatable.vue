<template>
  Test...
  <ag-grid-vue
      style="width: 500px; height: 500px"
      class="ag-theme-alpine"
      :column-defs="columnDefs"
      :row-data="risks"
      :default-col-def='defaultColDef'
  />
  length: {{ risks?.length }}
  <div>Product length: {{ products?.data?.length }}</div>
  Risks

  <pre>Risk error: {{ riskError}}</pre>
<!--  <pre>{{ risks}}</pre>-->
<!--  <pre>{{ mountains}}</pre>-->
</template>

<script setup lang="ts">
import {AgGridVue} from 'ag-grid-vue3'

const {data: products} = await useFetch('/api/products')

const {data: risks, error: riskError} = await useFetch(`https://snd-portal-dev.azurewebsites.net/api/referenceData/RiskRatings`)
// const {data: risks} = await useAsyncData("risks", () => $fetch(`https://localhost:5010/api/referenceData/ForRiskRatings`))
// const { risks: any } = await useAsyncData("risk", () => $fetch(`https://www.ag-grid.com/example-assets/row-data.json`))

// const { data: mountains, error } = await useFetch('https://api.nuxtjs.dev/mountains')
const columnDefs = [
  {headerName: 'Id', field: 'Band'},
  {headerName: 'Text', field: 'Responsibility'},
]

const defaultColDef = {
  resizable: true,
  sortable: true,
  // wrapText: true,
  // autoHeight: true,
  filter: true,
  // enableRowGroup: true,

  headerComponentParams: {
    template:
        '<div class="ag-cell-label-container" role="presentation">' +
        '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
        '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
        '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
        '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
        '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
        '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
        '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
        '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
        '  </div>' +
        '</div>'
  }

}
const gridOptions = {}

</script>
