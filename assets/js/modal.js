const modal_container = document.getElementById('mougals-container');
const close = document.getElementById('close');
const webName = document.getElementById('webName');
const description = document.getElementById('description');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const role = document.getElementById('role');
const tech = document.getElementById('tech');
const linkToSite = document.getElementById('linkToSite');


document.addEventListener('click', e =>{
    if(e.target.id == 'open'){

        if(e.target.title == 'whatsinmydrink'){

            webName.textContent = "What's in my Drink"

            description.textContent = "\"What's in my Drink\" is an application that was made to make browsing and locating recipies for a multitude of mixed drinks easy to navigate and easy to use. What makes this application truly special is that every drink has a caloric content that is calculated and displayed for each drink. Normally finding this information is tedious, but this application makes the process instantaneous."

            role.textContent = "My Role in this project was to design and implement the primary functions, which was handling and displaying the incoming information for each drink. This required developing a robust unit converter as well as feeding that information into a nutritional api to get the caloric content."

            img1.innerHTML = `<img src="./assets/img/whatsinmydrink .jpg" alt=""></img>`

            img2.innerHTML = `<img src="./assets/img/whatsinmydrink1.jpg" alt="">`

            img3.innerHTML = `<img src="./assets/img/whatsinmydrink2.PNG" alt="">`

            img4.innerHTML = `<img src="./assets/img/whatsinmydrink3.PNG" alt="">`

            tech.textContent = "JavaScript, HTML, CSS, REST API's"

            linkToSite.innerHTML = ` <a target="_blank" href="https://whatsinmydrink1.netlify.app/" target="_blank">Click Here To Visit This Website!</a>
                                    <a target="_blank" href="https://github.com/kippHulick/front-end-project" target="_blank">Click Here To View the Repo!</a>
            `
        }
        if(e.target.title == 'blackjack'){

            webName.textContent = "BlackJack"

            description.textContent = "This is a web-based blackjack game. The user can change their bet amount, hit, stand, double down, and change the deck quantity."

            role.textContent = "Created independently"

            img1.innerHTML = `<img src="./assets/img/blackjack.jpg" alt=""></img>`

            img2.innerHTML = `<img src="./assets/img/blackjack1.jpg" alt="">`

            img3.innerHTML = `<img src="./assets/img/blackjack2.png" alt="">`

            img4.innerHTML = `<img src="./assets/img/blackjack3.png" alt="">`

            tech.textContent = "JavaScript, HTML, CSS"

            linkToSite.innerHTML = `<a target="_blank" href="https://tommysblackjacktable.netlify.app/" target="_blank">Click Here To Visit This Website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/blackjack2021" target="_blank">Click Here To View the Repo!</a>
            `
        }
        if(e.target.title == 'queen'){

            webName.textContent = "Queen Website"

            description.textContent = "This is a website dedicated to the band \"Queen\". On this website you can navigate through all of their albums and songs. The user also has the ability to leave feedback on the website with a title and a name attached, and talk to other users in a socket.io chatroom."

            role.textContent = "Created independently"

            img1.innerHTML = `<img src="./assets/img/queenfanpage.jpg" alt=""></img>`

            img2.innerHTML = `<img src="./assets/img/queenfanpage.PNG" alt="">`

            img3.innerHTML = `<img src="./assets/img/queenfanpage1.PNG" alt="">`

            img4.innerHTML = `<img src="./assets/img/queenfanpage2.PNG" alt="">`

            tech.textContent = "Node.js, EJS, Express, Socket.io, Javascript, CSS"

            linkToSite.innerHTML = `<a  target="_blank" href="https://queenfanpage.herokuapp.com/" target="_blank">Click Here To Visit This Website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/queen_webpage" target="_blank">Click Here To View the Repo!</a>
            `
        }
        if(e.target.title == 'drawdotio'){

            webName.textContent = "Draw.io"

            description.textContent = "Draw.io is an application that was designed with the purpose of letting the user create an account that they can save drawings they've made to, and follow other users to see their creations. Currently the website is uncompleted; users are able to create digital art, save the art they've made to their account, and follow other users. The user at this point can not edit their previously made artwork, delete their previously made artwork, or see what other users have created."

            role.textContent = "My role in this project was developing most of the backend aspects of the page. I set up the sequelize/ ElephantSQL database used in the application, implimented the passport authentication used on the website, implimented the ability to create new accounts, follow and unfollow users, change your profile picture, and save your drawings to your specific account."

            img1.innerHTML = `<img src="./assets/img/drawdotio.jpg" alt=""></img>`

            img2.innerHTML = `<img src="./assets/img/drawdotio1.png" alt="">`

            img3.innerHTML = `<img src="./assets/img/drawdotio2.png" alt="">`

            img4.innerHTML = `<img src="./assets/img/drawdotio3.png" alt="">`

            tech.textContent = "Node.js, EJS, Express, ElephantSQL, Sequelize, Cloudinary, Canvas, Passport, Javascript, CSS"

            linkToSite.innerHTML = `<a target="_blank" href="https://drawdotio.herokuapp.com/" target="_blank">Click Here To Visit This Website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/Draw.io_Independent" target="_blank">Click Here To View the Repo!</a>
            `
        }
        if(e.target.title == 'buylowsellhigh'){

            webName.textContent = "Buy Low Sell High"

            description.textContent = "Buy Low Sell High is a React application that uses the MarketStack API to display up-to-date information on stocks from the NASDAQ-100 index. On the page, the user can tap through all of the stocks listed on the page, view all of the stocks that are down 15% or greater of their 4 month average, view all of the stocks up 15% or greater from their 4 month average, search for a symbol, and get more details on the stock by clicking on it. The website is also fully mobile responsive."

            role.textContent = "This project was completed independently"

            img1.innerHTML = `<img src="./assets/img/buylowsellhigh.jpg" alt=""></img>`

            img2.innerHTML = `<img src="./assets/img/buylowsellhigh1.jpg" alt="">`

            img3.innerHTML = `<img src="./assets/img/buylowsellhigh2.jpg" alt="">`

            img4.innerHTML = `<img src="./assets/img/buylowsellhigh3.jpg" alt="">`

            tech.textContent = "Node.js, React, Express, Redux Toolkit, Chart.js, Javascript, CSS, REST API's"

            linkToSite.innerHTML = `<a target="_blank" href="" target="_blank">Click Here To View a Video of the Website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/buy_low_sell_high" target="_blank">Click Here To View the Repo!</a>
            `
        }

        modal_container.classList.add('show');
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})

