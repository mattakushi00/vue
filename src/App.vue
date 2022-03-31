<template>
  <the-create-item :schema="schema"
                   @createItem="createItem()"
  />

  <the-list :list="list"
            @addList="getBd()"
  />
</template>

<script>
import TheList from '@/components/TheList'
import TheCreateItem from '@/components/TheCreateItem'

export default {
  data () {
    return {
      list: [],
      schema: {}
    }
  },
  methods: {
    async getBd () {
      const response = await fetch('http://localhost:5000/api/main')
      const bd = await response.json()
      this.list = bd.list
    },
    async createItem () {
      const response = await fetch('http://localhost:5000/api/main')
      const bd = await response.json()
      this.schema = bd.schema
      console.log(bd)
    }
  },
  components: { TheList, TheCreateItem }
}
</script>

<style>
button {
  margin: 10px;
}

.list,
.create {
  padding: 10px;
  border: 1px solid #ccc;
  margin: 10px 0;
}
</style>
