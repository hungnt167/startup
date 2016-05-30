<!DOCTYPE html>
<html lang="en" ng-app="App">
<head>
    <meta charset="UTF-8">
    <title>Startup</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="stylesheet" href="assets/libs/angular-material/angular-material.css">
    <link rel="stylesheet" href="assets/libs/angular-loading-bar/build/loading-bar.css">

    <link rel="stylesheet" href="assets/css/app.css">
</head>
<body layout="column">
<div id="loading-bar-container"></div>
<div ui-view></div>
<script src="assets/libs/angular/angular.js"></script>
<script src="assets/libs/angular-aria/angular-aria.js"></script>
<script src="assets/libs/angular-animate/angular-animate.js"></script>
<script src="assets/libs/angular-material/angular-material.js"></script>
<script src="assets/libs/angular-ui-router/release/angular-ui-router.js"></script>
<script src="assets/libs/angular-loading-bar/build/loading-bar.js"></script>

<script src="app/app.module.js"></script>
<script  src="app/app.routes.js"></script>
<!--SERVICES-->
<script  src="app/component/home/services/user-service.js"></script>
<!--SERVICES-->
<!--DIRECTIVES-->
<script  src="app/component/home/directives/contact-directive.js"></script>
<!--DIRECTIVES-->
<script  src="app/component/home/component/home-controller.js"></script>
</body>
</html>