import Ember from 'ember';

export default Ember.Component.extend({
  showNewAnswer: false,
  actions:{
    newAnswer(){
      this.set('showNewAnswer',true)
    },
    hideNewAnswer(){
      this.set('showNewAnswer',false),
      this.set('actualAnswer',''),
      this.set('author','')
    },
    saveNewAnswer: function () {
      var params ={
        actualAnswer:this.get('actualAnswer'),
        author: this.get('author'),
        voteCount: 0,
        question: this.get('question')
      };
      //console.log(params);
      this.sendAction('saveNewAnswer',params),
      this.set('actualAnswer',''),
      this.set('author',''),
      this.set('showNewAnswer',false)
    }
  }
});
