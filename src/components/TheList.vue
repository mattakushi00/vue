<template>
  <div class="list">
    <div class="list__item"
         v-for="item of list"
         :key="item._id"
    >{{item.name.ru}}</div>
    <button @click="addList()">Загрузить бд</button>
  </div>
</template>

<script>
export default {
  emits: ['addList'],
  props: {
    list: Array
  },
  methods: {
    addList () {
      this.$emit('addList')
    }
  }
}
</script>

<style scoped>

</style>
