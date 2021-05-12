function BoardMember(name,homeState,training){
  this.name = name;
  this.homestate = homeState;
  this.training = training;
}

BoardMember.veto = function(){return "No, I must disagree"}

BoardMember.approve = function(){return "You can do that!"}

BoardMember.doCharity=function(){return "I like to help people"}

BoardMember.releasePressStatement= function(){
  return "You will see great things from Scuber."
}

BoardMember.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}