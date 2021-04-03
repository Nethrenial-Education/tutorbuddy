<template>
  <div class="features">
    <h2>Features</h2>
    <section id="features">
      <div class="feature">
        <fa icon="chalkboard-teacher" class="icon"></fa>
        <h2>Easily Manage your classes</h2>
        <p>
          easily keep a database of your students with every detail,TutorBuddy
          database is easily manageable and the best part is? You don't even
          need anyone else!This makes it easy for you to keep your costs down
          while you're just starting out.And believe it or not,It's completely
          free upto the first 50 students! Even from there,pricing is really
          affordable for what this tool offers you.
          <a href="#pricing">CHECK OUT THE PRICING</a>&rightarrow;
        </p>
      </div>
      <div class="feature">
        <fa icon="folder-open" class="icon"></fa>
        <h2>Keep a profile on every single student</h2>
        <p>
          TutorBuddy let's you keep a detailed report of every single
          student,including their name, birthday, address, emergency contact
          details and much more. And their payment history will also be
          available for you to review.Each Student get's an Id and if you wish
          (recommended if your class has more than 500 students.) you can give
          them id with their student ID as QR Code.Then you can scan that card
          to easily mark them when they make payments.
        </p>
      </div>
      <div class="feature">
        <fa icon="book-reader" class="icon"></fa>
        <h2>Distribute study materials securely</h2>
        <p>
          searching for a way to easily distribute learning resources to your
          student?Maybe you want to restrict them to students who already paid
          the fees.With "TutorBuddy" it's really simple!Easily share pdf
          files,images and even videos(*conditions apply
          <a href="#pricing">CHECK OUT THE PRICING</a>&rightarrow; for more
          details.) to all of your students at once.Students will be given there
          own accounts.They just need to log into their account and download
          them.
        </p>
      </div>
      <div class="feature">
        <fa icon="hand-holding-usd" class="icon"></fa>
        <h2>Keep track of student payments</h2>
        <p>
          Do you still keep track of your students' fees with written
          documents.But is it really reliable though?And isn't it a hassle when
          you need to check a student's payment record and you have to go
          through hundreds of names or maybe even multiple documents?With
          "TutorBuddy", all you need to do is search for the Student's name or
          ID number(If you decide to use one) and you're set!.'TutorBuddy' will
          inform you (at the end of the month) if any of your students haven't
          still paid their due payments.
        </p>
      </div>
      <div class="feature">
        <fa icon="coins" class="icon"></fa>
        <h2>Manage your income and costs</h2>
        <p>
          Do you find it hard to keep track of what you earn and what you
          spend?,Do you want to get a rough idea of about your
          profits?"TutorBuddy" for the rescue!!! Any time you spend money for
          your teaching works, just get your phone out and enter the details.At
          the end of the month, this tool will calculate your profit by
          deducting all your costs from the sum of all of the student
          payments.And will keep a record of every month!Isn't it wonderful???
          <a href="#pricing">CHECK OUT THE PRICING</a>&rightarrow;
        </p>
      </div>
      <div class="feature">
        <fa icon="mobile" class="icon"></fa>
        <h2>Use our simple yet feature rich mobile apps</h2>
        <p>
          Instead of giving you a dull web interface, we thought of developing
          Mobile apps (for both Android and IOS) that are simply to use yet has
          gorgeus design.And we are happy to say that we achieved it.And there's
          one huge benefit of using the mobile app as they let you add data even
          when you're offline.Then the documents will be updated the next time
          you go online. <br />
          <a href="/download">DOWNLOAD FOR ANDROID &rightarrow;</a> <br />
          <a href="/download">DOWNLOAD FOR IOS &rightarrow;</a>
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.features {
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

#features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  align-content: center;

  .feature {
    justify-self: center;
    align-self: flex-start;
    text-align: center;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 2rem;

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
      a {
        color: $color-5;

        &:hover,
        &:active,
        &:focus {
          color: darken($color: $color-5, $amount: 20%);
        }
      }
    }
  }
}

@media screen and (max-width: 400px) {
  #features {
    grid-template-columns: 1fr;
  }
}
</style>
