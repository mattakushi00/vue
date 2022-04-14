<template>
  <div class="set card">
    <select class="set__item"
            v-model="type"
    >
      <option v-for="item of types"
              :key="item.type"
      >{{ item.type }}
      </option>
    </select>
    <textarea class="set__item"
              v-model="value"
    ></textarea>
    <button class="set__item"
            @click="addData($emit)"
            :disabled="this.value < 4"
    >Добавить
    </button>
  </div>
</template>

<script>
export default {
  emits: ['newData'],
  props: ['types'],
  data () {
    return {
      type: this.types[0].type,
      value: ''
    }
  },
  methods: {
    addData (emit) {
      emit('newData', {
        type: this.type,
        value: this.value
      })
      this.type = this.types[0].type
      this.value = ''
    }
  }
}
</script>

<style scoped>

</style>
