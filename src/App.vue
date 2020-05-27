<template>
  <div>
    <header class="header">
      <h2 class="heading-primary">FILMOTEKA</h2>
    </header>

    <transition name="fade" mode="out-in">
      <component :is="selectedComponent"></component>
    </transition>

    <footer class="footer">
      <p class="footer__credits">Napravio: Luka Patrun.</p>
    </footer>
  </div>
</template>

<script>
import MoviesGrid from './components/MoviesGrid'
import SingleMovie from './components/SingleMovie'
import GenrePicker from './components/GenrePicker'

export default {
  computed: {
    selectedComponent () {
      return this.$store.state.selectedComponent
    }
  },
  components: {
    'my-movies-grid': MoviesGrid,
    'my-single-movie': SingleMovie,
    'my-genre-picker': GenrePicker
  },
  created () {
    this.$store.dispatch('generateMovies')
    this.$store.dispatch('generateGenres')
  }
}
</script>
