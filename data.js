var products = [{
    fs0 : {
          id: "FS000",
          name: "feathersoft",
          parent: [],
          siblings:[],
          children: [{
            fs00:{
                id: "FSA00",
                name: "FS A Dept",
                parent: ["FS000"],
                siblings:["FSB00","FSC00"],
                children: [{
                  fs000 : {
                          id: "FSA01",
                          name: "A Dept Emp1",
                          parent: ["FSA00"],
                          children:[],
                          siblings:["FSA02","FSB01","FSB02","FSC01","FSC02"]}
                        }, {
                  fs001 : {
                          id: "FSA02",
                          name: "A Dept Emp2",
                          parent: ["FSA00"],
                          children:[],
                          siblings:["FSA01","FSB01","FSB02","FSC01","FSC02"]}
                          }]
                        }
            }, {
            fs01 : {
                  id: "FSB00",
                  name: "FS B Dept",
                  parent: ["FS000"],
                  siblings:['FSA00','FSC00'],
                  children: [{
                    fs010 : {
                            id: "FSB01",
                            name: "A Dept Emp1",
                            parent: ["FSB00"],
                            children:[],
                            siblings:["FSA01","FSA02","FSB02","FSC01","FSC02"]}
                          },{
                    fs012 : {
                            id: "FSB02",
                            name: "A Dept Emp2",
                            parent: ["FSB00"],
                            children:[],
                            siblings:["FSA01","FSA02","FSB01","FSC01","FSC02"]}
              }]
            }
          }, {
            fs02 : {
              id: "FSC00",
              name: "FS C Dept",
              parent: ["FS000"],
              siblings:['FSA00','FSB00'],
              children: [{
                fs020 : {
                        id: "FSC01",
                        name: "C Dept Emp1",
                        parent: ["FSC00"],
                        children:[],
                        siblings:["FSA01","FSA02","FSB01","FSB02","FSC02"]}
                      },{
                fs021 : {
                        id: "FSC02",
                        name: "C Dept Emp2",
                        parent: ["FSC00"],
                        children:[],
                        siblings:["FSA01","FSA02","FSB01","FSB02","FSC01"]}
                      }]
            }
          }]
        }
}];
