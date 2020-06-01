import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    element: 0,
    movies: {},
    moviesToDisplay: [],
    startingMovie: 0,
    endingMovie: 0,
    singleMovie: {},
    genres: {},
    selectedIndex: 0
  },
  mutations: {
    saveStar (state, rating) {
      state.movies[state.selectedIndex].rate = parseInt(rating)
    },
    generateGenreMovie (state, moviesFromGenre) {
      const randomNum = Math.floor(Math.random() * 20)
      const obj = state.movies.find(o => parseInt(o.id) === moviesFromGenre.results[randomNum].id)
      if (obj) {
        const objIndex = state.movies.findIndex(o => parseInt(o.id) === moviesFromGenre.results[randomNum].id)
        state.selectedIndex = objIndex
        state.singleMovie = obj
      } else {
        state.selectedIndex = state.movies.length
        state.movies.push(moviesFromGenre.results[randomNum])
        state.movies[state.selectedIndex].rate = 0
        state.singleMovie = state.movies[state.selectedIndex]
      }
    },
    selectMovie (state, index) {
      state.singleMovie = state.movies[index]
      state.selectedIndex = index
    },
    generateMovies (state, movies) {
      state.movies = movies.results
      state.movies.forEach(function (element) {
        element.rate = 0
      })
    },
    moviesToDisplay (state) {
      if (state.endingMovie + 4 <= 20) {
        state.endingMovie += 4
        for (state.startingMovie; state.startingMovie < state.endingMovie; state.startingMovie++) {
          state.moviesToDisplay.push(state.movies[state.startingMovie])
        }
      }
    },
    generateGenres (state, genres) {
      state.genres = genres.genres
    }
  },
  actions: {
    generateMovies ({ commit }) {
      Vue.http.get('https://api.themoviedb.org/3/discover/movie?api_key=5945a0abd9acd913047172b2e6571d3e&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
        .then(response => {
          commit('generateMovies', response.body)
          commit('moviesToDisplay')
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
