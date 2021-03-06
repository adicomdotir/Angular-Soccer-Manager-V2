export class NameGenerator {
    static FIRSTNAME = [
        'Abbas',
        'Akbar',
        'Ali',
        'AliReza',
        'Amin',
        'Amir',
        'Amir Mohammad',
        'AmirReza',
        'Anooshirvan',
        'Arash',
        'Arman',
        'Arsalan',
        'Bagher',
        'Bahram',
        'Behnam',
        'Behrad',
        'Behrouz',
        'Benyamin',
        'Bijan',
        'Changiz',
        'Ebrahim',
        'Erfan',
        'Esfandiyar',
        'Esmaeel',
        'Faramarz',
        'Fariborz',
        'Farid',
        'Farrokh',
        'Farzad',
        'Fazel',
        'Ferdous',
        'Firooz',
        'Habib',
        'Hadi',
        'Hamed',
        'Hassan',
        'Hesam',
        'Heydar',
        'Homayoun',
        'Hooman',
        'Hossein',
        'Houshang',
        'Jahangir',
        'Kambiz',
        'Kamran',
        'Kannan',
        'Kazem',
        'Keyhan',
        'Keykavous',
        'Khashayar',
        'Kioumars',
        'Latif',
        'Mahdi',
        'Mahyar',
        'Majid',
        'Mamad',
        'Mani',
        'Manouchehr',
        'Mehdi',
        'Mehran',
        'Moein',
        'MohammadReza',
        'Mohsen',
        'Mojtaba',
        'Morteza',
        'Mostafa',
        'Nima',
        'Nouzar',
        'Parsa',
        'Payam',
        'Pejman',
        'Peyman',
        'Pouya',
        'Qobad',
        'Rasoul',
        'Rostam',
        'Sadeq',
        'Saeed',
        'Sahand',
        'Sajjad',
        'Saman',
        'Sasan',
        'Sepand',
        'Shadmehr',
        'Siavash',
        'Sirvan',
        'Soroosh',
        'Taghi',
        'Vahid',
        'Yashar'
    ];

    static LASTNAME = [
        'Abbasi',
        'Abdi',
        'Abdollahi',
        'Afshani',
        'Afshar',
        'Ahangar',
        'Ahmadi',
        'Akbari',
        'Alizadeh',
        'Almasi',
        'Amini',
        'Amiri',
        'Arab',
        'Asadi',
        'Asgari',
        'Askari',
        'Atlasi',
        'Azimi',
        'Azizi',
        'Babaei',
        'Bagheri',
        'Bahadori',
        'Bahrami',
        'Barbarz',
        'Bayat',
        'Behdad',
        'Bina',
        'Blourian',
        'Danesh',
        'Dara',
        'Dehghan',
        'Dehghani',
        'Ebrahimi',
        'Entezami',
        'Eskandari',
        'Esmaeili',
        'Faghih',
        'Fallah',
        'Fathi',
        'Foroutan',
        'Freydooni',
        'Ghaderi',
        'Ghaffari',
        'Ghanbari',
        'Ghasemi',
        'Gholami',
        'Ghorbani',
        'Golzar',
        'Goodarzi',
        'Habibi',
        'Haghighi',
        'Haghjoo',
        'Haghshenas',
        'Hajar',
        'Haji',
        'Hasani',
        'Hashemi',
        'Hedayati',
        'Heydari',
        'Hosseini',
        'Hosseinzadeh',
        'Jafari',
        'Jalali',
        'Karami',
        'Karimi',
        'Kashkouli',
        'Kaviani',
        'Kazemi',
        'Keramati',
        'Khaledi',
        'Khalili',
        'Khosravi',
        'Kiani',
        'Kianian',
        'Layegh',
        'Lorestani',
        'Lotfi',
        'Mahmoodi',
        'Mahmoudi',
        'Maleki',
        'Manesh',
        'Mansouri',
        'Mashayekhi',
        'Mehrjoo',
        'Mir',
        'Miri',
        'Mirzaei',
        'Mirzaie',
        'Mirzaii',
        'Moghadam',
        'Mohammad',
        'Mohammadi',
        'Mohammadzadeh',
        'Momeni',
        'Moradi',
        'Moshiri',
        'Mostofi',
        'Mousavi',
        'Mozafari',
        'Naderi',
        'Najafi',
        'Nasseri',
        'Nassiri',
        'Nassirian',
        'Nassour',
        'Nazari',
        'Nazeri',
        'Nemati',
        'Norouzi',
        'Nouri',
        'Nouzari',
        'Pahlevan',
        'Pasdar',
        'Poozesh',
        'Pour',
        'Qaderi',
        'Qasemi',
        'Radish',
        'Raeisi',
        'Rahimi',
        'Rahmani',
        'Rajabi',
        'Ramezani',
        'Ranjbar',
        'Rashidi',
        'Rasooli',
        'Razaee',
        'Razaie',
        'Razavian',
        'Rezaei',
        'Riahi',
        'Rigi',
        'Rostami',
        'Rouhani',
        'Sadeghi',
        'Sadiq',
        'Saeedi',
        'Safari',
        'Saharkhiz',
        'Salari',
        'Salehi',
        'Salimi',
        'Sayyadi',
        'Shabani',
        'Shafiee',
        'Shah',
        'Sharifi',
        'Sheikh',
        'Shokoohi',
        'Soleimani',
        'Soleymani',
        'Soltani',
        'Tabatabaii',
        'Taheri',
        'Tajik',
        'Tarokh',
        'Tavakoli',
        'Teymoori',
        'Vossoughi',
        'Yousefi',
        'Zamani',
        'Zare',
        'Zarei',
        'Zareii',
        'Zarqan'
    ];

    static getFullName() {
        return this.getFirstName() + ' ' + this.getLastName();
    }

    static getFirstName() {
        const rnd = Math.floor(Math.random() * this.FIRSTNAME.length);
        return this.FIRSTNAME[rnd];
    }

    static getLastName() {
        const rnd = Math.floor(Math.random() * this.LASTNAME.length);
        return this.LASTNAME[rnd];
    }
}

export const TeamNames = [
    'Esteghlal',
    'Persepolis',
    'Sepahan',
    'Zob Ahan',
    'Foolad',
    'Saipa',
    'Tractor',
    'Saba Qom',
    'Paykan',
    'Malavan',
    'Fajr Sepasi',
    'Rah Ahan',
    'Naft Tehran',
    'Mes Kerman',
    'Aboomoslem',
    'Sanat Naft',
    'Esteghlal Ahvaz',
    'Bargh Shiraz',
    'Damash',
    'Shahr Khodro',
    'Esteghlal Khuzestan',
    'Gostaresh Foulad',
    'PAS Hamedan',
    'Shahin Bushehr',
    'Pars Jonoubi Jam',
    'Naft Masjed Soleyman',
    'Steel Azin',
    'Machine Sazi',
    'Nassaji Mazandaran',
    'Shamoushak Noshahr',
    'Siah Jamegan',
    'Shahrdari Tabriz',
    'Sepidrood',
    'Aluminium Hormozgan',
    'Payam',
    'Gol Gohar Sirjan',
    'Mes Sarcheshmeh',
    'Rahian Kermanshah',
    'Tarbiat Yazd',
    'Gahar Zagros',
    'Mes Rafsanjan',
    'Aluminium Arak'
];
