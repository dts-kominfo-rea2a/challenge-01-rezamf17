// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// favorite color karena datanya unik berarti harus menggunakan set, saya sendiri mendefinisikan set diluar dari object first user, lalu di add satu persatu datanya. Begitupula dengan favRestaurant
const colorUser1 = new Set()
colorUser1.add('Yellow')
colorUser1.add('Pink')
colorUser1.add('White')
colorUser1.add('Purple')

const restoUser1 = new Set()
restoUser1.add('Bento')
restoUser1.add('Sushi')
restoUser1.add('Pancake')
restoUser1.add('Eggy')
restoUser1.add('Tempura')
restoUser1.add('Bento')
restoUser1.add('Eggy')
restoUser1.add('Padang')
restoUser1.add('Tteok')
restoUser1.add('Sushi')
restoUser1.add('Sushi')
const firstUser = {
    name : "Monica",
    gender : "Female",
    age : 23,
    email : "monica@dingdong.com",
    favoriteColor : colorUser1,
    isHavePet : true,
    education : [
        {
            name : 'SD 01',
            city : 'Jakarta',
            graduate : 2016
        },
        {
            name : 'SMP 02',
            city : 'Jakarta',
            graduate : 2019
        },
        {
            name : 'SMA 03',
            city : 'Tanggerang',
        },
    ],
    favRestaurant : restoUser1
};
const colorUser2 = new Set()
colorUser2.add('Blue')
colorUser2.add('Black')
colorUser2.add('Grey')

const restoUser2 = new Set()
restoUser2.add('Tempura')
restoUser2.add('Bento')
restoUser2.add('Sushi')
restoUser2.add('Pancake')
restoUser2.add('Padang')
restoUser2.add('Katsu')
restoUser2.add('Geprek')
restoUser2.add('Pancek')
restoUser2.add('Eggy')
const secondUser = {
    name : "Wendy",
    gender : "Male",
    age : 23,
    email : "wendy@dingdong.com",
    favoriteColor : colorUser2,
    isHavePet : false,
    education : [
        {
            name : 'SD 02',
            city : 'Jakarta',
            graduate : 2010
        },
        {
            name : 'SMP 03',
            city : 'Bogor',
            graduate : 2013
        },
        {
            name : 'SMA 01',
            city : 'Surabaya',
            graduate : 2016,
        },
        {
            name : 'Universitas Maju',
            city : 'Tanggerang',
        },
    ],
    favRestaurant : restoUser2
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};