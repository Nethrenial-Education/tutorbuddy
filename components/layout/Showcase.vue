<template>
  <section id="showcase">
    <h1><span>Tutor</span>Buddy</h1>
    <div v-if="count === 0">&nbsp;</div>
    <h2>{{ phrase }}</h2>
    <div class="buttons">
      <a href="#features" class="btn btn-secondary" name="click to learn more"
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
      phrase: '',
      phrases: 'Easily Manage Your Classes!',

      count: 1,
    }
  },
  mounted() {
    setTimeout(() => {
      setInterval(() => {
        this.phrase = this.phrases.slice(0, this.count) + '...'
        if (this.count === this.phrases.length) {
          this.count = 1
        } else {
          this.count++
        }
      }, 100)
    }, 1000)
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
    text-align: center;
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
