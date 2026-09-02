const root = document.getElementById('root');
const button = document.getElementById('btn');

const h2 = document.createElement('h2');
const h1 = document.createElement('h1');
const img = document.createElement('img');
const div = document.createElement('div');

function getData() {
    try {
        img.src = "https://images.unsplash.com/photo-1592150621744-aca64f48394a";
        img.width = 500;
        img.height = 500;

        h2.innerText = "ABES ENGINEERING COLLEGE";
        h2.style.color = "red";
        h2.style.backgroundColor = "cyan";

        h1.innerHTML = '<span style="color:blue">WELCOME TO DOM MANIPULATION</span>';

        div.style.border = "2px solid black";

        div.appendChild(img);
        div.appendChild(h2);
        div.appendChild(h1);

        root.appendChild(div);
    } 
    catch (error) {
        console.log(error);
    } 
    finally {
        root.removeChild(button);
    }
}

button.addEventListener('click', getData);