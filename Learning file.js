 'use strict';
        let kohde = document.querySelector('#kohde')
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
        kohde.innerHTML = html */













