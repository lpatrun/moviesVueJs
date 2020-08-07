<template>
  <div>
    <header class="header">
      <h2 class="heading-primary">FILMOTEKA</h2>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <p class="footer__credits">Napravio: Luka Patrun.</p>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    selectedComponent () {
      return this.$store.state.selectedComponent
    }
  },
  created () {
    this.$store.dispatch('generateMovies')
    this.$store.dispatch('generateGenres')
  }
}
</script>
<style lang="scss">
html {
  font-size: 62.5%;
}

@media only screen and (max-width: 900px) {
  html {
    font-size: 50%;
  }
}

body,
ul,
li,
p,
h1,
h2,
h3,
h4 {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}

ul li {
  list-style-type: none;
}

::selection {
  background-color: firebrick;
  color: white;
}

@font-face {
  font-family: "Azonix";
  src: url("../public/Azonix.otf");
}

.button {
  background-color: firebrick;
  color: white;
  padding: 0;
  border: none;
  cursor: pointer;
  font-size: 22px;
  height: 60px;
  &:focus {
    outline: none;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
}
</style>

<style lang="scss" scoped>
.header {
  text-align: center;
  width: 100%;
  background-color: firebrick;
  color: white;
}

.heading-primary {
  font-family: "Azonix", sans-serif;
  font-size: 30px;
  padding: 30px;

  @media only screen and (max-width: 900px) {
    font-size: 25px;
    padding: 25px;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;

  &__credits {
    padding: 20px;
  }
}
</style>
