var jsontron = require("../lib/jsontron.js");
myInstance = { "doc": {} };
myRules = {
"schema":{

  	"id":"eg3_1",
  	"title":"Technical document schema",
  	"schemaVersion":"ISO Schematron 2016",
  	"queryBinding":"jsonpath",
  	"defaultPhase":"phaseid1",
  	
	 "phase":[
    	{
    		"id":"phaseid1",
    		"active":["Document_root"]
    	}
    ],
    
	"pattern":[
      {
      	"id":"Document_root",
      	"title":"pattern title",
      	"rule":[
          {          
              	"id":"doc_root",
              	"abstract":false,
                "context": "$",
                "assert":[
                  {
                     "id":"doc_root_assert",
                     "test":"contextNode.length ==1 && contextNode[0] == jp.parent(contextNode, '$..doc')",
                     "message": "Root element should be 'doc'."
                  }
                ]              
          }]}]}};

jsontron.JSONTRON.validate(myInstance, myRules);