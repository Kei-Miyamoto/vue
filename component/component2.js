Vue.component('item-desc',{
  props:{
    itemName: {
      type:String
    }
  },
  template:'<p>{{ itemName }}は便利です。</p>'
})
Vue.component('fruits-item-name',{
  props:{
    fruitsItem: {
      type:Object,
      required: true
    }
  },
  template:'<p>{{ fruitsItem.name }}</p>'
})

new Vue({
  el:'#app',
  data: { myItem:'pen' }
})
new Vue({
  el:'#fruits-component',
  data: {
    fruitsItems: [
      {name:'梨'},
      {name:'イチゴ'}
    ]
  }
})