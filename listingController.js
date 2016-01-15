angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
	$scope.newItem ={};
   
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
		  $scope.listings.push($scope.newItem);
		  $scope.newItem={};
	};
	
    $scope.deleteListing = function(index) {
		$scope.listings.splice(index,1);
	};
	
    $scope.showDetails = function(index) {
      $scope.detailedInfo = 'Name: ' + $scope.listings[index].name + '\n' +
	                        'Code: ' + $scope.listings[index].code + '\n';
	  if($scope.listings[index].coordinates!=undefined){
							$scope.detailedInfo += 'Address: '+ $scope.listings[index].address + '\n' +
							'Latitude: ' + $scope.listings[index].coordinates.latitude + '\n' +
							'Longitude: ' +$scope.listings[index].coordinates.longitude;
	      }
	}
	
  }
]);