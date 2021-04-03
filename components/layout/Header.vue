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
          <a href="#showcase" name="link to home" @click="clickHandler($event)"
            >Home</a
          >
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
    <div class="toggler" @click="toggle1">
      <fa icon="bars" class="icon"></fa>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggle1() {
      this.$emit('toggle')
    },
    clickHandler(event) {
      this.isMenuVisible = !this.isMenuVisible
      event.preventDefault()
      const href = event.target.getAttribute('href')
      const offsetTop = document.querySelector(href).offsetTop - 200

      scroll({
        top: offsetTop,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
header#header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  background-color: $color-4;
  box-shadow: 0.5rem 0 1rem rgba($color: #000000, $alpha: 0.5);
  position: fixed;
  .toggler {
    display: none;
    height: 4rem;
    width: 4rem;
    background-color: $color-4;
    margin-right: 2rem;
    cursor: pointer;
    .icon {
      font-size: 3.8rem;
      color: $color-5;
    }
  }

  .navigation {
    ul {
      display: flex;
      li {
        margin-right: 2rem;
        a {
          font-size: 2rem;
          color: $color-1;
          border-bottom: 3px solid transparent;
          padding: 1rem 1.5rem;

          &:hover {
            border-bottom: 3px solid $color-5;
            color: $color-5;
          }
        }
      }
    }
  }

  .logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 2rem;

    img {
      height: 4rem;
      width: 4rem;
      margin: 1rem auto;
    }

    h1 {
      font-family: 'Lobster', cursive;
      font-size: 4rem;
      margin-left: 4rem;
      color: $color-1;
    }
  }
}

@media screen and (max-width: 1000px) {
  header#header {
    .toggler {
      display: block;
    }

    .navigation {
      display: none;
    }
  }
}
</style>
