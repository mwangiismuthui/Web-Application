



//getUser - return the user object from userData
function getUser(user) {
    if (user) {
        localStorage.setItem("username",user.username);
        
    window.location.reload();
        return user;
    } else {
        return null;
    }
}

//getJWT - get the JWT from userData
function getJWT(jwt) {
    if (jwt) {
        
        localStorage.setItem("jwt",jwt);
        return jwt;
    } else {
        return null;
    }
}

function signOut(event) {
   
    localStorage.clear();
    window.location.reload();
    
}
         //store function

