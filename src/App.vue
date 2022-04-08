<template>
  <the-create-item :schema="schema"
                   @addOne="addItem($event)"
  />
  <the-list :list="list"
            @addList="getBd()"
  />
  <p></p>
</template>

<script>
import TheList
  from '@/components/TheList'
import TheCreateItem
  from '@/components/TheCreateItem'

export default {
  data () {
    return {
      list: [],
      schema: {},
      lal: 1
    }
  },
  methods: {
    async getBd () {
      const response = await fetch('http://localhost:5000/api/main')
      const bd = await response.json()
      this.list = bd.list
      this.schema = bd.schema
    },

    async addItem ({ target }) {
      await fetch('http://localhost:5000/api/create', {
        method: 'post',
        body: new FormData(target)
      })

      await this.getBd()
    }

  },
  mounted () {
    this.getBd()
  },
  components: {
    TheList,
    TheCreateItem
  }
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
