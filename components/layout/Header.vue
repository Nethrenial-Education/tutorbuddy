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
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$color-1: #495464;
$color-2: #bbbfca;
$color-3: #e8e8e8;
$color-4: #f4f4f2;
$color-5: #ff3b3f;

header#header {
  background-color: $color-3;
  position: fixed;
  .logo {
    align-self: center;
    grid-column: 2 / 5;
    display: flex;
    &-img {
      align-self: center;
      width: 64px;
      height: auto;
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

          &:hover,
          &:active,
          &:focus {
            background-color: $color-5;
            color: $color-3;
            border-radius: 100rem;
            box-shadow: 5px 5px 10px $color-2;
          }
        }
      }
    }
  }
}
</style>
