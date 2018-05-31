Vue.component('user-lite', {
  template: `
     <div class="m-4 box-shadow">
        <address>
            <strong>{{user.username}}</strong>
            <br>
            <a href="mailto:#">{{user.email}}</a>
        </address>
     </div>
  `,
  props: {
    user: Object
  },
  data: function () {
    return {
      bg: 'bg-warning'
    }
  }
});