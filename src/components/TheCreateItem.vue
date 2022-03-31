<template>
  <div class="create">
    <form class="form">
      <input v-for="(key, value) in schema.name"
             :name="`name_${value}`"
             :key="value"
             :placeholder="value"
      >
      <input type="text"
             v-for="(key, value) in schema.theme"
             :name="value"
             :key="value"
             :placeholder="value"
      >
    </form>
    <button @click="$emit('createItem')">Создать новый item</button>
  </div>
</template>

<script>
export default {
  emits: ['createItem'],
  props: ['schema']
}
</script>
