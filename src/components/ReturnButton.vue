<template>
    <div>
        <button class="button button__back" @click="returnHome">&#8592;</button>
    </div>
</template>

<script>
export default {
  methods: {
    returnHome () {
      this.$store.commit('returnHome')
    }
  }
}
</script>
