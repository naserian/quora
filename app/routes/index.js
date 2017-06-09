import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('question')
  },
  actions:{
    saveNewQuestion:function(params) {
      var saveQuestion = this.store.createRecord('question',params);
      saveQuestion.save();
      this.transitionTo('index')
    }
  }
});
