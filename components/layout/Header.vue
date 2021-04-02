<template>
  <header id="header" class="xl-container">
    <div class="logo">
      <img
        :src="require('~/static/images/icon.png')"
        alt="Logo of TutorBuddy"
        class="logo-img"
      />
      <h1 class="logo-text">TutorBuddy</h1>
    </div>
    <nav class="navigation">
      <ul>
        <li>
          <nuxt-link to="/" name="home link">Home</nuxt-link>
        </li>
        <li>
          <a
            href="#features"
            name="link to features"
            @click="clickHandler($event)"
            >Features</a
          >
        </li>
        <li>
          <a
            href="#pricing"
            name="link to pricing"
            @click="clickHandler($event)"
            >Pricing</a
          >
        </li>
        <li>
          <a
            href="#contact"
            name="link to contact"
            @click="clickHandler($event)"
            >Contact</a
          >
        </li>
        <li>
          <a href="#about" name="link to about" @click="clickHandler($event)"
            >About</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    clickHandler(event) {
      event.preventDefault()
      const href = event.target.getAttribute('href')
      const offsetTop = document.querySelector(href).offsetTop - 100

      scroll({
        top: offsetTop,
        behavior: 'smooth',
      })

      // document.querySelector(href).scrollIntoView({
      //   behaviour: 'smooth',
      // })
    },
  },
}
</script>

<style lang="scss" scoped>
$color-1: #495464;
$color-2: #bbbfca;
$color-3: #e8e8e8;
$color-4: #f4f4f2;
$color-5: #ff3b3f;

header#header {
  background-color: $color-4;
  position: fixed;
  z-index: 2;
  box-shadow: 0.5rem 0 2rem #000;
  .logo {
    align-self: center;
    grid-column: 2 / 5;
    display: flex;
    &-img {
      align-self: center;
      width: 4rem;
      height: 4rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    &-text {
      align-self: center;
      margin-left: 3rem;
      color: $color-1;
      font-family: 'Lobster', cursive;
      font-size: 4rem;
    }
  }
  .navigation {
    align-self: center;
    grid-column: 8 / 12;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      li {
        font-size: 2rem;
        font-weight: bold;
        margin-left: 1rem;

        a {
          color: $color-1;
          padding: 1rem 2rem;
          transition: all 0.1s linear;
          border-bottom: 5px solid transparent;

          &:hover,
          &:active,
          &:focus {
            color: $color-5;
            border-bottom: 5px solid $color-5;
          }
        }
      }
    }
  }
}
</style>
