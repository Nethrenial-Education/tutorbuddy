<template>
  <div class="pricing">
    <h2>Pricing</h2>
    <section id="pricing">
      <div class="price">
        <h3>FREE*</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <button class="btn btn-primary">Get Started</button>
      </div>
      <div class="price">
        <h3>LITE</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <button class="btn btn-primary">Try Now &rightarrow;</button>
      </div>
      <div class="price">
        <h3>PRO</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <button class="btn btn-primary">I'm interested..</button>
      </div>
      <div class="price">
        <h3>ULTIMATE</h3>
        <ul>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <button class="btn btn-primary">Check it out!</button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$color-1: #495464;
$color-2: #bbbfca;
$color-3: #e8e8e8;
$color-4: #f4f4f2;
$color-5: #ff3b3f;

.pricing {
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: 'Lobster', cursive;
    text-align: center;
    font-size: 4rem;
    color: $color-1;
    margin-bottom: 4rem;
  }
}

#pricing {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
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
      li {
        font-size: 2rem;
        padding: 1rem;
        border-bottom: 2px dotted $color-2;
      }
    }

    button {
      margin-top: 3rem;
    }
  }
}

@media screen and (min-width: 900px) and (max-width: 1200px) {
  #pricing {
    .price {
      &:last-child {
        grid-column: span 3;
      }
    }
  }
}
</style>
