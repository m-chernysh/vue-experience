var templateLite = `
     <div class="m-4 box-shadow">
        <address>
            <strong>{{user.username}}</strong>
            <br>
            <a href="mailto:#">{{user.email}}</a>
        </address>
     </div>
`;

var templateMiddle = `
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
`;

var templateHeight = `
    <div class="card m-4 box-shadow">
        <div class="card-header">
            <h4>{{user.name}}</h4>
        </div>
        <div class="card-body">
            <address v-if="user.address">
                <strong>{{user.address.city}}</strong><br>
                {{user.address.zipcode}}, Suite {{user.address.suite}}<br>
                {{user.address.street}}
            </address>
            <address>
                <strong>{{user.username}}</strong>
                <br>
                <abbr title="Phone">P:</abbr> {{user.phone}}
                <br>
                <a href="mailto:#">{{user.email}}</a>
            </address>
        </div>
    </div>
`;

var component = {
  props: {
    user: Object
  },
  data: function () {
    return {
      bg: 'bg-warning'
    }
  }
};

Vue.component('user-lite', Object.assign({}, component, {template: templateLite}));
Vue.component('user-middle', Object.assign({}, component, {template: templateMiddle}));
Vue.component('user-height', Object.assign({}, component, {template: templateHeight}));
