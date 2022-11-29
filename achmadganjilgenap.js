const input = require('readline-sync');

var MasukkanNilai = input.questionInt('Masukkan angka = ');

if(MasukkanNilai & 2) {
    console.log('Bilangan Genap');
} else {
    console.log('Bilangan Ganjil');
}
