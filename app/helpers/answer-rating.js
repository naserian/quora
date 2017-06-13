import Ember from 'ember';

export function answerRating(params) {
  console.log(params);
  var answerVoteCount = params[0].get('voteCount');
  if (answerVoteCount = 5){
    console.log('only');
    return answerVoteCount+'$$$$$';
  } else if (answerVoteCount = 4){
    return answerVoteCount+'$$$$';
  } else if (answerVoteCount = 3){
    return answerVoteCount+'$$$';
  } else if (answerVoteCount = 2){
    return answerVoteCount+'$$';
  } else if (answerVoteCount = 1){
    return answerVoteCount+'$';
  }
}

export default Ember.Helper.helper(answerRating);
