
var router = new VueRouter({
  routes:[{
    path:'/top',
    component: {
      template:'<div>Thi is Top page</div>'
    }
  },
  {
    path:'/users',
    component: {
      template:'<div>Thi is User page</div>'
    }
  }

  ]
})

var app = new Vue({
  router: router
}).$mount('#app')