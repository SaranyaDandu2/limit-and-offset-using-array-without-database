var express=require('express');

var S = require('string');
var PORT=7000;
var app=express();
var saru=[]
var mine2=[]
var mine3=[]
var mine=[{"empid":"3652","ename":"saranya","epass":"saranya","eemail":"saranya@gmail.com"},
{"empid":"3653","ename":"kalyan","epass":"kalyan","eemail":"kalyan@gmail.com"},
{"empid":"3654","ename":"madhu","epass":"madhu","eemail":"madhu@gmail.com"},
{"empid":"3655","ename":"naveen","epass":"naveen","eemail":"naveen@gmail.com"},
{"empid":"3655","ename":"arun","epass":"arun","eemail":"arun@gmail.com"},
{"empid":"3655","ename":"usha","epass":"usha","eemail":"usha@gmail.com"}]

/*app.param(['empid','offset','limit'], function (req, res, next, value) {
  console.log('CALLED ONLY ONCE'+value);
  next();
  });*/
  
  app.get('/getitems/:empid', function(req, res){
  var z=0;
 // var off = parseInt(req.param('offset'));
    // var lmt =parseInt(req.param('limit'));
  var empid = parseInt(req.param('empid'));
  var off = req.query.offset;
  var lmt = req.query.limit;
  var str=req.query.data;
  console.log(str)
  console.log(lmt+"off"+off+"emp"+empid);
  console.log("in loop")
  
  if(lmt==undefined && off==undefined){
	  console.log("limit undefined offset undefined")
 for(var p=0;p<mine.length;p++)
  {
   if(empid==mine[p].empid)
   {
	   
	  if(str){
		  console.log("in if")
				var arr = S(str).splitLeft(","); // comma seperated fields string
				console.log("string"+JSON.stringify(arr))
				var obj = JSON.parse(JSON.stringify(mine[p]));
				var keys = Object.keys(obj);	
				console.log("Keys"+JSON.stringify(keys))
				var json={};
				for(var j=0;j<arr.length;j++)
				{
					
					 for(var k=0;k<keys.length;k++)
					{
						if(keys[k]==arr[j]){
							
									json[keys[k]]=obj[keys[k]];
						}
					}
				}
				console.log("JSON Data"+JSON.stringify(json))
		
				mine3.push(json);
			
  console.log('mine3'+JSON.stringify(mine3));
  
			}else{
				
				mine3.push(mine[p]);
			console.log('mine3 data 1 is'+JSON.stringify(mine3));
			} 
	   
	   
    
   }
   
  } 
  res.json(mine3);
  mine3.length=0;
  }
  else//main
  {
	  if(lmt==undefined){
		  if(off=undefined){
	  console.log("limit undefined offset undefined")
   for(var p=0;p<mine.length;p++)
  {
   if(empid==mine[p].empid)
   {
	   
	  if(str){
		  console.log("in if")
				var arr = S(str).splitLeft(","); // comma seperated fields string
				console.log("string"+JSON.stringify(arr))
				var obj = JSON.parse(JSON.stringify(mine[p]));
				var keys = Object.keys(obj);	
				console.log("Keys"+JSON.stringify(keys))
				var json={};
				for(var j=0;j<arr.length;j++)
				{
					
					 for(var k=0;k<keys.length;k++)
					{
						if(keys[k]==arr[j]){
							
									json[keys[k]]=obj[keys[k]];
						}
					}
				}
				console.log("JSON Data"+JSON.stringify(json))
		
				mine3.push(json);
			
  console.log('mine3'+JSON.stringify(mine3));
  
			}else{
				
				mine3.push(mine[p]);
			console.log('mine3 data 2 is'+JSON.stringify(mine3));
			} 
	   
	   
    
   }
   
  } 
  res.json(mine3);
  min3.length=0;
   
  }
else{
	
	console.log("limit undefined offset defined")
	  for(var p=0;p<mine.length;p++)
  {
   if(empid==mine[p].empid)
   {
	   
	  if(str){
		  console.log("in if")
				var arr = S(str).splitLeft(","); // comma seperated fields string
				console.log("string"+JSON.stringify(arr))
				var obj = JSON.parse(JSON.stringify(mine[p]));
				var keys = Object.keys(obj);	
				console.log("Keys"+JSON.stringify(keys))
				var json={};
				for(var j=0;j<arr.length;j++)
				{
					
					 for(var k=0;k<keys.length;k++)
					{
						if(keys[k]==arr[j]){
							
									json[keys[k]]=obj[keys[k]];
						}
					}
				}
				console.log("JSON Data"+JSON.stringify(json))
		
				mine3.push(json);
			
  console.log('mine3'+JSON.stringify(mine3));
  
			}else{
				
				mine3.push(mine[p]);
			console.log('mine3 data 2 is'+JSON.stringify(mine3));
			} 
	   
	   
    
   }
   
  } 
  
  
    console.log('limit'+parseInt(req.query.limit));
    console.log('offset'+parseInt(req.query.offset));
	var c=mine3.length;
	console.log(c);
	if(c>parseInt(req.query.offset)){
    for(var i=parseInt(req.query.offset),j=0;i<=parseInt(req.query.offset);i++)
    {
     
      saru[j] = mine3[i];
      j++;
     
    }
  console.log('saru'+JSON.stringify(saru)); 
 res.json(saru);     
 mine3.length=0;
}  
else{
	res.json("check your offset")
	mine3.length=0;
}
	  }
	  }
	  else {
		  if(lmt!= undefined && off==undefined){
			  console.log("limit defined offset undefined")
		    for(var p=0;p<mine.length;p++)
  {
   if(empid==mine[p].empid)
   {
	   
	  if(str){
		  console.log("in if")
				var arr = S(str).splitLeft(","); // comma seperated fields string
				console.log("string"+JSON.stringify(arr))
				var obj = JSON.parse(JSON.stringify(mine[p]));
				var keys = Object.keys(obj);	
				console.log("Keys"+JSON.stringify(keys))
				var json={};
				for(var j=0;j<arr.length;j++)
				{
					
					 for(var k=0;k<keys.length;k++)
					{
						if(keys[k]==arr[j]){
							
									json[keys[k]]=obj[keys[k]];
						}
					}
				}
				console.log("JSON Data"+JSON.stringify(json))
		
				mine3.push(json);
			
  console.log('mine3'+JSON.stringify(mine3));
  
			}else{
				
				mine3.push(mine[p]);
			console.log('mine3 data 2 is'+JSON.stringify(mine3));
			} 
	   
	   
    
   }
   
  } 
  
  
    console.log('limit'+parseInt(req.query.limit));
    console.log('offset'+parseInt(req.query.offset));
    for(var i=0,j=0;i<parseInt(req.query.limit);i++,j++)
    {
     
      if(mine3.includes(mine3[i])==true){
      saru[j] = mine3[i];}
	  else{
		  saru[j]!= mine3[i]
	  }
      
     
    }
  console.log('saru'+JSON.stringify(saru)); 
 res.json(saru);     
 mine3.length=0;
	  }
		  
	  else{
		  console.log("limit defined offset defined")
		  
		    for(var p=0;p<mine.length;p++)
  {
   if(empid==mine[p].empid)
   {
	   
	  if(str){
		  console.log("in if")
				var arr = S(str).splitLeft(","); // comma seperated fields string
				console.log("string"+JSON.stringify(arr))
				var obj = JSON.parse(JSON.stringify(mine[p]));
				var keys = Object.keys(obj);	
				console.log("Keys"+JSON.stringify(keys))
				var json={};
				for(var j=0;j<arr.length;j++)
				{
					
					 for(var k=0;k<keys.length;k++)
					{
						if(keys[k]==arr[j]){
							
									json[keys[k]]=obj[keys[k]];
						}
					}
				}
				console.log("JSON Data"+JSON.stringify(json))
		
				mine3.push(json);
			
  console.log('mine3'+JSON.stringify(mine3));
  
			}else{
				
				mine3.push(mine[p]);
			console.log('mine3 data 2 is'+JSON.stringify(mine3));
			} 
	   
	   
    
   }
   
  } 
  
 
  
    console.log('limit'+parseInt(req.query.limit));
    console.log('offset'+parseInt(req.query.offset));
	
    for(var i=0;i<=parseInt(req.query.offset);i++)
    {
     
      for(var k=parseInt(req.query.offset),j=0;k<parseInt(req.query.offset)+parseInt(req.query.limit);k++,j++)
      {
      saru[j] = mine3[k];
      }
     
    }
  console.log('saru'+JSON.stringify(saru)); 
 res.json(saru);     
 mine3.length=0;
	  }
	  
	  }
  }
	  
}
  ) 


app.listen(PORT,function(){
console.log('Server is running on port' + PORT);
});