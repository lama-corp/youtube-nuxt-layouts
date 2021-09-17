<template>
  <Content content="Page Keep Alive" />
</template>

<script>
export default {
  // https://nuxtjs.org/docs/2.x/features/nuxt-components#keep-alive
  name: 'PageKeepAlive',
  layout: 'keep-alive',
  // asyncData() {
  //   // eslint-disable-next-line no-console
  //   console.log('PageKeepAlive asyncData()')
  // },
  // fetch() {
  //   // eslint-disable-next-line no-console
  //   console.log('PageKeepAlive fetch()')
  // },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('PageKeepAlive mounted()!')
  },
}
</script>
