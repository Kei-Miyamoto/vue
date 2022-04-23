
var items = [{
  name: '鉛筆',
  price: 300,
  quantity: 0
},{
  name: 'ノート',
  price: 400,
  quantity: 0
},{
  name: '消しゴム',
  price: 500,
  quantity: 0
}]

var vm = new Vue ({
  el:'#app',
  data: {
    items : items,
    canBuy: false
  },
  filters: {
    numberWithDelimiter : function(value) {
      if(!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
    }
  },
  computed: {
    totalPrice: function() {
      if(this.items[0].quantity !== 0) {
        return this.items[0].price * this.items[0].quantity
      }else {
        return 0;
      }
    },
    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.1)
    }
  }
})

vm.$watch(function() {
  return this.items[0].quantity
},function(quantity) {
  console.log(quantity)
})