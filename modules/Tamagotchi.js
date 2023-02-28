export class Tamagotchi {
    #name;
    #type;
    #happiness;
    #hunger;
    #isDead = false;
    #happinessDisplay;
    #hungerDisplay;
    #img;
    constructor(name, type) {
        this.#name = name;
        this.#type = type;
        this.#happiness = 10;
        this.#hunger = 10;
        this.#isDead = false;
        this.#displayTamagotchi();
        this.#updateHunger();
        this.#updateHappiness();
    }


    #displayTamagotchi() {
        const tamagotchiContainer = document.getElementById('tamagotchi-container');

        const div = document.createElement('div');
        tamagotchiContainer.append(div);

        const h3 = document.createElement('h3');
        h3.innerText = `${this.#name} the ${this.#type}`;
        div.append(h3);

        this.#img = document.createElement('img');
        this.#img.src = `./images/${this.#type}.png`;
        div.append(this.#img);


        this.#happinessDisplay = document.createElement('b');
        this.#happinessDisplay.innerText = `HAPPINESS: ${this.#happiness}`;
        div.append(this.#happinessDisplay);

        this.#hungerDisplay = document.createElement('b');
        this.#hungerDisplay.innerText = `HUNGER: ${this.#hunger}`;
        div.append(this.#hungerDisplay);


        const playBtn = document.createElement('button');
        playBtn.innerText = 'Play';
        div.append(playBtn);
        playBtn.addEventListener('click', () => {
            this.#play();
        });

        const feedBtn = document.createElement('button');
        feedBtn.innerText = 'Feed';
        div.append(feedBtn);
        feedBtn.addEventListener('click', () => {
            this.#feed();
        });
    }

    #play() {
        if (this.#happiness != 10 && !this.#isDead) {
            this.#happiness++;
            this.#updateGUI();
        }
    }

    #feed() {
        if (this.#hunger != 10 && !this.#isDead) {
            this.#hunger++;
            this.#updateGUI();
        }
    }


    #updateHunger() {
        setInterval(interval => {
            if (this.#hunger > 0 && !this.#isDead) {
                this.#hunger--;
                this.#updateGUI();
            }
            else {
                this.#isDead = true;
                clearInterval(interval);
            }
        }, 2000)
    }

    #updateHappiness() {
        setInterval(interval => {
            if (this.#happiness > 0 && !this.#isDead) {
                this.#happiness--;
                this.#updateGUI();
            }
            else {
                this.#isDead = true;
                clearInterval(interval);
            }
        }, 3000)
    }


    #updateGUI() {
        this.#happinessDisplay.innerText = `HAPPINESS: ${this.#happiness}`;
        this.#hungerDisplay.innerText = `HUNGER: ${this.#hunger}`;

        if (this.#hunger === 0 || this.#happiness === 0) {
            this.#img.src = `./images/coffin.png`;
        }
    }
}