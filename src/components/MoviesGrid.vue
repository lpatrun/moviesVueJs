<template>
  <div>
    <div class="movies-container">
      <ul>
        <transition-group name="fade" class="render-movies">
          <router-link
            tag="a"
            class="movie"
            v-for="(movie, index) in movies"
            :to="'/single-movie/' + index"
            :key="index"
            :id="index"
          >
            <div class="movie__img">
              <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path" :alt="movie.title" />
            </div>
            <div
              class="movie__name-year"
            >{{ movie.title | shortenTitle }} {{ movie.release_date | shortenYear }}</div>
            <div class="movie__lang">Language: {{movie.original_language}}</div>
            <div class="movie__rating">Rating: {{movie.vote_average}}</div>
          </router-link>
        </transition-group>
      </ul>
    </div>
    <section class="button-container">
      <button class="button button__load-more" @click="loadRow" v-if="endMovie < 20">Učitaj još</button>
      <router-link class="button button__movie-roulette" to="/genre-picker" tag="button">
        <i class="fas fa-dice"></i>
      </router-link>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    endMovie () {
      return this.$store.state.endMovie
    },
    movies () {
      return this.$store.state.movies.slice(0, this.endMovie)
    }
  },
  methods: {
    goToGenres () {
      this.$store.commit('goToGenres')
    },
    loadRow () {
      this.$store.commit('loadRow')
    }
  }
}
</script>

<style lang="scss" scoped>
.movies-container {
  width: 90%;
  margin: 50px auto;

  @media only screen and (max-width: 900px) {
    width: 80%;
    margin: 35px auto;
  }
}

.render-movies {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5.5rem;

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5.5rem;
  }
}

.movie {
  text-align: center;
  cursor: pointer;
  padding: 2% 0;
  border-radius: 1px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;

  @media only screen and (max-width: 900px) {
    float: none;
  }

  &:hover {
    box-shadow: 0rem 0.4rem 1.5rem rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  &__img {
    margin: 0 auto;
  }

  &__name-year {
    font-size: 1.8rem;
  }

  &__lang,
  &__rating {
    font-size: 1.6rem;
  }
}

.button-container {
  width: 100%;
  text-align: center;
  margin-bottom: 40px;
  height: 60px;

  @media only screen and (max-width: 900px) {
    text-align: left;
  }
}

.button {

  &__load-more {
    width: 120px;
    margin-left: 15%;
    box-shadow: 2px 2px 3px rgba(0,0,0,.6);
  }

  &__movie-roulette {
    width: 60px;
    border-radius: 30px;
    padding: 0;
    margin-right: 10%;
    float: right;
    box-shadow: 2px 2px 3px rgba(0,0,0,.6);
  }
}

a,
a:hover,
a:active,
a:visited {
  color: black;
  text-decoration: none;
}
</style>
