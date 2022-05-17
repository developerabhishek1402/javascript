var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfo = false;


// if(isLoggedIn){
//     console.log('Logged-In Success');
//     if(isEmailVerified){
//         console.log('Email is verified');
//         if(isCardInfo){
//             console.log('You can purchase any course')
//         }
//     }
// }

if(isLoggedIn && isEmailVerified && isCardInfo){
    console.log('You can purchase any course');
} else{
    console.log('You cannot make any purchase');
}