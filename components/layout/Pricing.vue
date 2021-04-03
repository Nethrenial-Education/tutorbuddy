<template>
  <div class="pricing">
    <h2>Pricing</h2>
    <section id="pricing">
      <div class="price">
        <h3>FREE*</h3>
        <ul>
          <li>Up to 50 students.</li>
          <li>100mb of monthy uploads.</li>
          <li>Maximum of 2 classes</li>
          <li>See past records upto 3 months.</li>
          <li>Conditions Apply*</li>
        </ul>
        <button class="btn btn-primary">Get Started</button>
      </div>
      <div class="price">
        <h3>PRO</h3>
        <ul>
          <li>Up to 500 students.</li>
          <li>1GB of monthly uploads.</li>
          <li>Maximum of 5 classes</li>
          <li>See past records upto a year.</li>
          <li>$ 5.99 / Monthly</li>
        </ul>
        <button class="btn btn-primary">I'm interested..</button>
      </div>
      <div class="price">
        <h3>ULTIMATE</h3>
        <ul>
          <li>500 students and more..</li>
          <li>10GB of monthly uploads.</li>
          <li>unlimited classes</li>
          <li>See past records upto 3 years.</li>
          <li>$ 15.99 / Monthly</li>
        </ul>
        <button class="btn btn-primary">Check it out!</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.pricing {
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Lobster', cursive;
    text-align: center;
    font-size: 4rem;
    color: $color-1;
    margin-bottom: 5rem;
  }
}

#pricing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-content: center;
  align-items: center;
  gap: 2rem;

  .price {
    padding: 0 0 2rem 0;
    background-color: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease-out;

    &:hover {
      transform: scale(1.02);
      box-shadow: 5px 0 10px rgba($color: $color-1, $alpha: 0.5);
    }

    h3 {
      font-size: 3rem;
      font-family: 'Stick';
      border-radius: 20px 20px 0 0;
      text-align: center;
      width: 100%;
      background-color: $color-1;
      color: #eee;
      padding: 1rem;
    }

    ul {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      li {
        font-size: 2rem;
        padding: 1rem;
        border-bottom: 2px dotted $color-2;
        &:last-child {
          font-weight: bolder;
        }
      }
    }

    button {
      margin-top: 3rem;
      background-color: $color-1;
      color: $color-4;
      transition: all 0.3s ease-out;
      &:hover,
      &:focus,
      &:active {
        background-color: darken($color-1, 20%);
        color: lighten($color: $color-4, $amount: 100%);
      }
    }

    &:nth-child(2) {
      margin: auto 1rem;
      h3 {
        background-color: $color-5;
        color: $color-4;
      }

      button {
        background-color: $color-5;
        color: $color-4;
        transition: all 0.3s ease-out;
        &:hover,
        &:focus,
        &:active {
          background-color: darken($color-5, 20%);
          color: lighten($color: $color-4, $amount: 100%);
        }
      }
      &:hover {
        transform: scale(1.102);
      }
    }
  }
}

@media screen and (min-width: 800px) and (max-width: 1200px) {
  #pricing {
    .price {
      &:last-child {
        grid-column: span 2;
      }
      &:nth-child(2) {
        transform: scale(1);
      }
    }
  }
}
@media screen and (max-width: 400px) {
  #pricing {
    grid-template-columns: 1fr;
    .price {
      &:nth-child(2) {
        padding: 0 0 2rem 0;
        background-color: #fff;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease-out;
      }
    }
  }
}
</style>
