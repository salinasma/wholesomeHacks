angular.module('tiles', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache']);

angular.
    module('tiles').
    component('tiles', {
        templateUrl: 'mainPage/tiles.template.html',
        controller: function TilesCtrl($scope) {

            $scope.imagePath = 'img/water0.png';
            $scope.eatingTrackerPictures = 'img/eat/5day_0.png';
            $scope.timeOfLastDrink = waterPicCounter;
            $scope.timerRunning = true;
            $scope.waterHandlerEnabled = true;
            $scope.standUpHandlerEnabled = true;
	        $scope.fiveMeals = true;
            
            var waterTimer = setInterval(drinkWaterHandler, 1000); //300000
            var standUpTimer = setInterval(standUpHandler, 1000);   //600000
            var waterPicCounter = 0;
            var eatPicCounter = 0;

	        function drinkWaterHandler() {
	           if ($scope.waterHandlerEnabled) {
	               console.log("DRINK WATER"); //  replace with call to backend 
	                }
	            }
	
	            function standUpHandler() {
	                if ($scope.standUpHandlerEnabled) {
	                    console.log("stand up"); //  replace with call to backend 
	                }
	            }

	            $scope.addToEatingPicture= function (){
	                eatPicCounter++;
	                $scope.changeEatingPicture();
	                console.log("hey");
	            }
	            $scope.changeEatingPicture = function () {
	
	                console.log("changePictures");
	                if ($scope.fiveMeals) {
	                    switch (eatPicCounter) {
	                        case 0:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_0.png';
	                            break;
	
	                        case 1:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_1.png';
	                            break;
	
	                        case 2:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_2.png';
	                            break;
	                        case 3:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_3.png';
	                            break;
	                        case 4:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_4.png';
	                            break;
	
	                        case 5:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_5.png';
	                            break;
	                        default:
	                            $scope.eatingTrackerPictures = 'img/eat/5day_5.png';
	                            break;
	                    }
	                }
	                else {

	                    switch (eatPicCounter) {
	                        case 0:
	                            $scope.eatingTrackerPictures = 'img/eat/3day_0.png';
	                            break;
	
	                        case 1:
	                            $scope.eatingTrackerPictures = 'img/eat/3day_1.png';
	                            break;
	
	                        case 2:
	                            $scope.eatingTrackerPictures = 'img/eat/3day_2.png';
	                            break;
	                        case 3:
                                $scope.eatingTrackerPictures = 'img/eat/3day_3.png';
	                            break;	
	                        default:
	                            $scope.eatingTrackerPictures = 'img/eat/3day_3.png';
	                            break;
	                    }

	                }
	
	            }
            $scope.changeWaterPicture = function () {
                // $scope.timeOfLastDrink++;
                waterPicCounter++;
                   switch (waterPicCounter){
                // switch ($scope.timeOfLastDrink) {
                    case 0:
                        $scope.imagePath = 'img/water0.png';
                        break;

                    case 1:
                        $scope.imagePath = 'img/water1.png';
                        break;

                    case 2:
                        $scope.imagePath = 'img/water2.png';
                        break;
                    case 3:
                        $scope.imagePath = 'img/water3.png';
                        break;
                    case 4:
                        $scope.imagePath = 'img/water4.png';
                        break;

                    case 5:
                        $scope.imagePath = 'img/water5.png';
                        break;
                    case 6:
                        $scope.imagePath = 'img/water6.png';
                        break;
                    case 7:
                        $scope.imagePath = 'img/water7.png';
                        break;

                    default:
                        $scope.imagePath = 'img/water8.png';
                        break;
                }

            }


            $scope.startTimer = function (){
                $scope.$broadcast('timer-start');
                $scope.timerRunning = true;
            };
 
            $scope.stopTimer = function (){
                $scope.$broadcast('timer-stop');
                $scope.timerRunning = false;
            };
        }




    }).config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('dark-grey').backgroundPalette('blue').dark();
        $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
        $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
        $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
    });
