// Built in function

//1. Random Number 
// Berfungsi untuk memunculkan bilangan random 
let number = Math.random();
console.log(number);

//2. Round Number 
// Berfungsi untuk membuat bilangan bulat
let number2 = Math.round(Math.random()* 10);
console.log(number2);

//3. toFixed
// Befungsi memunculkan panjang bilangan
let lengthNumber = 129.23;
let number3 = lengthNumber.toFixed(3);
console.log(number3);

//4. indexOf 
// Berfungsi untuk menghitung index awal sebuah string di dalam string yang lain
var str = "Please where locates occurs!";
var pos = str.indexOf('s');
console.log(pos);

//5. lastIndexOf 
// Mencari dan mengembalikan nilai index terakhir dari sebuah element
var str1 = [1,2,3,4,5,6,7,8,6];
var pos1 = str1.lastIndexOf(6);
console.log(pos1);

//6. toString
// Mengubah tipe data number menjadi string
let num = 120;
let string = num.toString();
console.log(string);

//7. charAt
//Menemukan huruf pada index yang ditentukan
let string1 = 'hallo';
let result = string1.charAt(3);
console.log(result);

//8. concat
//Menggabungkan sebuah array
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

//9. sort 
//Mengurutkan sebuah element
let arr4 = [1,4,5,8,6,2,7];
let sortArr = arr4.sort((a,b)=> (b-a));
console.log(sortArr);

//10. getDate 
//Untuk menampilkan waktu spesifik
let date = new Date("2023-01-04");
console.log(date.getDate());



