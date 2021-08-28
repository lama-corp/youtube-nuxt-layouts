<template>
  <Content content="Keep Alive 2" />
</template>

<script>
export default {
  name: 'PageKeepAlive2',
  layout: 'keep-alive',
  mounted() {
    console.log('PageKeepAlive 2 mounted()!')
  },
}
</script>
