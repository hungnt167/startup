/**
 * Created by Nguyen on 5/31/2016.
 */
app.directive('contact', function(){
    return {
        restrict: "E",
        templateUrl: "app/component/home/directives/contact-view.html",
        controller:  [
            '$scope', 'userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
            ContactController
        ]
    }
});
function ContactController($scope, userService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {

    $scope.selected     = null;
    $scope.users        = [ ];
    $scope.selectUser   = selectUser;
    $scope.toggleList   = toggleUsersList;
    $scope.makeContact  = makeContact;

    // Load all registered users

    userService
        .loadAllUsers()
        .then( function( users ) {
            $scope.users    = [].concat(users);
            $scope.selected = users[0];
        });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
        $scope.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function makeContact(selectedUser) {

        $mdBottomSheet.show({
            controllerAs  : "vm",
            templateUrl   : 'app/component/home/directives/contact-sheet.html',
            controller    : [ '$mdBottomSheet', ContactSheetController],
            parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
            $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * User ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
            this.user = selectedUser;
            this.items = [
                { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
                { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
                { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
                { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
            ];
            this.contactUser = function(action) {
                // The actually contact process has not been implemented...
                // so just hide the bottomSheet

                $mdBottomSheet.hide(action);
            };
        }
    }

}