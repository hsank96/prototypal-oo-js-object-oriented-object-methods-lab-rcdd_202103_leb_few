function BoardMember(name,homestate,training){
  this.name = name;
  this.homestate = homestate;
  this.training = training;
}

BoardMember.veto = function(){return "No, I must disagree"}

BoardMember.approve = function(){return "You can do that!"}

BoardMember.doCharity=function(){return "I like to help people"}

BoardMember.