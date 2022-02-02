
<template>
  <div id="app">
  <headers v-if="!path.startsWith('/frame')"></headers>
    <router-view></router-view>
    
  </div>
</template>

<script>
import headers from '@/components/headers.vue'
export default {
  name: 'App',
  components:{headers},
  data(){
    return {
      path: this.$route.path
    }
  }
}
</script>

<style>
.app{
  height:100%
}
</style>
