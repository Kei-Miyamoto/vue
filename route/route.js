var getUsers = function(callback) {
  setTimeout(function(){
    callback(null,[{
        id:1,
        name:'Joddy America'
      },{
        id:2,
        name:'Kim Korea'
      }
    ])
  }, 1000)
}

var UserList = {
  template:'#user-list',
  data: function() {
    return{
      loading: false,
      users: function(){return[]},
      error:null
    }
  },
  created: function() {
    this.fetchData()
  },
  watch: {
    '$route':'fetchData'
  },
  methods:{
    fetchData: function(){
      this.loading = true;
      getUsers((function(err,users) {
      this.loading = false;
      if(err) {
      this.error = err.toString()
      }else {
      this.users = users
      }
      }).bind(this))
    }
  }
}

var router = new VueRouter({
  routes:[{
    path:'/top',
    component: {
      template:'<div>Thi is Top page</div>'
    }
  },
  {
    path:'/users',
    component: UserList
  },
  {
    path:'/user/:userId',
    name:'user',
    component: {
      template:'<div>User ID is {{ $route.params.userId }}</div>'
    }
  }
  ]
})



var app = new Vue({
  router: router
}).$mount('#app')