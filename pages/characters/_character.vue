<template>
  <div
    v-if="character"
    class="character page"
  >
    <div class="container">
      <div class="character__wrapper">
        <div class="character__left">
          <img
            class="character__img"
            :src="character.image"
            :alt="`image of ${character.name}`"
          >
        </div>
        <div class="character__right">
          <h1 class="character__name">
            {{ character.name }}
          </h1>
          <div class="character__gender">
            <span class="character__field">Gender:</span>
            {{ character.gender }}
          </div>
          <div class="character__status">
            <span class="character__field">Status:</span>
            {{ character.status }}
          </div>
          <div class="character__location">
            <span class="character__field">Location:</span>
            {{ character.location }}
          </div>
        </div>
      </div>

      <a
        href="#"
        class="character__back"
        @click="goBack"
      >
        Назад
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Character',

  computed: {
    character () {
      return this.$store.state.currentCharacter
    }
  },

  mounted () {
    this.$store.dispatch('getCurrentCharacter', this.$route.params.character)
  },

  methods: {
    goBack (event) {
      event.preventDefault()
      this.$router.back()
    }
  }
}
</script>

<style lang="scss">
.character {
  padding: 24px 0;
  background-color: $color-dark-gray;
  color: $color-white;

  &__title {
    margin-bottom: 24px;
  }

  &__wrapper {
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    background-color: $color-gray;
    border-radius: 16px;
    overflow: hidden;

    @media (min-width: $mobile-breakpoint) {
      flex-direction: row;
    }
  }

  &__left {
    flex: 0;

    @media (min-width: $mobile-breakpoint) {
      flex: 0 0 300px;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__right {
    flex-grow: 1;
    padding: 24px 24px 24px 16px;
  }

  &__name {
    margin-bottom: 8px;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
  }

  &__gender {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.2;
  }

  &__status {
    margin-bottom: 8px;
    font-size: 18px;
    line-height: 1.2;
  }

  &__location {
    font-size: 18px;
    line-height: 1.2;
  }

  &__field {
    color: $color-light-gray;
  }

  &__back {
    color: $color-white;

    &:hover {
      color: $color-orange;
    }
  }
}
</style>
