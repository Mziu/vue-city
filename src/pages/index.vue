<template>
  <div>
    <div ref="address">{{ data.country + data.city + data.area}}</div>
    <!-- <div>{{ country + citys + areas}}</div> -->
    <div v-if="actived == true">
      <select ref="sel1" @change="demo" v-model="data.country">
      <option :value="cty.name" v-for="cty in city">{{cty.name}}</option>
      </select>
      <select ref="sel2" @change="demo2" v-model="data.city">
        <option  :value="cty.name" v-for="cty in selection" >{{cty.name}}</option>
      </select>
      <select v-model="data.area" ref="sel3" @change="demo3">
        <option :value="cty" v-for="cty in selection2">{{cty}}</option>
      </select>
    </div>
    
    <button @click="ok" v-if="actived == true">OK</button>
    <button @click="indexof" v-if="actived == false">edit</button>
    <!-- <div ref="address">{{country}}{{citys}}{{areas}}</div> -->
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
      selected2: 0,
      selected3: 0,
      actived: false,
      country: '1',
      citys: '1',
      areas: '1',
      address: '',
      data: {
        country: '辽宁',
        city: '辽阳',
        area: '文圣区',
        street: '丹巴路1238号恩瓦德大厦1700层(来墨？)'
      }
    }
  },
  methods: {
    demo () {
      // 获取第一个select 选择的索引 返回给变量selected
      this.selected = this.$refs.sel1.selectedIndex
      this.selected2 = 0 // 防止选择第一类,第二类下标不存在报错
      this.data.country = this.city[this.selected].name
      this.data.city = ''
      this.data.area = ''
      this.$refs.sel2.selectedIndex = 0
    },
    demo2 () {
      // 获取第二个select 选择的索引 返回给变量selected2
      this.selected2 = this.$refs.sel2.selectedIndex
      this.data.city = this.city[this.selected].city[this.selected2].name
      this.data.area = ''
    },
    demo3 () {
      // 获取第三个select 选择的索引 返回给变量selected3
      this.selected3 = this.$refs.sel3.selectedIndex
      this.data.area = this.city[this.selected].city[this.selected2].area[this.selected3]
    },
    check (d) {
      return d === '' || d === undefined
    },
    ok () {
      let arr = [this.data.country, this.data.city, this.data.area]
      console.log(arr)
      let a = arr.some(this.check) // 依次检查每个元素是否满足check函数的判断，如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测
      if (a === true) {
        console.log('please input address')
      } else {
        this.$refs.address.innerHTML = this.data.country + this.data.city + this.data.area // 赋值
        this.actived = false
      }
    },
    matchcity () {

    },
    indexof () { // 第一次匹配
      this.actived = true
      let a = []
      for (let i = 0; i < c.length; i++) {
        a.push(c[i].name) // 把数组里面的城市拿出来添加到空数组a里面
      }
      console.log(a)
      this.selected = a.indexOf(this.data.country) // 在数组a中查找拿到的courtry并且返回首次出现的位置

      let a2 = []
      for (let i = 0; i < this.city[this.selected].city.length; i++) {
        a2.push(this.city[this.selected].city[i].name) // 把数组里面的城市拿出来添加到空数组a里面
      }
      console.log(a2)
      this.selected2 = a2.indexOf(this.data.city)

      let a3 = []
      for (let i = 0; i < this.city[this.selected].city[this.selected2].area.length; i++) {
        a3.push(this.city[this.selected].city[this.selected2].area[i]) // 把数组里面的城市拿出来添加到空数组a里面
      }
      console.log(a3)
      this.selected3 = a3.indexOf(this.data.area)
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
<style>

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
