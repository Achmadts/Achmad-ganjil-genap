const input = require('readline-sync');

var MasukkanNilai1 = input.questionInt('Masukkan angka = ');

if(MasukkanNilai1 % 2 == 0) {
    console.log('Bilangan Genap');
}else{
    console.log('Bilangan Ganjil');
}
