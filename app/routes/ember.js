import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.ajax({
      url: 'https://www.reddit.com/r/emberjs.json',
      type: 'get'
    }).then(function(response){
        console.log(response.data.children);
        return response.data.children;
    })

  }
});
