// Your code here
function saturdayFun(words="roller-skate") {
    return `This Saturday, I want to ${words}!`;

}

function mondayWork(action="go to the office"){
    return `This Monday, I will ${action}.`;
}

function wrapAdjective(sym="*"){
    const innerFunction = function(condition="special"){
        return `You are ${sym}${condition}${sym}!`;

    }
    return innerFunction;
    

}