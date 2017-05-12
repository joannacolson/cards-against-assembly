angular.module('CardsApp', [])
    .factory('QuestionsFactory', [function() {
        return {
            getCards: function() {
                return [
                    { question: "What is Batman's guilty pleasure?" },
                    { question: "I'm sorry professor, I couldn't complete my homework because _________." },
                    { question: "I get by with a little help from _________." },
                    { question: "_________. It's a trap!" },
                    { question: "It's a pity that kids these days are all getting involved with __________." },
                    { question: "What will I bring back in time to convince people that I am a powerful wizard?" },
                    { question: "When I am President of the United States, I will create the Department of __________." },
                    { question: "What never fails to liven up the party?" },
                    { question: "But before I kill you, Mr. Bond, I must show you __________." },
                    { question: "The class field trip was completely ruined by _________." },
                    { question: "What's my secret power?" },
                    { question: "TSA guidelines now prohibit __________ on airplanes." }
                ];
            }
        };
    }])
    .factory('AnswersFactory', [function() {
        return {
            getCards: function() {
                return [
                    { answer: "Picking your scabs." },
                    { answer: "My love life." },
                    { answer: "My friends." },
                    { answer: "Pizza." },
                    { answer: "Upgrading homeless people to mobile hotspots." },
                    { answer: "Starving Children." },
                    { answer: "Not giving a shit about the third world." },
                    { answer: "Hurricane Katrina." },
                    { answer: "Vigorous Jazz Hands." },
                    { answer: "Raptor attacks." },
                    { answer: "Actually taking candy from a baby." },
                    { answer: "Children on leashes." },
                    { answer: "Cheating in the special olympics" },
                    { answer: "Shaquille O'Neal's acting career" },
                    { answer: "Bees?" },
                    { answer: "A lifetime of sadness." },
                    { answer: "The American Dream." },
                    { answer: "The Kool-Aid Man." },
                    { answer: "A supersoaker filled with cat pee." },
                    { answer: "Getting married, having a few kids, buying some stuff, moving to Florida, and dying." },
                    { answer: "Batman." }
                ];
            }
        }
    }]);
