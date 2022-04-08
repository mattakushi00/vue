<template>
  <div class="create">
    <form class="form"
          @submit.prevent="addItem()"
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
  </div>
</template>

<script>
export default {
  emits: ['createItem'],
  props: ['schema'],
  methods: {
    async addItem () {
      console.log(this.schema)
      /*
      const response = await fetch('localhost:5000/api/create', {
        method: 'post',
        body: new FormData(document.querySelector('.form'))
      })
*/
    }
  }
}
</script>
