var app = angular.module('CardsAgainstAssembly', ['CardsApp', 'ui.router']);


app.controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory) {
    var questionCards = QuestionsFactory.getCards();
    $scope.numPlayers = 3;
    //3 is the starting number but because of the ln13 in answerCards.js it will change - double binding- dependent on the number the the user inputs

    $scope.newQuestion = function() {
        $scope.displayCard = questionCards[pickCardIndex(questionCards.length)].question;
    }

    $scope.setNumPlayers = function() {

    }

}]);

function pickCardIndex(deckSize) {
    return Math.floor(Math.random() * deckSize);
}
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    //define routes
    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'components/views/about.html',
        })
}]);
