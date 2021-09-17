<template>
  <div class="bg-gray-100 min-h-screen">
    <LayoutHeader :title="layoutTitle" />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'LayoutData',
  computed: {
    ...mapState({
      layoutTitle: (state) => state.layouts.data.title,
    }),
  },
}
</script>
