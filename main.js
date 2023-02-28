import { Tamagotchi } from "./modules/Tamagotchi.js";

//Get userinputs from form
const form = document.getElementById('create-tamagotchi-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const userInputs = {};
    const inputElements = form.childNodes;
    inputElements.forEach(node => {
        if (node.name != null && node.name !== '') {
            userInputs[node.name] = node.value;
        }
    })
    const tamagotchi = new Tamagotchi(userInputs.name, userInputs.type);
    console.log(tamagotchi);
});

