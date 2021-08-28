<template>
  <Content content="On change le titre au bout de 3 secondes !" />
</template>

<script>
export default {
  name: 'PageData',
  layout: 'data',
  // Idéalement, passer par async Data
  mounted() {
    setTimeout(() => {
      this.$store.commit('layouts/setDataTitle', '🦙🦙🦙🦙🦙🦙🦙🦙🦙')
    }, 3000)
  },
  // Si besoin de reset la donnée
  // beforeDestroy() {
  //   this.$store.commit('layouts/resetDataTitle')
  // },
}
</script>
