<script>
import _ from 'lodash'
export default {
  data() {
    return {
      span: "<span>a</span>",
      debounceClick: null,
      author: {
        firstName: 'John',
        lastName: 'Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    };
  },
  methods: {
    handleClick() {
      console.log("click");
    },
    reduceBook() {
      this.author.books.pop();
    },
    changeName() {
      this.fullName = 'a b';
    }
  },
   created() {
    this.debounceClick = _.debounce(this.reduceBook, 500);
  },
  unmounted() {
    this.debounceClick.cancel();
  },
  computed: {
    fullName: {
      get() {
        return this.author.firstName + ' ' + this.author.lastName;
      },
      set(newValue) {
         // Note: we are using destructuring assignment syntax here.
        [this.author.firstName, this.author.lastName] = newValue.split(' ');
      }
    },
    hasBook() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
};
</script>

<template>
  <header>
    <div>Full name: {{this.fullName}}</div>
    <div>First name: {{this.author.firstName}}</div>
    <div>Last name: {{this.author.lastName}}</div>
    <div>Number of book: {{hasBook}}</div>

    <button v-on:click="debounceClick">reduce book</button>
    <button v-on:click="changeName">Change Name</button>


  
  </header>

  <main>

  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    /* display: flex; */
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
