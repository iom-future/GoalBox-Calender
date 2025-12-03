// //Calender interface
// let calenderTemplate = ` sunday  monday  tuesday   wednesday  thursday  friday  saturday
//                          ${p1}   ${p2}   ${p3}      ${p4}      ${p5}     ${p6}   ${p7} 
//                          ${p8}   ${p9}   ${p10}     ${p11}     ${p12}    ${p13}  ${p14} 
//                          ${p15}  ${p16}  ${p17}     ${p18}     ${p19}    ${p20}  ${p21} 
//                          ${p22}  ${p23}  ${p24}     ${p25}     ${p26}    ${p27}  ${p28} 
//                          ${p29}  ${p30}  ${p31}     ${p32}     ${p33}    ${p34}  ${p35}   
                    
// `;
let dateDefault = new Date;
let userMonth = "january";
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
let userYear = 2025||dateDefault.getYear()
let date = new Date(userYear,monthIndex.january);
let dayOfWeek = date.getDay();
console.log(monthIndex[userMonth]);
console.log(userMonth)
console.log(dayOfWeek);
