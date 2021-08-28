<template>
  <div class="bg-gray-100">
    <LayoutHeader />
    <div class="h-screen flex">
      <div class="w-1/2">
        <nuxt />
      </div>
      <div class="hidden lg:block relative w-0 flex-1">
        <img
          class="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
export default {
  name: 'LayoutAuth',
}
</script>
