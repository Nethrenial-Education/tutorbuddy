<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <section id="contact">
      <form action="" class="form-container">
        <div class="form-group">
          <label for="name">Name</label>
          <input id="name" type="text" name="name" />
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input id="phone" type="tel" name="phone" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <button class="btn btn-primary">Send Message</button>
      </form>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.contact {
  background-color: $color-2;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: $font-logo;
    text-align: center;
    font-size: 4rem;
    color: $color-1;
    margin-bottom: 4rem;
  }
}
#contact {
  font-family: $font-primary;

  form {
    max-width: 1200px;
    margin: 0 auto;
    .form-group {
      margin: 0 auto 2rem auto;
      grid-column: 2 / span 10;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      label {
        font-size: 2rem;
        margin-right: 3rem;
      }

      &:first-child {
        grid-row: 1 / span 1;
      }
      &:nth-child(2) {
        grid-row: 1 / span 1;
      }
      &:nth-child(3) {
        grid-row: 1 / span 1;
      }
      &:lastchild(4) {
        grid-row: 1 / span 1;
      }

      input {
        height: 5rem;
        padding: 0.5rem;
        font-size: 2rem;
        color: $color-1;

        &:focus {
          outline: 2px solid $color-1;
        }
      }

      textarea {
        height: 10rem;
        padding: 0.5rem;
        font-size: 2rem;
        color: $color-1;
        &:focus {
          outline: 2px solid $color-1;
        }
      }
    }
  }
}
</style>
