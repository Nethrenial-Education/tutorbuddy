<template>
  <div>
    <Nuxt />
  </div>
</template>

//
<script>
// export default {
//   methods: {
//     scrollToTop() {
//       scroll({
//         top: 0,
//         behavior: 'smooth',
//       })
//     },
//   },
// }
//
</script>

<style lang="scss">
.floating-action-button {
  padding: 1rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  position: fixed;
  z-index: 3;
  top: 80vh;
  right: 2vw;
  font-family: sans-serif;
  font-size: 2rem;
  font-weight: bold;
  border: none;

  &:active,
  &:focus {
    outline: none;
    border: none;
  }
}
</style>
