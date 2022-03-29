<template>
  <ul>
    <li v-for="item of news" :key="item.id">{{item.title}}</li>
  </ul>
</template>

<script>
export default {
  inject: ['news']
}
</script>
