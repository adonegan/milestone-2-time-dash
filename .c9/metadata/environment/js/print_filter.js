{"filter":false,"title":"print_filter.js","tooltip":"/js/print_filter.js","undoManager":{"mark":3,"position":3,"stack":[[{"start":{"row":0,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["function print_filter(filter) {","    var f=eval(filter);","    if (typeof(f.length) != \"undefined\") {}else{}","    if (typeof(f.top) != \"undefined\") {f=f.top(Infinity);}else{}","    if (typeof(f.dimension) != \"undefined\") {f=f.dimension(function(d) { return \"\";}).top(Infinity);}else{}","    console.log(filter+\"(\"+f.length+\") = \"+JSON.stringify(f).replace(\"[\",\"[\\n\\t\").replace(/}\\,/g,\"},\\n\\t\").replace(\"]\",\"\\n]\"));","}"],"id":2},{"start":{"row":0,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["function print_filter(filter) {","    var f=eval(filter);","    if (typeof(f.length) != \"undefined\") {}else{}","    if (typeof(f.top) != \"undefined\") {f=f.top(Infinity);}else{}","    if (typeof(f.dimension) != \"undefined\") {f=f.dimension(function(d) { return \"\";}).top(Infinity);}else{}","    console.log(filter+\"(\"+f.length+\") = \"+JSON.stringify(f).replace(\"[\",\"[\\n\\t\").replace(/}\\,/g,\"},\\n\\t\").replace(\"]\",\"\\n]\"));","}"]}],[{"start":{"row":0,"column":0},"end":{"row":6,"column":1},"action":"remove","lines":["function print_filter(filter) {","    var f=eval(filter);","    if (typeof(f.length) != \"undefined\") {}else{}","    if (typeof(f.top) != \"undefined\") {f=f.top(Infinity);}else{}","    if (typeof(f.dimension) != \"undefined\") {f=f.dimension(function(d) { return \"\";}).top(Infinity);}else{}","    console.log(filter+\"(\"+f.length+\") = \"+JSON.stringify(f).replace(\"[\",\"[\\n\\t\").replace(/}\\,/g,\"},\\n\\t\").replace(\"]\",\"\\n]\"));","}"],"id":3},{"start":{"row":0,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["function print_filter(filter) {","    var f=eval(filter);","    if (typeof(f.length) != \"undefined\") {}else{}","    if (typeof(f.top) != \"undefined\") {f=f.top(Infinity);}else{}","    if (typeof(f.dimension) != \"undefined\") {f=f.dimension(function(d) { return \"\";}).top(Infinity);}else{}","    console.log(filter+\"(\"+f.length+\") = \"+JSON.stringify(f).replace(\"[\",\"[\\n\\t\").replace(/}\\,/g,\"},\\n\\t\").replace(\"]\",\"\\n]\"));","}"]}],[{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":[";"],"id":4}],[{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"remove","lines":[";"],"id":5}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":1},"end":{"row":6,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1564528036610,"hash":"100ae8cff7039432354cfcae59b29a3505b2615d"}