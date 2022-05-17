// Allow user to access course when logged in

var emailLoggedIn = false;
var faceBookLogin = false;
var googleLogin = true;

// if(emailLoggedIn || faceBookLogin || googleLogin){
//     console.log('You can make a purchase')
// }else{
//     console.log('Please login..!!')
// }


//Assignment Code

if(emailLoggedIn){
    console.log('Y0u can make a purchase');
}else if(faceBookLogin){
    console.log('You can make a purchase');
}else if(googleLogin){
    console.log('You can make a purchase');
}else{
    console.log('Please login..!!')
}