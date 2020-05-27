<template>
  <div>
    <div class="mySingle">
      <div class="mySingle__image" :alt="movie.title">
          <img :src ="'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path" :alt="movie.title" />
      </div>
      <div class="mySingle__title">{{movie.title}} - {{movie.release_date}}</div>
      <div class="mySingle__stars" :data-itemid="movie.id">
        <span id="1" @click="saveStar($event)" :style= "[rate >= 1 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="2" @click="saveStar($event)" :style= "[rate >= 2 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="3" @click="saveStar($event)" :style= "[rate >= 3 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="4" @click="saveStar($event)" :style= "[rate >= 4 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="5" @click="saveStar($event)" :style= "[rate >= 5 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="6" @click="saveStar($event)" :style= "[rate >= 6 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="7" @click="saveStar($event)" :style= "[rate >= 7 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="8" @click="saveStar($event)" :style= "[rate >= 8 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="9" @click="saveStar($event)" :style= "[rate >= 9 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
        <span id="10" @click="saveStar($event)" :style= "[rate >= 10 ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
      </div>
      <div class="mySingle__overview"><strong>Overview</strong>: {{movie.overview}}</div>
      <div class="mySingle__container">
          <div class="category category--rating">Rating:</div>
          <div class="data data--rating">{{movie.vote_average}}</div>
          <div class="category category--pop">Popularity:</div>
          <div class="data data--pop">{{movie.popularity}}</div>
          <div class="category category--lang">Language:</div>
          <div class="data data--lang">{{movie.original_language}}</div>
      </div>
    </div>
    <my-return-button></my-return-button>
  </div>
</template>

<script>
import ReturnButton from './ReturnButton'
export default {
  data () {
    return {
      movie: {},
      rate: 0
    }
  },
  created () {
    this.movie = this.$store.state.singleMovie
    this.rate = this.$store.state.singleMovie.rate
  },
  methods: {
    saveStar (event) {
      const oldRate = parseInt(this.rate)
      const rating = parseInt(event.currentTarget.id)
      if (oldRate === 1 && rating === 1) {
        this.rate = 0
      } else {
        this.rate = rating
      }
      this.$store.commit('saveStar', this.rate)
    }
  },
  components: {
    'my-return-button': ReturnButton
  }
}
</script>
