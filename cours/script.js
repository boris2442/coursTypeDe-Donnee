let string="chaine";
console.log(typeof(string));

let number=42;
console.log(number);

let boolean=true;
console.log(boolean);

let object_null=null;
console.log(object_null);

let array=[1, 2, 3];
let nbre;
console.log(nbre);
//les tableaux

let array2=['Bafou', 'Batie', 'Bafang'];
console.log(array2[0][2]);

console.log(array2.length);
//tableaux2

let array3=['Bafou', 42, true, 'bamenda', null];

let person={
    nom:"simo",
    age:42,
    istrue:42,
    city:"bafang",
    inNull:null
    
}
console.log(person)

let array4=['bafou', 52, true, 'bafang', 'bamenda', null, {
    name:'Myrador',
    age:42,
}  ]

//affiche 42

console.log(array4[6].age);
console.log(array4[4]);

let object2={
    firstname: "rosto",
  lastname: "dev",
  age: 29,
  technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
  admin: false
}
console.log(typeof(object2));

//affichage du react.js

console.log(object2.technos[2]);

//ajout d'ue donnee dams l'object

object2.adress='bafoussam';
console.log(object2);


// GENIE INFORMATIQUE : CANADIENNE, [27/01/2025 16:01]
// Stocké les données
let data = [
  {
    firstname: "rosto1",
    lastname: "dev1",
    age: 30,
    technos: ["Javascript", "NodeJs", "React", "laravel", "Flutter"],
    adress: "MarchéB",
    admin: false
  },
  {
    firstname: "rosto2",
    lastname: "dev2",
    age: 29,
    technos: ["Php", "NodeJs", "React", "Python", "Flutter"],
    admin: false
  },
  {
    firstname: "rosto3",
    lastname: "dev3",
    age: 32,
    technos: ["CSS", "NodeJs", "React", "Taillwindcss", "Flutter"],
    admin: true
  },
];

console.log(data[2]);

//structure de controles

if(data[0].age>data[1].age) {
    console.log(data[0].firstname + "est plus agé que" +data[1].firstname );
}