const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    }),
  );

  app.get('/auth/google/callback',
    passport.authenticate('google'), (req, res) => {
      res.redirect('/surveys');
    });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    /* cookie data is stored in req.session thanks to cookie-session package
    passport accesses data into req.session

    res.send(req.session);
    */

    res.send(req.user);
  });
};
