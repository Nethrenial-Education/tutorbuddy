<template>
  <section id="showcase">
    <h1><span>Tutor</span>Buddy</h1>
    <h2>{{ phrase }}</h2>
    <div class="buttons">
      <a
        href="#features"
        class="btn btn-secondary"
        name="click to learn more"
        @click="clickHandler($event)"
        >Learn More</a
      >
      <a href="/download" class="btn btn-primary" name="click to download"
        >Download</a
      >
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      phrase: '...',
      phrases: [
        'Easily manage your classes',
        'Keep a record of every student',
        'Distribute study materials',
        'Keep a track of student payments',
        'Manage your income and costs',
        'Save money with our affordable plans',
      ],

      count: 1,
      phraseCount: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      setInterval(() => {
        if (this.phrase.length === this.phrases[this.phraseCount].length + 3) {
          if (this.phraseCount !== 5) {
            this.phraseCount++
          } else {
            this.phraseCount = 0
          }
        }
        this.phrase =
          this.phrases[this.phraseCount].slice(0, this.count) + '...'
        if (this.count === this.phrases[this.phraseCount].length) {
          this.count = 1
        } else {
          this.count++
        }
      }, 100)
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
$color-1: #495464;
$color-2: #bbbfca;
$color-3: #e8e8e8;
$color-4: #f4f4f2;
$color-5: #ff3b3f;
section#showcase {
  background-image: linear-gradient(
      to bottom right,
      rgba(#000, 0.7),
      rgba(#000, 0.7)
    ),
    url('/images/hero-optimized.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    backface-visibility: hidden;
    font-family: 'Lobster', curc;
    font-size: 8.2rem;
    color: $color-4;
    text-align: center;
    opacity: 0;
    animation: slide-right 1s ease-out forwards;

    span {
      color: $color-5;
    }
  }

  h2 {
    font-family: 'Stick';
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
</style>
