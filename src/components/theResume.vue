<template>
  <div class="card resume">
    <component v-for="item of data"
               :key="item.value"
               :is="targetComponents(item.type)"
               :item="item"
    ></component>
  </div>
</template>

<script>
import theText from '@/components/resume/theText'
import theTitle from '@/components/resume/theTitle'
import theAvatar from '@/components/resume/theAvatar'
import theSubtitle from '@/components/resume/theSubtitle'

export default {
  props: ['data', 'types'],
  components: {
    theTitle,
    theAvatar,
    theSubtitle,
    theText
  },
  methods: {
    targetComponents (item) {
      for (let i = 0; i < this.types.length; i++) {
        if (this.types[i].type === item) {
          return this.types[i].components
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
