// From https://github.com/iron-meteor/iron-router/issues/1189
RouteController.prototype.redirect = function (routeOrPath, params, options) {
    options = options || {};
    if (!options.hasOwnProperty("replaceState")) {
        options.replaceState = true;
    }
    return this.router.go(routeOrPath, params, options);
};


Router.route('/', {
  name: 'home',
  title: 'Home | Berkman Dashboard'
});
