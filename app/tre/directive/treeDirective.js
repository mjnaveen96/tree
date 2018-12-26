(function() {
  angular.module('myTree')
  .directive('treeDirective',treeDirectiveFun);
    treeDirectiveFun.$inject = ['$http'];
  function treeDirectiveFun($http) {
    return{
  link : treeFun,
  restrict : 'EA',
  templateUrl:"app/tre/templates/treeTemplate.html"
}
function treeFun(scope,element,attrs) {
  scope.data;
$http({
method: 'GET',
url: 'data.json'
}).then(function(response) {
scope.data=response.data;
console.log(scope.data);
})

  }
}
})();
