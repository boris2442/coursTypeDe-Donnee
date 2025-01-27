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