// resources
let resources = {
    p1: {
        title: 'Coffee Beans',
        bodyText: 'Coffee beans is the probably the most important item you need to have your coffee, or else there is no coffee, there many types of coffee in the world such as Robusta, Arabica, Liberica, Excelsa and many more.',
        url: 'img/beans.jpg'
    },
    p2: {
        title: 'Coffee Machine',
        bodyText: 'Coffee Machines are also another essential item to have your coffee, there are many types of machines to grind coffee, and the price ranges from a couple hundred dollars, to thousands and thousands of dollars.',
        url: 'img/machine.jpg'
    },
    p3: {
        title: 'Coffee Mug',
        bodyText: 'A Coffee Mug or a Cup is also another essential item to have your coffee, unless you drink it straight from the machine which would be weird dont you think? all jokes aside, you do need a cup or a mug to have your coffee, which completes all the 3 items to have your everyday coffee.',
        url: 'img/mugs.jpg'
    }
}

// get the references to the active parts of html

let dc = document.getElementById('dynamic-content');
let controls = document.getElementById('controls');
let btns = controls.children;

// event handler
function selectPage(ev) {
    let currentButton = ev.target;
    for (let btn of btns) {
        if (btn.hasAttribute('class')) {
            btn.removeAttribute('class')
        }
    }

    currentButton.setAttribute('class', 'active');
    // console.log(currentButton.id);

    // styling the active button here:
    


    // pushing the corresponding data inside the div#dynamic-content:
    dc.innerHTML = `
    <h2>${resources[currentButton.id].title}</h2> 
    <p>${resources[currentButton.id].bodyText}</p>
    <img src="${resources[currentButton.id].url}">
    `;    
}

document.addEventListener('DOMContentLoaded', (even) => {
    dc.innerHTML = `
    <h2>${resources.p1.title}</h2> 
    <p>${resources.p1.bodyText}</p>
    <img src="${resources.p1.url}">
    `; 
});

// registering buttons for click event
btns[0].addEventListener('click',selectPage);
btns[1].addEventListener('click',selectPage);
btns[2].addEventListener('click',selectPage);

/*
for (let button of button) {
    button.addEventListener('click' , selectPage);
}
    */