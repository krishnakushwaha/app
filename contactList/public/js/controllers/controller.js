'use strict';
var app=angular.module('appList');

app.factory('contactService',function($http){
//console.log("hi");
	var contactResponse={};
	contactResponse.list=function(){
		return $http({
			method : 'GET',
			url: '/list'
		})
	}
	return contactResponse;
});

app.controller('contactCtrl',function($scope,contactService,$http,contaservice)
{

  angular.extend($scope, {

           
         
            init: function() {
                $scope.listContact();
            }
         
        });
 
   $scope.listContact=function(){
              contactService.list().then(function(response)
              {
                //console.log(response.data);
                $scope.setcontact=response.data;
                $scope.name='';
                $scope.email='';
                $scope.phone='';
              }, function(error) {
                        console.log('ERROR IN CALLING HOME: ', error);
                    });
            }

  $scope.init();
 /* $scope.contact.name='';
  $scope.contact.email='';
   $scope.contact.phone='';*/

  $scope.addContact=function(){
  	/*console.log($scope.name);
    console.log($scope.email);
    console.log($scope.phone);*/
    var contact={name:$scope.name,email:$scope.email,phone:$scope.phone};
  	$http.post('/contactlist',contact).then(function(response){
  		console.log(response);
  		  $scope.init();
  	});

  }

  $scope.remove=function(id){
  	console.log(id);
  	$http.delete('/contactlist/' + id).then(function(response){
  		  $scope.init();
  	});
  }

  $scope.edit=function(id){
  	console.log(id);

     contaservice.getDATA(id)
                    .then(function(response) {
                    
                        $scope.name=response.data[0].name;
                        $scope.email=response.data[0].email;
                        $scope.phone=response.data[0].phone;
                        $scope.id=response.data[0].id;
                        console.log(response.data[0]);
                    }, function(error) {
                        console.log('ERROR IN CALLING HOME: ', error);
                    });
  	/*$http.get('/contactlist/' + id).then(function(response){
  		 $scope.name=response.data[0].name;
        $scope.email=response.data[0].email;
         $scope.phone=response.data[0].phone;
          $scope.id=response.data[0].id;
  		 console.log(response.data[0]);
  	});*/
  }
  $scope.update=function(){
  	console.log($scope.id);
    var contact={name:$scope.name,email:$scope.email,phone:$scope.phone};
  	$http.put('/contactlist/' + $scope.id,contact).then(function(response){
  		   $scope.init();
  	});
  	
  }

})