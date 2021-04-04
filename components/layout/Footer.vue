<template>
  <footer id="footer" class="xl-container">
    <div class="icons">
      <a
        href="https://facebook.com/nethsara.sandeepa"
        name="Link to my FB profile"
      >
        <fa :icon="['fab', 'facebook']" class="icon" nam="facebook"></fa
      ></a>
      <a href="https://twitter.com" name="Link to my twitter account.">
        <fa :icon="['fab', 'twitter']" class="icon" name="twitter"></fa
      ></a>
      <a
        href="https://github.com/Nethrenial-Education"
        name="Link to my Github"
      >
        <fa :icon="['fab', 'github']" class="icon" name="github"></fa
      ></a>
    </div>
    <p>&copy; 2021 - All Rights Reserved.</p>
    <p>Created By Nethsara Sandeepa Elvitigala</p>
    <p>Free Icons by FlatIcons & Fontawesome</p>
  </footer>
</template>

<style lang="scss" scoped>
#footer {
  padding-top: 8rem;
  padding-bottom: 3rem;
  background-color: $color-1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .icons {
    a {
      color: $color-5;
      padding: 2rem;
      margin: 0 2rem;

      &:hover,
      &:focus {
        color: lighten($color-5, $amount: 15%);
      }

      .icon {
        font-size: 3rem;
      }
    }
    margin-bottom: 2rem;
  }

  p {
    color: $color-4;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
</style>
