<template>
  <div class="container">
    <layout-header></layout-header>
    <layout-showcase></layout-showcase>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#header {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  width: 100vw;
}
#showcase {
  grid-column: 1 / -1;
  grid-row: 1 / 10;
  height: 100vh;
}
</style>
