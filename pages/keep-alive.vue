<template>
  <Content content="Page Keep Alive" />
</template>

<script>
export default {
  // https://nuxtjs.org/docs/2.x/features/nuxt-components#keep-alive
  name: 'PageKeepAlive',
  layout: 'keep-alive',
  asyncData() {
    console.log('PageKeepAlive asyncData()')
  },
  mounted() {
    console.log('PageKeepAlive mounted()!')
  },
}
</script>
