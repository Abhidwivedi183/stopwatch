let timedispaly = document.getElementById("displaytime");
let [seconds,minutes,hours] = [0,0,0];//teene variable ko ek saath assign karta hai...

let start = document.getElementById("start");
let pause = document.getElementById("pause");
let res = document.getElementById("restart");


timer = null;
//koi function tabhi call karta hai jab usko call kiya jaye...
function timegen(){
seconds++;
if(seconds==60){
  seconds=0;
  minutes++;

  if(minutes==60){
    minutes = 0;
    hours++;
  }
}
timedispaly.innerHTML = hours+ ":" + minutes + ":" + seconds


}


// start.addEventListener('click',(e)=>{
 
// setInterval(()=>{
// timegen();
// },1000)//1000 milii second means every 1 second , it get executed...
// })

function startwatch(){

  if(timer!=null){
    clearInterval(timer);
  }
 timer =  setInterval(timegen,1000);//kewal refernce paas hoga only for call back
}


start.addEventListener('click',function(e){
  startwatch();
  start.src= "https://cdn-icons-png.flaticon.com/128/6878/6878704.png"
  pause.src = "https://cdn-icons-png.flaticon.com/128/4181/4181163.png"
})


//kuch aisa karo jisse jab pause button par click ho tab jo jahan waise hi ruk jaye


function stopwatch(){
  clearInterval(timer);
  timer = null;
  start.src = "https://cdn-icons-png.flaticon.com/128/260/260446.png"
}

pause.addEventListener('click',function(e){
 stopwatch();
 pause.src = "https://cdn-icons-png.flaticon.com/128/5690/5690573.png"
})

function restart(){
  timedispaly.innerHTML = `00:00:00`
}


res.addEventListener('click',function(e){
  restart();
  hours = 0;
  minutes = 0;
  seconds = 0;
})

//abhi jab icons par click kare toh icons change ho jaye at perwork






