<template>
  <section id="showcase">
    <h2 class="h1"><span>Tutor</span>Buddy</h2>
    <h2 class="h2">{{ phrase }}</h2>
    <div class="buttons">
      <a
        href="#features"
        class="btn btn-secondary"
        name="click to learn more"
        @click="clickHandler($event)"
        >Learn More</a
      >
      <a href="/" class="btn btn-primary" name="click to download">Download</a>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phrase: ' |',
      phrases: [
        'Easily manage your classes',
        'Keep a record of every student',
        'Distribute study materials',
        'Keep track of student payments',
        'Manage your income and costs',
        'Save money with our affordable plans',
      ],

      count: 1,
      phraseCount: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      const refreshIntervalId = setInterval(() => {
        this.phrase = this.phrases[this.phraseCount].slice(0, this.count) + ' |'
        if (this.count === this.phrases[this.phraseCount].length) {
          this.count = 1
        } else {
          this.count++
        }
        if (this.phrase.length === this.phrases[this.phraseCount].length + 2) {
          this.phrase = this.phrases[this.phraseCount] + ' |'
          if (this.phraseCount !== 5) {
            this.phraseCount++
          } else {
            clearInterval(refreshIntervalId)
          }
        }
      }, 120)
    }, 1000)
  },
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
section#showcase {
  background-image: linear-gradient(
      to bottom right,
      rgba(#000, 0.7),
      rgba(#000, 0.7)
    ),
    url('/images/hero-optimized-min.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 6rem);

  .h1 {
    backface-visibility: hidden;
    font-family: $font-logo;
    font-size: 8.2rem;
    color: $color-4;
    text-align: center;
    opacity: 0;
    animation: slide-right 1s ease-out forwards;

    span {
      color: $color-5;
    }
  }

  .h2 {
    font-family: $font-secondary;
    font-size: 3.6rem;
    text-align: center;
    color: $color-4;
  }
  .buttons {
    opacity: 0;
    animation: slide-up 1s ease-out forwards;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5rem;
    .btn {
      margin-right: 2rem;
    }
  }
}

@keyframes slide-right {
  0% {
    transform: translateX(-10rem);
    opacity: 0;
  }

  75% {
    transform: translateX(2rem);
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slide-up {
  0% {
    transform: translateY(10rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@media screen and (max-height: 320px) {
  section#showcase {
    .h1 {
      font-size: 5rem;
    }
    .h2 {
      font-size: 2.2rem;
    }
    .buttons {
      .btn {
        font-size: 1.5rem;
      }
    }
  }
}
</style>
