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
  scope.viewArr = [];
$http({
method: 'GET',
url: 'data.json'
}).then(function(response) {
scope.data=response.data;
console.log(scope.data[0]);
})

scope.getChild = function(id){
  console.log(id.id);
  // scope.viewArr.push(id.id);
  for (let j = 0; j < id.children.length; j++){
    // scope.getChild(id.children[j]);
    scope.viewArr.push(id.children[j]);
  }
}


  }
}
})();
