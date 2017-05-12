angular.module('CardsAgainstAssembly', ['CardsApp'])
    .controller("CardsCtrl", ["$scope", "QuestionsFactory", function($scope, QuestionsFactory) {
        var questionCards = QuestionsFactory.getCards();
        $scope.numPlayers = 3;

        $scope.newQuestion = function() {
            $scope.displayCard = questionCards[pickCardIndex(questionCards.length)].question;
        };

        $scope.newQuestion();
    }]);

function pickCardIndex(deckSize) {
    return Math.floor(Math.random() * deckSize);
}
