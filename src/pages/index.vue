<template>
  <div>
    <select ref="sel1" @change="demo">
      <option :value="cty.value" v-for="cty in city">{{cty.name}}</option>
    </select>
  <select ref="sel2" @change="demo2">
      <option  :value="cty.value" v-for="cty in selection" >{{cty.name}}</option>
    </select>
    <select>
      <option :value="cty.value" v-for="cty in selection2">{{cty}}</option>
    </select>
  </div>
</template>

<script>
import c from '../components/ChineseCities.json' // 引入城市json文件命名为c
export default {
  name: 'hello',
  components: {
    c
  },
  data () {
    return {
      city: c,
      selected: 0,
      selected2: 0
    }
  },
  methods: {
    demo () {
      // 获取第一个select 选择的索引 返回给变量selected
      this.selected = this.$refs.sel1.selectedIndex
    },
    demo2 () {
      // 获取第二个select 选择的索引 返回给变量selected2
      this.selected2 = this.$refs.sel2.selectedIndex
    }
  },
  computed: {
    selection: function () {
      // 返回一级分类选择所对应的二级分类
      return this.city[this.selected].city
    },
    selection2: function () {
      // 返回一级分类和二级分类选择对应的三级分类
      return this.city[this.selected].city[this.selected2].area
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
