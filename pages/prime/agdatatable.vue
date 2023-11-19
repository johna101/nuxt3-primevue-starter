<template>
  <ag-grid-vue
    style="width: 500px; height: 200px"
    class="ag-theme-alpine"
    :column-defs="columnDefs"
    :row-data="rowData"
    :default-col-def='defaultColDef'
  />
</template>

<script setup lang="ts">
import { AgGridVue } from 'ag-grid-vue3'

const columnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' }
]
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxster', price: 72000 }
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
