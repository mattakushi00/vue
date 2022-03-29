<template>
  <header class="header">
    <div class="container container_center">
      <h1 class="title">{{ title }} {{nowDate}}</h1>
      <p class="counter">Открыто новостей: {{openCounter}}</p>
      <p class="counter">Прочитано новостей: {{readCounter}}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    openCounter: Number,
    readCounter: Number
  },
  data () {
    return {
      title: 'Новости',
      nowDate: new Date().toLocaleDateString()
    }
  }
}
</script>
