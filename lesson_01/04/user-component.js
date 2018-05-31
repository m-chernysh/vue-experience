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
    <div class="card m-4 box-shadow" :class="bg">
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
    <div class="card m-4 box-shadow" :class="bg">
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

var myMixin = {
  props: {
    user: Object
  },
  data: function () {
    return {
      bg: 'bg-warning'
    }
  }
};

Vue.component('user-lite', {
  mixins: [myMixin],
  template: templateLite
});

Vue.component('user-middle', {
  mixins: [myMixin],
  template: templateMiddle
});

Vue.component('user-height', {
  mixins: [myMixin],
  template: templateHeight,
  data: function () {
    return {
      bg: 'bg-warning'
    }
  }
});
