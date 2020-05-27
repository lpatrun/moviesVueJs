<template>
  <div>
    <div class="movies-container">
      <ul>
        <transition-group name="fade" class="render-movies">
          <li class="movie" v-for="(movie, index) in moviesToDisplay" :key="index" :id="index" @click="selectMovie(index)">
            <div class="movie__img">
              <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path" :alt="movie.title" />
            </div>
            <div
              class="movie__name-year"
            >{{shortenTitle(movie.title)}} {{returnYear(movie.release_date)}}</div>
            <div class="movie__lang">Language: {{movie.original_language}}</div>
            <div class="movie__rating">Rating: {{movie.vote_average}}</div>
          </li>
        </transition-group>
      </ul>
    </div>
    <section class="button-container">
      <button class="button button__load-more" @click="loadRow" v-if="endingMovie < 20">Učitaj još</button>
      <button class="button button__movie-roulette" @click="goToGenres">
        <i class="fas fa-dice"></i>
      </button>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    movies () {
      return this.$store.state.movies
    },
    moviesToDisplay () {
      return this.$store.state.moviesToDisplay
    },
    endingMovie () {
      return this.$store.state.endingMovie
    }
  },
  methods: {
    goToGenres () {
      this.$store.commit('goToGenres')
    },
    selectMovie (index) {
      this.$store.commit('selectMovie', index)
    },
    loadRow () {
      this.$store.commit('moviesToDisplay')
    },
    shortenTitle (title) {
      const maximumNameLength = 25
      if (title.length > maximumNameLength) {
        return title.slice(0, 20) + '...'
      } else {
        return title
      }
    },
    returnYear (year) {
      return '(' + year.slice(0, 4) + ')'
    }
  }
}
</script>
