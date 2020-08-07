import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    movies: [],
    genres: {},
    selectedIndex: 0,
    endMovie: 4,
    oneGenreMovie: []
  },
  mutations: {
    saveStar (state, payload) {
      const selectedMovie = state.movies.findIndex(element => element.id === payload.movieID)
      state.movies[selectedMovie].rate = payload.rate
    },
    generateGenreMovie (state, moviesFromGenre) {
      const randomNum = Math.floor(Math.random() * 20)
      state.oneGenreMovie = moviesFromGenre[randomNum]
    },
    generateMovies (state, movies) {
      state.movies = movies.results
      state.movies.forEach(function (element) {
        element.rate = 0
      })
    },
    generateGenres (state, genres) {
      state.genres = genres.genres
    },
    loadRow (state) {
      if (state.endMovie < 17) {
        state.endMovie += 4
      }
    }
  },
  actions: {
    generateMovies ({ commit }) {
      Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=5945a0abd9acd913047172b2e6571d3e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then(response => {
          commit('generateMovies', response.body)
        })
        .catch((error) => {
          console.log(error.statusText)
        })
    },
    generateGenres ({ commit }) {
      Vue.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=5945a0abd9acd913047172b2e6571d3e')
        .then(response => {
          commit('generateGenres', response.body)
        })
        .catch((error) => {
          console.log(error.statusText)
        })
    },
    genreMovie ({ commit }, genreId) {
      Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=5945a0abd9acd913047172b2e6571d3e&with_genres=' + genreId)
        .then(response => {
          commit('generateGenreMovie', response.body)
        })
        .catch((error) => {
          console.log(error.statusText)
        })
    }
  }
})
