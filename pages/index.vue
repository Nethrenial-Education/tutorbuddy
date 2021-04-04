<template>
  <div>
    <transition name="menu">
      <div v-if="isMenuVisible" class="menu-overlay">
        <nav class="navigation">
          <ul>
            <li>
              <a
                href="#showcase"
                name="link to home"
                @click="clickHandler($event)"
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
              <a
                href="#about"
                name="link to about"
                @click="clickHandler($event)"
                >About</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </transition>

    <div class="container">
      <layout-header @toggle="toggled1"></layout-header>
      <layout-showcase></layout-showcase>
      <layout-features></layout-features>
      <layout-testimonials></layout-testimonials>
      <layout-pricing></layout-pricing>
      <layout-contact></layout-contact>
      <layout-about></layout-about>
      <layout-footer></layout-footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuVisible: false,
    }
  },
  methods: {
    toggled1() {
      this.isMenuVisible = !this.isMenuVisible
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
#header {
  grid-column: 1 / -1;
  grid-row: 1 / 2;
  width: 100vw;
}
#showcase {
  grid-column: 1 / -1;
  grid-row: 2 / span 1;
}
.features {
  grid-column: 2 / 12;
  grid-row: 3 / span 1;
}

.testimonials {
  grid-column: 1 / -1;
  grid-row: 4 / span 1;
}

.pricing {
  grid-column: 2 / 12;
  grid-row: 5 / span 1;
}

.contact {
  grid-column: 1 / -1;
  grid-row: 6 / span 1;
}

.about {
  grid-column: 2 / 12;
  grid-row: 7 / span 1;
}

#footer {
  grid-column: 1 / -1;
  grid-row: 8 / span 1;
}

.menu-overlay {
  position: fixed;
  z-index: 4;
  top: 6rem;
  height: calc(100vh - 6rem);
  width: 100vw;
  background-color: rgba($color: $color-1, $alpha: 0.99);
  display: flex;
  justify-content: center;
  align-items: center;

  .navigation {
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        margin-bottom: 1rem;
        padding: 1rem 2rem;
        a {
          color: $color-3;
          font-size: 3rem;
          font-weight: bold;
          font-family: $font-secondary;
          &:hover,
          &:active {
            color: #fff;
          }
        }
      }
    }
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s linear;
}

.menu-enter-to,
.menu-leave {
  width: 100%;
  opacity: 1;
}

.menu-enter, .menu-leave-to /* .fade-leave-active below version 2.1.8 */ {
  width: 0%;
}

.menu-enter.menu-overlay {
  .navigation {
    ul {
      li {
        width: 0%;
        opacity: 0;
      }
    }
  }
}
.menu-leave-to.menu-overlay {
  .navigation {
    ul {
      li {
        width: 100%;
        opacity: 0;
      }
    }
  }
}
.menu-enter-to.menu-overlay {
  .navigation {
    ul {
      li {
        width: 100%;
        opacity: 1;
      }
    }
  }
}
.menu-leave.menu-overlay {
  .navigation {
    ul {
      li {
        width: 100%;
        opacity: 1;
      }
    }
  }
}

@media screen and (max-height: 350px) {
  .menu-overlay {
    .navigation {
      ul {
        li {
          padding: 0.5rem 1.5rem;
          a {
            font-size: 1.3rem;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1001px) {
  .menu-overlay {
    display: none;
    z-index: -1;
  }
}
</style>
