(function() {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckFunc);

  LunchCheckFunc.$inject = ["$scope"];
  function LunchCheckFunc($scope) {
    $scope.updateText = function() {
      $scope.inputString = $scope.inputText;
    };

    $scope.LunchCheck = function() {
      var count = 0,
        stringToSplit = $scope.inputString;
      if (stringToSplit != null) {
        var stringss = stringToSplit.split(",");

        for (var i = 0; i < stringss.length; i++) {
          if (stringss[i] != "") {
            count++;
          } else {
            count += 0;
          }
        }

        $scope.count = count;
      } else {
        $scope.count = 0;
      }
    };
    $scope.displayMessage = function() {
      if ($scope.count > 3) {
        return "Too Much";
      } else if ($scope.count > 0 && $scope.count <= 3) {
        return "Enjoy your meal";
      } else {
        return "Enter some data";
      }
    };
  }
})();
