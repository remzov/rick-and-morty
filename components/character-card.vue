<template>
  <nuxt-link
    class="character-card"
    :to="{name: 'characters-character', params: {character: id}}"
  >
    <div class="character-card__img-wrapper">
      <img class="character-card__img" :src="image" :alt="`image of ${name}`">
    </div>
    <span class="character-card__name">
      {{ name }}
    </span>
  </nuxt-link>
</template>

<script>
export default {
  name: 'CharacterCard',

  props: {
    id: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    image: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.character-card {
  display: block;
  height: 100%;
  background-color: $color-light-gray;
  text-decoration: none;
  border-radius: 16px;
  overflow: hidden;
  animation: appearing 0.3s ease-out;

  &__img-wrapper {
    height: 300px;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    padding: 24px;
    display: block;
    color: $color-white;
  }

  &:hover {
    .character-card__name {
      color: $color-orange;
    }
  }

  @keyframes appearing {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
}
</style>
