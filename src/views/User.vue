<template>
  <div>
    <h1>This is {{ $route.params.username }}'s page</h1>
  </div>
</template>

<script>
export default {
  props: ['userLastName']
}
</script>

<style lang="scss" scoped></style>
