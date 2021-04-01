<template>
  <div class="container">
    <layout-header></layout-header>
    <layout-showcase></layout-showcase>
    <layout-features></layout-features>
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
  grid-row: 2 / 3;
  height: 100vh;
}
#features {
  grid-column: 2 / 12;
  grid-row: 3 / span 10;
}
</style>
