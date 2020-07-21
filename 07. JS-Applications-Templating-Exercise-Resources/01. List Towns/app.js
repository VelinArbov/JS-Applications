window.addEventListener('load', () => {
    
    //зареждане на темплейт -> текст
    const templateString = document.querySelector('#main-template').innerHTML;
    document.querySelector('#btnLoadTowns').addEventListener('click', renderTowns)
    const rootEl = document.querySelector('#root');
    const inputTowns = document.querySelector('#towns');
    
    
    function renderTowns(e) {
        e.preventDefault();
        
        const towns = inputTowns.value.split(', ');
        console.log(towns);
        

        //компилиране на темплейта - > функиця
        const templateFn = Handlebars.compile(templateString);

        //изпълнение на теплейта с нашите данни(променливи) -> текст (HTML) =
        const generatedHtml = templateFn({ towns });
       

        //поставяне на генеририраният HTML

        rootEl.innerHTML = generatedHtml;

    }
});