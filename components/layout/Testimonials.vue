<template>
  <section id="testimonials">
    <div class="testimonial t-1">
      <div class="avatar">
        <div class="img"></div>
      </div>
      <div class="text">
        <h3>John Aguilar</h3>
        <p>
          <q>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            incidunt temporibus, alias consequatur obcaecati magnam harum.
            Cupiditate quae velit, molestias quisquam ullam quaerat veniam
            corrupti ipsa. Dolores quisquam deleniti quos sequi? Quam dolorem
            debitis inventore.</q
          >
        </p>
      </div>
    </div>
    <div class="testimonial t-2">
      <div class="avatar">
        <div class="img"></div>
      </div>
      <div class="text">
        <h3>Hans Christian</h3>
        <p>
          <q>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            incidunt temporibus, alias consequatur obcaecati magnam harum.
            Cupiditate quae velit, molestias quisquam ullam quaerat veniam
            corrupti ipsa. Dolores quisquam deleniti quos sequi? Quam dolorem
            debitis inventore.</q
          >
        </p>
      </div>
    </div>
    <div class="testimonial t-3">
      <div class="avatar">
        <div class="img"></div>
      </div>
      <div class="text">
        <h3>Jake Paul</h3>
        <p>
          <q>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            incidunt temporibus, alias consequatur obcaecati magnam harum.
            Cupiditate quae velit, molestias quisquam ullam quaerat veniam
            corrupti ipsa. Dolores quisquam deleniti quos sequi? Quam dolorem
            debitis inventore.</q
          >
        </p>
      </div>
    </div>
    <div class="testimonial t-4">
      <div class="avatar">
        <div class="img"></div>
      </div>
      <div class="text">
        <h3>Amy Santiago</h3>
        <p>
          <q>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            incidunt temporibus, alias consequatur obcaecati magnam harum.
            Cupiditate quae velit, molestias quisquam ullam quaerat veniam
            corrupti ipsa. Dolores quisquam deleniti quos sequi? Quam dolorem
            debitis inventore.</q
          >
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$color-1: #495464;
$color-2: #bbbfca;
$color-3: #e8e8e8;
$color-4: #f4f4f2;
$color-5: #ff3b3f;
#testimonials {
  background-color: rgba($color: $color-2, $alpha: 1);
  padding: 3rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .testimonial {
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
    font-size: 2rem;
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1rem;
    background-color: #fff;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }

    .avatar {
      .img {
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
        border: 5px solid $color-5;
      }
    }

    .text {
      margin: auto 3rem;
      h3 {
        margin-bottom: 2rem;
        font-family: 'Stick';
        font-size: 3rem;
        color: $color-1;
      }
      p {
        color: $color-1;
      }
    }

    &:nth-child(1) {
      .img {
        background-image: url('/images/avatar1.jpg');
        background-position: center;
        background-size: cover;
      }
    }
    &:nth-child(2) {
      .img {
        background-image: url('/images/avatar2.jpg');
        background-position: center;
        background-size: cover;
      }
    }
    &:nth-child(3) {
      .img {
        background-image: url('/images/avatar3.jpg');
        background-position: center;
        background-size: cover;
      }
    }
    &:nth-child(4) {
      .img {
        background-image: url('/images/avatar4.jpg');
        background-position: center;
        background-size: cover;
      }
    }
  }
}
</style>
