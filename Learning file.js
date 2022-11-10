'use strict';
let kohde = document.querySelector('#kohde')
/*let kohdekaks = document.querySelector('#2kohde')
 /* tehtävä 2
console.log('Voisitko toimia.');
document.querySelector(
'#otsikko').innerHTML =
'TESTIOTSIKKO';

const name = prompt('Type your name.');
console.log('NOH TERVETULLOO ' + name, 'KALJAASIIN 3 PÄIVÄÄ'),
document.querySelector('#kohde').innerHTML = 'Moro miten menee ' + name;
*//* tehtävä 3
let firstnumber = parseInt(prompt('Kirjota eka numero.'));
let secondnumber = parseInt(prompt('Kirjota toinen numero.'));
let thirdnumber = parseInt(prompt('Kirjota kolmas numero.'));

let summa = firstnumber + secondnumber + thirdnumber
let tulo = firstnumber * secondnumber * thirdnumber
let ka = summa / 3
kohde.innerHTML = 'summa = ' + summa + ', tulo = ' + tulo + ', keskiarvo = ' + ka
*/
/* tehtävä 5
let v = parseInt(prompt('Anna vuosiluku'))
if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
{
kohde.innerHTML = 'Vuosi on karkausvuosi'
 }
else
{
kohde.innerHTML = 'Vuosi ei ole karkausvuosi'
}

*/ /* tehtävä 8
let alku = parseInt(prompt('Anna alkuvuosi'))
let loppu = parseInt(prompt('Anna loppuvuosi'))
let html = '<ul>';
for(let v = alku; v <= loppu; v++)
{
if ((v % 4 == 0 && v % 100 != 0) || (v % 400 == 0))
{
html += ' <li>';
html += v;
html += '</li>'
}
}
html += '</ul>';
kohde.innerHTML = html *//* TEHTÄVÄ4
const name = prompt('Type your name.');

let result = Math.floor(Math.random()*4)+1;
{
if (result === 1)
    kohde.innerHTML =   name + ', you are Gryffindor';

else if(result === 2)
    kohde.innerHTML =   name + ', you are Slytherin';

else if (result === 3)
    kohde.innerHTML =   name + ', you are Hufflepuff';

else if(result === 4)
    kohde.innerHTML = name + ', you are Ravenclaw';
}*/
/*tehtävät 6
let kysymys = confirm('Should I calculate the square root?')

    if (kysymys == false)
    {
        kohde.innerHTML = 'The square root is not calculated.';
    }
    else
    {
        let numero = parseInt(prompt('Give number.'))
        if (numero < 0 )
        {
            kohde.innerHTML = 'The square root of a negative number is not defined'
        }
        else
        {
            let result = Math.sqrt(numero);
            kohde.innerHTML = 'Square ' + numero + ' is ' + result;
        }
    }*/
/* tehtävä 7
let noppamaara = parseInt(prompt('Give number of dices.'))
let summa = 0
for (let v = 0; v != noppamaara; v++)
{
    let noppanumero =  Math.floor(Math.random()*6)+1
    summa = summa + noppanumero
}
kohde.innerHTML = 'Dices result is,' + summa;*/
/* tehtävä 9

let primenum = true;
const num = parseInt(prompt("Give number!!!"));

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            primenum = false;
            break;
        }
    }

    if (primenum) {
        kohde.innerHTML = num + " is a prime number";
    } else {
        kohde.innerHTML = num + " is not a prime number";
    }
}
else {
    kohde.innerHTML = num + " is not a prime number";
}*//*Tehtävä 10*/











