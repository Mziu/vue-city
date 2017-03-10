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
   	<span>Selected: {{ selected }}</span>
  </div>
</template>

<script>
import c from '../components/ChineseCities.json'
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
    getText (d) {
      console.log(d)
    },
    demo () {
      this.selected = this.$refs.sel1.selectedIndex
    },
    demo2 () {
      this.selected2 = this.$refs.sel2.selectedIndex
    }
  },
  computed: {
    selection: function () {
      return this.city[this.selected].city
    },
    selection2: function () {
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
