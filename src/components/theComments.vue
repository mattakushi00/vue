<template>
  <div class="card comments">
    <button v-if="!bd" @click="$emit('loadBd')">загрузить бд</button>
    <div class="comment" v-for="item of bd" :key="item._id">
      <p class="name">{{item.name.ru}}</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['loadBd'],
  props: ['bd']
}
</script>

<style scoped>

</style>
