<template>
  <section id="features">
    <div class="feature">
      <fa icon="chalkboard-teacher" class="icon"></fa>
      <h2>Easily Manage your classes</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        perferendis beatae voluptatibus at temporibus earum nesciunt pariatur.
        Minima dicta eligendi officia, consequatur enim id voluptate?
      </p>
    </div>
    <div class="feature">
      <fa icon="folder-open" class="icon"></fa>
      <h2>Keep a profile on every single student</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        perferendis beatae voluptatibus at temporibus earum nesciunt pariatur.
        Minima dicta eligendi officia, consequatur enim id voluptate?
      </p>
    </div>
    <div class="feature">
      <fa icon="book-reader" class="icon"></fa>
      <h2>Distribute study materials securely</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        perferendis beatae voluptatibus at temporibus earum nesciunt pariatur.
        Minima dicta eligendi officia, consequatur enim id voluptate?
      </p>
    </div>
    <div class="feature">
      <fa icon="hand-holding-usd" class="icon"></fa>
      <h2>Keep track of student payments</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        perferendis beatae voluptatibus at temporibus earum nesciunt pariatur.
        Minima dicta eligendi officia, consequatur enim id voluptate?
      </p>
    </div>
    <div class="feature">
      <fa icon="coins" class="icon"></fa>
      <h2>Manage your income and costs</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        perferendis beatae voluptatibus at temporibus earum nesciunt pariatur.
        Minima dicta eligendi officia, consequatur enim id voluptate?
      </p>
    </div>
    <div class="feature">
      <fa icon="mobile" class="icon"></fa>
      <h2>Use our simple yet feature rich mobile apps</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
        perferendis beatae voluptatibus at temporibus earum nesciunt pariatur.
        Minima dicta eligendi officia, consequatur enim id voluptate?
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$color-1: #495464;
$color-2: #bbbfca;
$color-3: #e8e8e8;
$color-4: #f4f4f2;
$color-5: #ff3b3f;

#features {
  display: grid;
  padding: 10rem 0;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  align-content: center;

  .feature {
    justify-self: center;
    align-self: center;
    text-align: center;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem;

    .icon {
      font-size: 10rem;
      color: $color-5;
    }

    h2 {
      font-family: 'Stick';
      font-size: 3rem;
      text-align: center;
    }

    p {
      font-size: 2rem;
      text-align: center;
      color: $color-1;
    }
  }
}
</style>
