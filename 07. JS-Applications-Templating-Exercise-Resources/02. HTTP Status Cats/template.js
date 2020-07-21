window.addEventListener('load', async () => {

    const mainEl = document.querySelector('#allCats');

    //initialze template
    const listString = await (await fetch('./list.hbs')).text();
    const listTemplate = Handlebars.compile(listString);
    Handlebars.registerPartial('cat', await (await fetch('./cat.hbs')).text());


    //render HTML

    const html = listTemplate({
        cats
    });
    mainEl.innerHTML = html;


    //set up interaction

    mainEl.addEventListener('click', onClick)

    function onClick(e) {

        if (e.target.tagName !== 'BUTTON') {
            return
        }

        const div = e.target.parentNode.querySelector('.status');

        if (div.style.display == 'none') {
            e.target.textContent = 'Hide status code'
            div.style.display = 'block';

        } else {
            e.target.textContent = 'Show status code';
            div.style.display = 'none';
        }






    }




})