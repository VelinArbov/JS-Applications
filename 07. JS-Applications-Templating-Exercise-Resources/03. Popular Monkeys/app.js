import monkeys  from './monkeys.js';


window.addEventListener('load', async () => {

    const monkeysEl = document.querySelector('section');
    
    //initialze template
    const mainString = await (await fetch('./main.hbs')).text();
    const mainTemplate = Handlebars.compile(mainString);

    Handlebars.registerPartial('monkey', await (await fetch('./monkey.hbs')).text());

    //render HTML
    const html = mainTemplate({monkeys});

    monkeysEl.innerHTML = html;

    //set up interaction
   monkeysEl.addEventListener('click', onClick)

    function onClick(e) {

        if (e.target.tagName !== 'BUTTON') {
            return
        }

        const p = e.target.parentNode.querySelector('p')

        if (p.style.display == 'none') {
            e.target.textContent = 'CLOSE';
            p.style.display = 'block';

        } else {
            e.target.textContent = 'INFO';
            
            p.style.display = 'none';
        }






    }




})