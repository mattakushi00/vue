<template>
  <section class="list">
    <div class="container">
      <div class="item"
           v-for="item of news"
           :key="item.id"
      >
        <h3 class="item__title">{{ item.title }}</h3>
        <the-button :class="!item.isOpen ? 'btn_active' : 'btn_warning'"
                    @click="openNews(item)"
        >
          {{item.isOpen ? 'Закрыть' : 'Открыть'}}</the-button>
        <the-button :class="'btn_danger'"
                    v-if="item.read"
                    @click="readAgain(item)"
        >
          Прочитать еще раз</the-button>
        <div class="item__content"
             v-if="item.isOpen"
        >
          <p class="item__text">{{ item.description }}</p>
          <the-button :class="'btn_danger'"
                      v-if="!item.read"
                      @click="readNews(item)"
          >
            Прочитать</the-button>
          <hr>
          <the-news-list></the-news-list>
        </div>

      </div>

    </div>
  </section>
</template>

<script>
import TheButton from './TheButton'
import TheNewsList from '@/components/TheNewsList'

export default {
  data () {
    return {}
  },
  props: {
    news: Array
  },
  methods: {
    openNews (item) {
      item.isOpen = !item.isOpen
      return item.isOpen ? this.$emit('open-news') : this.$emit('close-news')
    },

    readNews (item) {
      item.read = true
      item.isOpen = false
      this.$emit('close-news')
      this.$emit('read-news')
    },

    readAgain (item) {
      item.read = false
      this.$emit('read-again')
      if (!item.isOpen) {
        item.isOpen = true
        this.$emit('open-news')
      }
    }
  },
  components: {
    TheButton, TheNewsList
  }
}
</script>
