<template>
  <div class="avatar">
    <img class="avatar__img"
         alt="avatar"
         :src="item.value"
    >
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style scoped>

</style>
