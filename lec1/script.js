var arr=[1,2,3,4];

arr.forEach(function(val){
    console.log(val);
})

var ans=arr.map(function(val){
    return val-2;
})
console.log(ans);

var ans2=arr.filter(function(val){
    return val>2;
})
console.log(ans2);

var ans3=arr.find(function(val){
    if(val===5)return val;
})
console.log(ans3);

//synchronous:line by line code chale ise kahte hai synchronous
//jo bhi code async nature ka ho,ussey side stack mein bhej do and agle code ko chakao jo bhi synchronous hai,jab bhi saara synchronous code complete ho jaye tab side stack mein bheje gaye async code ko check karo ki complete hua ya nahi agar complete hua to usko execute karo main stack me laake,agar complete nahi hua to wait karo jab tak complete na ho jaye