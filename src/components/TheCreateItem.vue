<template>
  <form class="form"
        @submit.prevent="test($event)"
  >
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
    <button>Добавить</button>
  </form>
</template>

<script>
export default {
  emits: ['addOne'],
  props: ['schema'],
  methods: {
    test (event) {
      this.$emit('addOne', event)
    }
  }
}
</script>
