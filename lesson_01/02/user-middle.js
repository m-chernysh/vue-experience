Vue.component('user-middle', {
  template: `
    <div class="card m-4 box-shadow">
        <div class="card-header">
            <h4>{{user.name}}</h4>
        </div>
        <div class="card-body">
            <address>
                <strong>{{user.username}}</strong>
                <br>
                <abbr title="Phone">P:</abbr> {{user.phone}}
                <br>
                <a href="mailto:#">{{user.email}}</a>
            </address>
        </div>
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