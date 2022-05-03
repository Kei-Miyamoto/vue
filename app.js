
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
  },
  filters: {
    numberWithDelimiter : function(value) {
      if(!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g,'$1,')
    }
  },
  methods: {
    doBuy: function() {
      alert(this.totalPriceWithTax + '円のお買い上げ！')
      this.items.forEach(function(item) {
        item.quantity = 0
      })
    },
    
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
    },
    canBuy: function() {
      return this.totalPrice >= 1000
    },
    errorMsgStyle: function(){
      return {
        border : this.canBuy ? '1px solid blue': '1px solid red',
        color : this.canBuy ? 'black': 'red'
      }
    }
  },
})
