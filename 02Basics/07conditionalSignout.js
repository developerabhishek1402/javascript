// Show signout button if user logged in

var isAuthenticated = false;


// if(isAuthenticated){
//     console.log('Show Signout button')
// }else{
//     console.log('Show Login / Signup button')
// }


isAuthenticated ? console.log('Show Signout button') : console.log('Show Login/Signup button');