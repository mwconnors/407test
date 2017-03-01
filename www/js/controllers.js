angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {  //HOME CONTROLLER

  // onSubmit function call
  $scope.onSubmit = function () {
    // Add $state.go function call
    // Hint: ui-sref HTML attribute in <script> tag for tabs navigation bar HTML
    $state.go("tab.chats")
  };

  //$state.go("results");
  // $scope.onSubmit = $ionicViewSwitcher("forward");
})

.controller('ChatsCtrl', function($scope, $state) {  //IMAGE QUESTION CONTROLLER
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // onSubmit function call
  $scope.onSubmitA = function () {  //INCORRECT ANSWER
    // Add $state.go function call
    // Hint: ui-sref HTML attribute in <script> tag for tabs navigation bar HTML
    $state.go("tab.account", {
      'correct' : 0
    })
  };
  // onSubmit function call
  $scope.onSubmitB = function () {  //INCORRECT ANSWER
    // Add $state.go function call
    // Hint: ui-sref HTML attribute in <script> tag for tabs navigation bar HTML
    $state.go("tab.account", {
      'correct' : 0
    })
  };
  // onSubmit function call
  $scope.onSubmitC = function () {  //CORRECT ANSWER
    // Add $state.go function call
    // Hint: ui-sref HTML attribute in <script> tag for tabs navigation bar HTML
    $state.go("tab.account", {
      'correct' : 1
    })
  };
  // onSubmit function call
  $scope.onSubmitD = function () {  //INCORRECT ANSWER
    // Add $state.go function call
    // Hint: ui-sref HTML attribute in <script> tag for tabs navigation bar HTML
    $state.go("tab.account", {
      'correct' : 0
    })
  };



  // $scope.chats = Chats.all();
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})



.controller('AccountCtrl', function($scope, $state, $stateParams) { //TEXT QUESTION CONTROLLER
  //access scope variable bound to text box and set to an empty string
  // $scope.settings = {
  //   enableFriends: true
  // };
  $scope.answer = "";
  $scope.numCorrect = $stateParams.correct;


  // onSubmit function call
  $scope.onSubmit = function () {
    var ans = $scope.answer;
    $scope.answer = "";

    var numCorrect = $stateParams.correct;

    if (ans == "2017") {
      numCorrect = numCorrect + 1;
      $state.go("tab.results", {
        'score' : numCorrect
      })
    }
    else {
      $state.go("tab.results", {
        'score' : numCorrect
      })
    }
    // Add $state.go function call
    // Hint: ui-sref HTML attribute in <script> tag for tabs navigation bar HTML

  };
})

.controller('ResultsCtrl', function($scope, $state, $stateParams) {  //RESULTS CONTROLLER

  $scope.output = "You got " + $stateParams.score + " right.";

  // onSubmit function call
  $scope.onSubmit = function () {
    //reset number correct
    $stateParams.correct = 0;
    $stateParams.score = 0;
    // Add $state.go function call
    $state.go("tab.dash")
  };

});

