<template>
  <div class="home page">
    <header class="home__header">
      <div class="container">
        <div class="home__header-wrapper">
          <h1 class="home__title">
            The Rick and Morty Characters
          </h1>
        </div>
      </div>
    </header>
    <section class="home__cards">
      <div class="container">
        <div
          v-if="characters"
          ref="grid"
          class="home__grid"
        >
          <div
            v-for="item in characters"
            :key="item.id"
          >
            <character-card
              v-bind="item"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { loadingDistance } from '../constants'
import characterCard from '~/components/character-card'

export default {
  name: 'Home',

  components: {
    characterCard
  },

  scrollToTop: false,

  computed: {
    characters () {
      return this.$store.state.characters
    },

    nextApiUrl () {
      return this.$store.state.nextApiUrl
    },

    isLoading () {
      return this.$store.state.isLoading
    }
  },

  mounted () {
    if (!this.$store.state.characters.length) {
      this.$store.dispatch('getCharacters')
    }

    window.addEventListener('scroll', this.scrollHandler)
  },

  destroyed () {
    window.removeEventListener('scroll', this.scrollHandler)
  },

  methods: {
    scrollHandler () {
      if (!this.isLoading) {
        if ((this.$refs.grid.getBoundingClientRect().bottom - window.innerHeight) < loadingDistance) {
          if (this.nextApiUrl) {
            this.$store.dispatch('getCharacters')
          } else {
            window.removeEventListener('scroll', this.scrollHandler)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
.home {
  &__header {
    background: url('~assets/images/bg.svg') no-repeat 50% 100% / auto;
  }

  &__header-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 400px;
    padding: 24px 0;
    text-align: center;
  }

  &__title {
    font-size: 30px;
    line-height: 1.2;

    @media (min-width: $mobile-breakpoint) {
      font-size: 50px;
    }
  }

  &__cards {
    background-color: $color-gray;
  }

  &__grid {
    padding: 24px 0;
    display: grid;
    grid-template-columns: auto;
    grid-gap: 24px;
    justify-content: center;

    @media (min-width: $mobile-breakpoint) {
      grid-template-columns: repeat(auto-fit, 300px);
    }
  }
}
</style>
