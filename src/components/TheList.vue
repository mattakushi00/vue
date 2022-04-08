<template>
  <div class="list">
    <div class="list__item"
         v-for="(item) of list"
         :key="item._id"
    >
      <p v-for="(prop, val) in item.name"
         :key="val"
      ><b>{{val}}</b>: {{prop}}</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['addList'],
  props: {
    list: Array
  }
}
</script>

<style scoped>
.list__item {
  border: 1px solid #ccc;
  padding: 15px;
  margin: 15px;
}
</style>
