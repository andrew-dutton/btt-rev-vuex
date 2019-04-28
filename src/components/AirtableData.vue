<template>
  <div>
    <h3>AirTable Data</h3>
    <!-- <hot-table id="tableData" licenseKey='non-commercial-and-evaluation' :settings="settings"></hot-table> -->
    {{ airtableData }}
  </div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { HotTable } from '@handsontable/vue'

export default {
  name: "AirtableData",
  computed: mapGetters(['airtableData']),
  methods: mapActions(['fetchAirtableData']),
  created() {
    this.fetchAirtableData()
  },
  modules: {
    // HotTable
  }
}
</script>

<style>
/* src="../../node_modules/handsontable/dist/handsontable.full.css" */
</style>
