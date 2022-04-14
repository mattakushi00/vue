<template>
  <div class="wrap">
    <theSet :types="types"
            @newData=addToArray
    />
    <theResume :types="types"
               :data="userData"/>
    <theComments/>
  </div>
</template>

<script>
import theComments from '@/components/theComments'
import theResume from '@/components/theResume'
import theSet from '@/components/theSet'

export default {
  data () {
    return {
      types: [
        { type: 'Заголовок', components: 'theTitle' },
        { type: 'Аватар', components: 'theAvatar' },
        { type: 'Подзаголовок', components: 'theSubtitle' },
        { type: 'Текст', components: 'theText' }
      ],
      userData: []
    }
  },
  methods: {
    addToArray (data) {
      this.userData.push(data)
    }
  },
  components: {
    theComments,
    theResume,
    theSet
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

input, textarea, select, img, button, div, p, header, footer, aside {
  display: block;
  width: 100%;
}

body {
  background-color: #f3f3f3;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  gap: 15px;
  margin: 0 auto;
}

.card {
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  background-color: #fff;
  border-radius: 10px;
}

.set {
  max-width: 300px;
}

.set__item {
  padding: 5px;
  margin: 10px 0;
}

.resume {
  max-width: 650px;
}

.resume__subtitle {
  border-bottom: 1px solid #ccc;
}

.avatar {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #ccc;
  overflow: hidden;
}

.avatar__img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center;
}
</style>
