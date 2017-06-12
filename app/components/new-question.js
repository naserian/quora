import Ember from 'ember';

export default Ember.Component.extend({
  showNewQuestion:false,
  actions:{
    showNewQuestion(){
      this.set('showNewQuestion',true)
    },
    hideNewQuestion(){
      this.set('showNewQuestion',false),
      this.set('actualQuestion',''),
      this.set('author',''),
      this.set('notes','')
    },
    newQuestion:(function () {
      var params = {
        actualQuestion: this.get('actualQuestion'),
        author: this.get('author'),
        notes: this.get('notes')
      };
      this.sendAction('saveNewQuestion',params);
      this.set('actualQuestion',''),
      this.set('author',''),
      this.set('notes',''),
      this.set('showNewQuestion',false)
    })
  }

});
