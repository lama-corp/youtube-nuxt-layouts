<template>
  <div>
    <Content content="Page function" />
  </div>
</template>

<script>
export default {
  name: 'PageFunction',
  layout({ store }) {
    // eslint-disable-next-line no-console
    console.log('In layout()', store.state.layouts.data.title)
    const date = new Date()

    return date.getDate() === 30 ? 'fish' : 'default'
  },
  // Ici on peut récupérer de la data
  asyncData() {
    // eslint-disable-next-line no-console
    console.log('In asyncData()')
    return {}
  },
  data() {
    return {
      key: 'value'
    }
  }
}
</script>
