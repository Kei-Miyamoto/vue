

Vue.component('fruits-list-title',{
  template:'<h1>フルーツ一覧</h1>',
})
Vue.component('fruits-list-description',{
  template:'<p>季節の代表的なフルーツの一覧です</p>',
})
Vue.component('simpla-counter', {
  template:'<h1>フルーツ一覧</h1>',
  data: function() {
    return {
      fruits:['りんご','みかん']
    }
  }
})
Vue.component('fruits-list-table',{
  template:`
  <table>
    <thead>
      <tr>
        <th>季節</th>
        <th>フルーツ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>春</t>
        <td>いちご</td>
      </tr>
      <tr>
        <td>夏</td>
        <td>スイカ</td>
      </tr>
      <tr>
        <td>秋</td>
        <td>ぶどう</td>
      </tr>
      <tr>
        <td>冬</td>
        <td>みかん</td>
      </tr>
    </tbody>
  </table>
  `,
})

new Vue({
  el:'#fruits-list'
})
// var FruitsListTitle = Vue.extend({
//   template:'<h1>フルーツ一覧</h1>',
// })
// new FruitsListTitle().$mount('#fruits-list')


