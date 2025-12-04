

let monthIndex ={
    january:0,
    february:1,
    march: 2,
    april: 3,
    may:4,
    june:5,
    july:6,
    august:7,
    september:8,
    october:9,
    november:10,
    december:11
}

let day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
let dateDefault = new Date;
let userMonth = "december"//||Object.keys(monthIndex)[dateDefault.getMonth()];
let userYear = 2025||dateDefault.getYear()
let date = new Date(userYear,monthIndex[userMonth],1);//year,month,day(1-31)
let dayOfWeek = date.getDay();  //gets the index of the day of the week sunday=0,monday=1 
console.log(`month index is: ${monthIndex[userMonth]}`);
console.log(`the user month : ${userMonth}`)
console.log(`day of the week that 1 of userMonth falls in: ${dayOfWeek} which is ${day[dayOfWeek]}`);

let thirtyDaysMonth= ["september","april","june","november"];
let thirtyDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,""];
let thirtyOneDays = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
let februaryDays = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, "", "", ""
];


    //append empty spaces for days(monday,tuesday...) with no number(1,2,3,4)
  function getCalenderArray() {
    let baseArray;

    if (thirtyDaysMonth.includes(userMonth)) {
        baseArray = [...thirtyDays]; 
    }else if(userMonth==="february"){
       baseArray = [...februaryDays]; 
    }
         else {
        baseArray = [...thirtyOneDays]; 
    }

    let i = 0;
    while (i < dayOfWeek) {
        baseArray.unshift("");
        i++;
    }

    return baseArray;
}


//destructure into the place holder variable
let [p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,p23,p24,p25,p26,p27,p28,p29
    ,p30,p31,p32="",p33="",p34="",p35=""] = getCalenderArray();
console.log(getCalenderArray());
let month =document.querySelector(".month");
let year = document.querySelector(".year");
month.textContent = userMonth.charAt(0).toUpperCase()+userMonth.slice(1);
year.textContent = userYear;
// //Calender interface
let calender = document.querySelector(".calender-container");
calender.innerHTML = `
<h3 class="text-red-500">S</h3>
<h3>M</h3>
<h3>T</h3>
<h3>W</h3>
<h3>T</h3>
<h3>F</h3>
<h3>S</h3>
<div class="date">${p1}</div>
<div class="date">${p2}</div>
<div class="date">${p3}</div>
<div class="date">${p4}</div>
<div class="date">${p5}</div>
<div class="date">${p6}</div>

<div class="date">${p7}</div>
<div class="date">${p8}</div>
<div class="date">${p9}</div>
<div class="date">${p10}</div>
<div class="date">${p11}</div>
<div class="date">${p12}</div>
<div class="date">${p13}</div>
<div class="date">${p14}</div>
<div class="date">${p15}</div>
<div class="date">${p16}</div>
<div class="date">${p17}</div>
<div class="date">${p18}</div>
<div class="date">${p19}</div>
<div class="date">${p20}</div>
<div class="date">${p21}</div>
<div class="date">${p22}</div>
<div class="date">${p23}</div>
<div class="date">${p24}</div>
<div class="date">${p25}</div>
<div class="date">${p26}</div>
<div class="date">${p27}</div>
<div class="date">${p28}</div>
<div class="date">${p29}</div>
<div class="date">${p30}</div>
<div class="date">${p31}</div>
<div class="date">${p32}</div>
<div class="date">${p33}</div>
<div class="date">${p34}</div>
<div class="date">${p35}</div>
                    
`;

console.log(calender);