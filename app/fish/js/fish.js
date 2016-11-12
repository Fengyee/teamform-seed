
teamapp.controller('fishCtrl', ['$scope', "$rootScope", function($scope,$rootScope) {

	$scope.allTeams=[{teamID: "1", teamName: "Eevee", teamDescription: "Nothing here",
					teamLeader: {email:"1v@eev.ee", name: "Eevee", description:"None"},
					teamMembers:[{email:"1v@eev.ee", name: "Glaceon", description:"None"},
					{email:"1v@eev.ee", name: "Sylveon", description:"None"}]},
					{teamID: "2", teamName: "Eevee2", teamDescription: "Nothing here",
					teamLeader: {email:"1v@eev.ee", name: "Eevee2", description:"None"},
					teamMembers:[{email:"1v@eev.ee", name: "Glaceon2", description:"None"},
					{email:"1v@eev.ee", name: "Sylveon2", description:"None"}]}];

	$rootScope.currentEvent = 0;
    $rootScope.currentTeam = 0;
    $rootScope.currentUser = 0;

    $scope.currentEvent = $firebaseObject(firebase.database().ref('events/' + $rootScope.currentEvent));
    $scope.currentUser = $firebaseObject(firebase.database().ref('users/' + $rootScope.currentUser));

	$scope.showBody=function(id){
				$(".collapsible-body-"+id).slideToggle(100);
			};
}]);


teamapp.directive("fishNavi", function() {
    return {
        restrict: "E",
        templateUrl: "fish/fish-navi.html",
    };
});

