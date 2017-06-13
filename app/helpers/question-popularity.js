import Ember from 'ember';

export function questionPopularity(params) {
  //console.log(params);
  var question = params[0];
  if(question.get('answers').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"><small>TRENDING</small></span>');
  }
}

export default Ember.Helper.helper(questionPopularity);
