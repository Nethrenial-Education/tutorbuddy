<template>
  <div class="container">
    <layout-header></layout-header>
    <layout-showcase></layout-showcase>
    <layout-features></layout-features>
    <layout-testimonials></layout-testimonials>
    <layout-pricing></layout-pricing>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(10, minmax(min-content, 120px)) minmax(
      0,
      1fr
    );
}

//grid-template-rows: 6rem calc(100vh-6rem) repeat(20, 1fr);

#header {
  grid-column: 1 / -1;
  grid-row: 1 / span 1;
  width: 100vw;
}
#showcase {
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
  height: 100vh;
}
#features {
  grid-column: 2 / 12;
  grid-row: 3 / span 1;
}

#testimonials {
  grid-column: 1 / -1;
  grid-row: 4 / span 1;
}

#pricing {
  grid-column: 2 / 12;
  grid-row: 5 / span 1;
}
</style>
