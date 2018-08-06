<template>
  <div class="nav">
    Nav
    <button @click="handleClick">切换</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'nav'
    }
  },
  methods: {
    handleClick: function () {
      console.log('aaaaaaa')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
