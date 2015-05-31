var arr = [];

function getvalue()
        {
   
   var value= prompt("Please enter the value");
   
   if(value!= null)
	{ arr.push(value);} 
   
   var x = d3.scale.linear()
    .domain([0, d3.max(arr)])
    .range([0, 420]);

   d3.select(".chart")
     .selectAll("div")
     .data(arr)
     .enter().append("div")
     .style("height", function(d) { return 10*(d) + "px"; })
     .style("float","left")  
     .text(function(d) { return d; }); 
       
       }

function dosort()
       {
 
   clearBox('div1')

   arr.sort(function(a, b){return b-a});
  
   var x = d3.scale.linear()
    .domain([0, d3.max(arr)])
    .range([0, 420]);

   d3.select(".chart")
    .selectAll("div")
    .data(arr)
    .enter().append("div")
    .style("height", function(d) { return 10*(d) + "px"; })
    .style("float","left")
    .text(function(d) { return d; });
 
    
      }

function clearBox(elementID)
      {document.getElementById(elementID).innerHTML = "";}

