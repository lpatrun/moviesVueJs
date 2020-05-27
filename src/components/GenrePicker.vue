<template>
  <div>
    <div class="genreContainer">
      <div class="genreGrid">
        <div class="form__radio-group" v-for="(genre, index) in genres" :key="index">
          <input type="radio" class="form__radio-input" name="genre-type" :value="genre.id" :id="genre.name" v-model="genreId"/>
          <label :for="genre.name" class="form__radio-label">
            <span class="form__radio-button"></span>
            {{ genre.name }}
          </label>
        </div>
        <button class="form__roll-button" @click="genreMovie">ROLL</button>
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
      genreId: 28
    }
  },
  computed: {
    genres () {
      return this.$store.state.genres
    }
  },
  components: {
    'my-return-button': ReturnButton
  },
  methods: {
    genreMovie () {
      this.$store.dispatch('genreMovie', this.genreId)
    }
  }
}
</script>
