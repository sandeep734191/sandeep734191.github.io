export default function(state=1,action){
    console.log("inside reducer maths.js");
switch(action.type){
    
    
    case "ADD" :
        console.log("action is received in add")
        
        return state + 1

    case "SUB" :
        console.log("action is reveived in sub");

        return state - 1
    case 'USERS_LOGIN_REQUEST' :
        console.log("user data recieved in reducer");
        return state;
    default:
        break;
}
return state;
}