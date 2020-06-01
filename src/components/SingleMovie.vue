<template>
  <div>
    <div class="mySingle">
      <div class="mySingle__image" :alt="movie.title">
          <img :src ="'https://image.tmdb.org/t/p/w780/' + movie.backdrop_path" :alt="movie.title" />
      </div>
      <div class="mySingle__title">{{movie.title}} - {{movie.release_date}}</div>
      <div class="mySingle__stars" :data-itemid="movie.id">
        <span v-for="i in 10" :key="i" :id="i" @click="saveStar" :style= "[rate >= i ? {'color': 'orange'} : {'color': 'black'}]">☆</span>
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
      rate: 0
    }
  },
  created () {
    this.rate = this.$store.state.singleMovie.rate
  },
  computed: {
    movie () {
      return this.$store.state.singleMovie
    }
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

<style lang="scss" scoped>
.mySingle {
  display: grid;
  grid-template-columns: 45vw 35vw;
  grid-template-rows: repeat(2, min-content) 2fr 1fr;
  width: 80vw;
  margin: 5vh auto;
  box-shadow: 2px 2px 16px rgba(0,0,0,.9);

  @media only screen and (max-width: 900px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    width: 80vw;
    margin: 5vh auto;
    box-shadow: 2px 2px 16px rgba(0,0,0,.9);
  }
  &__image {
    grid-row: 1 / -1;
    grid-column: 1 / 2;

    @media only screen and (max-width: 900px) {
      grid-row: 1 / 2;
      grid-column: 1 / -1;
    }

    img {
      width: 45vw;
      height: 100%;
      object-fit:cover;

      @media only screen and (max-width: 900px) {
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
    }
  }

  &__title {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    padding: 1rem 1rem 0 1rem;
    font-size: 2.4rem;

    @media only screen and (max-width: 900px) {
      grid-row: 2 / 3;
      grid-column: 1 / -1;
    }
  }

  &__stars {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    font-size: 4rem;
    padding: 0 1rem 1rem 1rem;
    cursor: pointer;

    @media only screen and (max-width: 900px) {
      font-size: 3rem;
      grid-row: 3 / 4;
      grid-column: 1 / -1;
    }
  }

  &__overview {
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    padding: 1rem;
    font-size: 1.6rem;

    @media only screen and (max-width: 900px) {
      grid-row: 4 / 5;
      grid-column: 1 / -1;
    }
  }

  &__container {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
    padding: 1rem;
    margin-bottom: 2rem;
    text-align: center;

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    @media only screen and (max-width: 900px) {
      grid-row: 5 / 6;
      grid-column: 1 / -1;
    }
  }
}

.category {
  grid-row: 1 / 2;
  font-size: 1.8rem;
}

.data {
  grid-row: 2 / 3;
  font-size: 3.2rem;
}
</style>
