var vvip=[
    "body",              
    "parse",            
    "proEndDate",       
    "8888-08-08T00:00:00.000+0000", 
    "needSubscribe",     
    "pro",             
    "stringify"
];
var body=$response[vvip[0]];
var obj=JSON[vvip[1]](body);
obj[vvip[2]]= vvip[3];
obj[vvip[4]]= false;
obj[vvip[5]]= true;
body= JSON[vvip[6]](obj);
$done({body})