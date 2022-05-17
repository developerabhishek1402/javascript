//make an application for below requirement

// admin - full access of app
//sub admin - can add and delete courses
// testprep - can add and delete tests
// user - to consume the content

var userType = '';

switch (userType) {
    case 'admin':
        console.log('You get full access');
        break;
    case 'sub-admin':
        console.log('You can add and delete courses');
        break;
    case 'testprep':
        console.log('You can add and delete tests');
        break;
    case 'user':
        console.log('You can consume content');
        break;

    default:
        console.log('Trial user')
        break;
}