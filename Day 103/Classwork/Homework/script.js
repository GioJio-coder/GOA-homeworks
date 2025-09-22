setInterval(()=>{
let d=new Date();
console.log(d.LocaleTime());
},1000);

let dice = Math.floor(Math.random()*6)+1;
console.log("🎲",dice);

let fruits=["ვაშლი","ნესვი","ბანანი"];
let rand=fruits[Math.floor(Math.random()*fruits.length)];
console.log(rand);

let chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let pass="";
for(let i=0;i<8;i++) pass+=chars[Math.floor(Math.random()*chars.length)];
console.log(pass);

let months=["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"];
console.log(months[new Date().getMonth()]);


let days=["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"];
console.log(days[new Date().getDay()]);


let start;
function clickBtn(){
start=Date.now();
}
function stopBtn(){
console.log(((Date.now()-start)/1000).toFixed(1)+" წამი");
}