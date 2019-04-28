<template>
  <div class="container">
      <AirtableData />
  </div>
</template>

<script>
import AirtableData from './components/AirtableData.vue'

export default {
  name: 'app',
  components: {
    AirtableData
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
