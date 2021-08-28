<template>
  <div>
    <Content content="Page about" />
  </div>
</template>

<script>
export default {
  name: 'PageFunction',
  layout() {
    // eslint-disable-next-line no-console
    console.log('In layout()')
    const date = new Date()

    return date.getDate() === 1 ? 'fish' : 'default'
  },
  // Ici on peut récupérer de la data
  asyncData() {
    // eslint-disable-next-line no-console
    console.log('In asyncData()')
    return {}
  },
}
</script>
