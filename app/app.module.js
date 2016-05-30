/**
 * Created by Nguyen on 5/30/2016.
 */
var app = angular.module("App",['angular-loading-bar', 'ngAnimate','ngMaterial', 'ui.router']);
app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    //cfpLoadingBarProvider.includeSpinner = false;
    //cfpLoadingBarProvider.includeBar = true;
    cfpLoadingBarProvider.includeSpinner = true;
    //cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
    //cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Custom Loading Message...</div>';
}])
app.run(['cfpLoadingBar', function(cfpLoadingBar){
    //cfpLoadingBar.start();
    //cfpLoadingBar.complete();
}]);
app.config(function( $mdIconProvider ){

    // Register the user `avatar` icons
    $mdIconProvider
        .defaultIconSet("./assets/svg/avatars.svg", 128);

    $mdIconProvider.icon("share", "./assets/svg/share.svg", 24);
    $mdIconProvider.icon("menu", "./assets/svg/menu.svg", 24);
});