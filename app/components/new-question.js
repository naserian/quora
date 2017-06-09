import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    newQuestion:(function () {
      var params = {
        actualQuestion: this.get('actualQuestion'),
        author: this.get('author'),
        notes: this.get('notes')
      }
      this.sendAction('saveNewQuestion',params)
    })
  }

});
