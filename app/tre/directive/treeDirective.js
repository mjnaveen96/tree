(function() {
  angular.module('myTree')
  .directive('treeDirective',treeDirectiveFun);
    treeDirectiveFun.$inject = ['$http','$compile'];
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
// console.log(scope.data[0]);
})

scope.getChild = function(id){
  // console.log(id.id);
scope.viewArr.push(id);

  createTree(id);
  for (let j = 0; j < id.children.length; j++){
    scope.getChild(id.children[j]);
    // scope.viewArr.push(id.children[j]);
  }
}

 function createTree(data) {
   console.log(data.level);
   for (var i = 0; i < data.length; i++) {
     var childDiv = document.createElement("div");
     childDiv.setAttribute("class","child");
     // childDiv.setAttribute("ng-click", "temp()");
     var node = document.createTextNode(data);
     childDiv.appendChild(node);

     var element = document.getElementById("container");
     element.appendChild(childDiv);
   }

}

scope.temp = function() {
  alert("hel");
}

  }
}
})();
