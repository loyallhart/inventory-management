const withAuth = (req, res, next) => {
    // If the user isn't logged in then we will redirect to login route
    if(!req.session.logged_in) {
        res.direct('/login');
    } else {
        next();
    }
    };
    
    module.exports = withAuth;