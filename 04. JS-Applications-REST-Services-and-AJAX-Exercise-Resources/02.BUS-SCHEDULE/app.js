function solve() {

    const baseUrl = "https://judgetests.firebaseio.com/schedule/${currentId}.json ";
    const elements = {
        departButton() {
            return document.querySelector(`input#depart`)
        },
        arriveButton() {
            return document.querySelector(`input#arrive`)
        },
        info() {
            return document.querySelector(`div#info`)
        }



    };

    let currentName = "";
    let currentId = "depot";

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentId}.json`)
            .then(res => res.json())
            .then(data => {
                if (data !== null) {
                    elements.info().textContent = `Next stop ${data.name}`;
                    currentId = data.next;
                    currentName = data.name;
                    elements.departButton().disabled = true;
                    elements.arriveButton().disabled = false;
                } else {
                    throw Error("Invalid data received");
                }
            })
            .catch((err) => {
                infoElement.textContent = err;
                elements.departButton().disabled = true;
                elements.arriveButton().disabled = true;
            })
    }

    function arrive() {
        elements.info().textContent = `Arriving at ${currentName}`;
        elements.departButton().disabled = false;
        elements.arriveButton().disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();