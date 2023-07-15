let name = prompt("Ismingizni kiriting")
while(!isNaN(name)){
    name = prompt("Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring")
}
let birthDate = +prompt("Tug'ilgan yilingizni kiriting")
while(isNaN(birthDate)){
    birthDate = +prompt("Xato! Iltimos, qaytadan urinib ko'ring")
}
 let currentYear = +prompt("Hozirgi yilni kiriting")
 while(isNaN(currentYear)){
    currentYear = +prompt("Xato! Iltimos, qaytadan urinib ko'ring")
 }

 function age(params) {
    return currentYear-birthDate 
 }
 console.log(name + ", sizning yoshingiz " + age() + " da");
 

