/**
 * Created by Nguyen on 5/30/2016.
 */
app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('index', {
            url: "/",
            templateUrl: "app/component/home/component/index.html",
            controller: "HomeController"
        });
});