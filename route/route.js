var userData = [
  {
    id:1,
    name:'Joddy America',
    description:'I work as engineer in America'
  },
  {
    id:2,
    name:'Kim Korea',
    description:'I am eingneer, My hobby is football'
  }
]

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

var getUser = function(userId,callback) {
  setTimeout(function(){
    var filteredUsers = userData.filter(function (user) {
      return user.id === parselnt(userId,10)
    })
    callback(null, filteredUsers && filteredUsers[0])
  }, 1000)
}

var postUser= function(params,callback) {
  setTimeout(function() {
    params.id = userData.length + 1
    userData.pish(params)
    callback(null,params)
  },1000)
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
      this.loading = true
      getUsers((function(err,users) {
      this.loading = false
      if(err) {
      this.error = err.toString()
      }else {
      this.users = users
      }
      }).bind(this))
    }
  }
}

var UserDetail = {
  template: '#user-detail',
  data: function() {
    return {
      loading: false,
      user: null,
      error: null,
    }
  },
  created: function () {
    this.fetchData()
  },
  watch:{
    '$route':'fetchData'
  },
  methods: {
    fetchData: function() {
      this.loading = true
      getUser(this.$route.params.userId,(function(err,user) {
        this.loading = false
        if(err) {
        this.error = err.toString()
        }else {
        this.user = user
        }
      }).bind(this))
    }
  }
}



var UserCreate = {
  template:'#user-create',
  data: function() {
    return{
      sending: false,
      user: this.defaultUser(),
      error: null
    }
  },
  created: function() {
    
  },
  methods: {
    defaultUser: function() {
      return{
        name: "",
        description: ""
      }
    },
    createUser: function(){
      if(this.user.name.trim() === '') {
        this.error = 'Name is required'
        return
      }
      if(this.user.description.trim() === '') {
        this.error = 'Description is required'
        return
      }
      postUser(this.user,(function(err,user) {
        this.sending = false
        if(err) {
          this.error = err.toString()
        }else {
          this.error = null
          this.user = this.defaultUser()
          alert('Created new user')
          this.$route.push('/users')
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
    path:'/users/new',
    component:UserCreate
  },
  {
    path:'/users/:userId',
    component: UserDetail
  }
  ]
})



var app = new Vue({
  router: router
}).$mount('#app')