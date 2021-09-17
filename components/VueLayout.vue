<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'MyLayout'
}
</script>
