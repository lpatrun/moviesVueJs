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
        <router-link to="/genre-movie" tag="button" class="form__roll-button" @click.native="genreMovie">ROLL</router-link>
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

<style lang="scss" scoped>

.genreContainer {
  display: grid;
  grid-template-columns: [left-clear-space] 1fr [content-space-start] 3fr [content-space-end] 1fr [right-clear-space];
  margin: 5rem 0rem;
}

@media only screen and (max-width: 900px) {
  .genreContainer {
    grid-template-columns: [left-clear-space] 1fr [content-space-start] 8fr [content-space-end] 1fr [right-clear-space];
    margin: 3rem 0rem;
  }
}

.genreGrid {
  grid-column: content-space-start/content-space-end;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.3rem;

  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}

.form {

  &__radio-group {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.7);
    padding: 15px;
    width: 100%;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.4);
      padding: 10px;
      display: flex;
    }
  }

  &__radio-input {
    display: none;
  }

  &__radio-label {
    font-size: 16px;
    cursor: pointer;
    position: relative;
    padding-left: 35px;

    @media only screen and (max-width: 900px) {
      font-size: 14px;
      padding-left: 35px;
    }
  }

  &__radio-button {
    height: 15px;
    width: 15px;
    border: 5px solid firebrick;
    border-radius: 50rem;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: -2px;

    @media only screen and (max-width: 900px) {
      height: 10px;
      width: 10px;
      top: 0px;
    }

    &::after {
      content: "";
      display: block;
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: firebrick;
      opacity: 0;
      transition: opacity .15s;

      @media only screen and (max-width: 900px) {
        height: .8rem;
        width: .8rem;
      }
    }
  }

  &__radio-input:checked ~ &__radio-label &__radio-button::after{
        opacity: 1;
    }

  &__roll-button {
    grid-column: 2 / 4;
    background-color: firebrick;
    box-shadow: 2px 2px 3px rgba(0,0,0,.6);
    color: #ededed;
    font-size: 3rem;
    cursor: pointer;
    height: 5rem;
    outline: none;
    border: none;

    @media only screen and (max-width: 900px) {
      grid-column: 1/-1;
    }

    &:active {
      transform: translateY(3px);
      box-shadow: 2px 2px 3px rgba(0,0,0,.6);
    }
  }
}

</style>
