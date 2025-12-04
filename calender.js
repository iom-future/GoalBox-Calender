

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
let userMonth = "june"//||Object.keys(monthIndex)[dateDefault.getMonth()];
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

    let i = 1;
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
// //Calender interface
let calenderTemplate = `
      S     M       T          W          T         F       S
    ${p1} | ${p2} ${p3}      ${p4}      ${p5}     ${p6}   ${p7} 
    ${p8} | ${p9} ${p10}     ${p11}     ${p12}    ${p13}  ${p14} 
    ${p15}| ${p16} ${p17}     ${p18}     ${p19}    ${p20}  ${p21} 
    ${p22}| ${p23} ${p24}     ${p25}     ${p26}    ${p27}  ${p28} 
    ${p29}| ${p30} ${p31}     ${p32}     ${p33}    ${p34}  ${p35}   
                    
`;

console.log(calenderTemplate);