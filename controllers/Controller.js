// myApp.controller('emiController', function($scope, $http) {
//     $http.get('http://ec2-34-216-106-44.us-west-2.compute.amazonaws.com:8080/atoz/v1/emi?p='+$scope.principal+'&r='+$scope.rate+'&t='+$scope.duration+'&type='+$scope.monthOrYear).
//         success(function(response) {
//             $scope.emiResponse = response.data;
//         });
// });

var myApp = angular.module('atoz', []);
myApp.controller('atozController', ['$scope', '$http', function($scope, $http) {

$scope.emi = function(){
  $http.get('http://127.0.0.1:8080/v1/emi?p='+$scope.principal+'&r='+$scope.rate+'&t='+$scope.duration+'&type='+$scope.monthOrYear).success(function(response){
    $scope.emiResponse = response;
    console.log(response);
  });  
};

$scope.bankDetail = function(){
	$http.get('http://127.0.0.1:8080/v1/fetchBankDetail').success(function(response){
    $scope.bankResponse = response;
    console.log(response);
  });
};

$scope.stateDetail = function(bankId){
	$http.get('http://127.0.0.1:8080/v1/fetchBankDetail?bankId='+bankId).success(function(response){
    $scope.stateResponse = response;
    console.log(response);
  });
};

$scope.districtDetail = function(bankId,stateId){
	$http.get('http://127.0.0.1:8080/v1/fetchBankDetail?bankId='+bankId+'&stateId='+stateId).success(function(response){
    $scope.districtResponse = response;
    console.log(response);
  });
};

$scope.cityDetail = function(bankId,stateId,districtId){
	$http.get('http://127.0.0.1:8080/v1/fetchBankDetail?bankId='+bankId+'&stateId='+stateId+'&districtId='+districtId).success(function(response){
    $scope.cityResponse = response;
    console.log(response);
  });
};

$scope.branchDetail = function(bankId,stateId,districtId,cityId){
	$http.get('http://127.0.0.1:8080/v1/fetchBankDetail?bankId='+bankId+'&stateId='+stateId+'&districtId='+districtId+'&cityId='+cityId).success(function(response){
    $scope.branchResponse = response;
    console.log(response);
  });
};


// var refresh = function(){
//   $http.get('/contactlist').success(function(response){
//     $scope.contactlist = response;
//   });
// };

// refresh();

// $scope.addContact = function(){
//   $http.post('/contactlist', $scope.contact).success(function(response){
//     refresh(); //refreshing page
//   });
// };

// $scope.edit = function(id){
//   $http.get('/contactlist/' + id).success(function(response){
//     $scope.contact = response;
//   });
// };  

// $scope.update = function(){
//   $http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
//     refresh();
//   });
// };

// $scope.remove = function(id){
//   $http.delete('/contactlist/'+id).success(function(response){
//     refresh();
//   });
// };

// $scope.deselect = function(){
//   $scope.contact = "";
// }

}]);﻿