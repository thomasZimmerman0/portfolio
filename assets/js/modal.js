const modal_container = document.getElementById("mougals-container");
const close = document.getElementById("close");
const webName = document.getElementById("webName");
const description = document.getElementById("description");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const role = document.getElementById("role");
const tech = document.getElementById("tech");
const linkToSite = document.getElementById("linkToSite");

document.addEventListener("click", (e) => {
  if (e.target.id == "open") {
    if (e.target.title == "whatsinmydrink") {
      webName.textContent = "What's in my Drink";

      description.textContent =
        '"What\'s in my Drink" is an application that was made to make browsing and locating recipies for a multitude of mixed drinks easy to navigate and easy to use. What makes this application truly special is that every drink has a caloric content that is calculated and displayed for each drink. Normally finding this information is tedious, but this application makes the process instantaneous.';

      role.textContent =
        "My Role in this project was to design and implement the primary functions, which was handling and displaying the incoming information for each drink. This required developing a robust unit converter as well as feeding that information into a nutritional api to get the caloric content.";

      img1.innerHTML = `<img src="./assets/img/whatsinmydrink .jpg" alt=""></img>`;

      img2.innerHTML = `<img src="./assets/img/whatsinmydrink1.jpg" alt="">`;

      img3.innerHTML = `<img src="./assets/img/whatsinmydrink2.PNG" alt="">`;

      img4.innerHTML = `<img src="./assets/img/whatsinmydrink3.PNG" alt="">`;

      tech.textContent = "JavaScript, HTML, CSS, REST API's";

      linkToSite.innerHTML = ` <a target="_blank" href="https://whatsinmydrink1.netlify.app/" target="_blank">Click here to visit this website!</a>
                                    <a target="_blank" href="https://github.com/kippHulick/front-end-project" target="_blank">Click here to visit the repository!</a>
            `;
    }
    if (e.target.title == "blackjack") {
      webName.textContent = "BlackJack";

      description.textContent =
        "This is a web-based blackjack game. The user can change their bet amount, hit, stand, double down, and change the deck quantity.";

      role.textContent = "Created independently";

      img1.innerHTML = `<img src="./assets/img/blackjack.jpg" alt=""></img>`;

      img2.innerHTML = `<img src="./assets/img/blackjack1.jpg" alt="">`;

      img3.innerHTML = `<img src="./assets/img/blackjack2.png" alt="">`;

      img4.innerHTML = `<img src="./assets/img/blackjack3.png" alt="">`;

      tech.textContent = "JavaScript, HTML, CSS";

      linkToSite.innerHTML = `<a target="_blank" href="https://tommysblackjacktable.netlify.app/" target="_blank">Click here to visit this website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/blackjack2021" target="_blank">Click here to visit the repository!</a>
            `;
    }
    if (e.target.title == "queen") {
      webName.textContent = "Queen Website";

      description.textContent =
        'This is a website dedicated to the band "Queen". On this website you can navigate through all of their albums and songs. The user also has the ability to leave feedback on the website with a title and a name attached, and talk to other users in a socket.io chatroom.';

      role.textContent = "Created independently";

      img1.innerHTML = `<img src="./assets/img/queenfanpage.jpg" alt=""></img>`;

      img2.innerHTML = `<img src="./assets/img/queenfanpage.PNG" alt="">`;

      img3.innerHTML = `<img src="./assets/img/queenfanpage1.PNG" alt="">`;

      img4.innerHTML = `<img src="./assets/img/queenfanpage2.PNG" alt="">`;

      tech.textContent = "Node.js, EJS, Express, Socket.io, Javascript, CSS";

      linkToSite.innerHTML = `<a  target="_blank" href="https://queenfanpage.herokuapp.com/" target="_blank">Click here to visit this website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/queen_webpage" target="_blank">Click here to visit the repository!</a>
            `;
    }
    if (e.target.title == "drawdotio") {
      webName.textContent = "Draw.io";

      description.textContent =
        "Draw.io is an application that was designed with the purpose of letting the user create an account that they can save drawings they've made to, and follow other users to see their creations. Currently the website is uncompleted; users are able to create digital art, save the art they've made to their account, and follow other users. The user at this point can not edit their previously made artwork, delete their previously made artwork, or see what other users have created.";

      role.textContent =
        "My role in this project was developing most of the backend aspects of the page. I set up the sequelize/ ElephantSQL database used in the application, implimented the passport authentication used on the website, implimented the ability to create new accounts, follow and unfollow users, change your profile picture, and save your drawings to your specific account.";

      img1.innerHTML = `<img src="./assets/img/drawdotio.jpg" alt=""></img>`;

      img2.innerHTML = `<img src="./assets/img/drawdotio1.png" alt="">`;

      img3.innerHTML = `<img src="./assets/img/drawdotio2.png" alt="">`;

      img4.innerHTML = `<img src="./assets/img/drawdotio3.png" alt="">`;

      tech.textContent =
        "Node.js, EJS, Express, ElephantSQL, PostgreSQL, Sequelize, Cloudinary, Canvas, Passport, Javascript, CSS";

      linkToSite.innerHTML = `<a target="_blank" href="https://drawdotio.herokuapp.com/" target="_blank">Click here to visit this website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/Draw.io_Independent" target="_blank">Click here to visit the repository!</a>
            `;
    }
    if (e.target.title == "buylowsellhigh") {
      webName.textContent = "Buy Low Sell High";

      description.textContent =
        "Buy Low Sell High is a React application that uses the MarketStack API to display up-to-date information on stocks from the NASDAQ-100 index. On the page, the user can tap through all of the stocks listed on the page, view all of the stocks that are down 15% or greater of their 4 month average, view all of the stocks up 15% or greater from their 4 month average, search for a symbol, and get more details on the stock by clicking on it. The website is also fully mobile responsive.";

      role.textContent = "This project was completed independently";

      img1.innerHTML = `<img src="./assets/img/buylowsellhigh.jpg" alt=""></img>`;

      img2.innerHTML = `<img src="./assets/img/buylowsellhigh1.jpg" alt="">`;

      img3.innerHTML = `<img src="./assets/img/buylowsellhigh2.jpg" alt="">`;

      img4.innerHTML = `<img src="./assets/img/buylowsellhigh3.jpg" alt="">`;

      tech.textContent =
        "Node.js, React, Express, Redux Toolkit, Chart.js, Javascript, CSS, REST API's";

      linkToSite.innerHTML = `<a target="_blank" href="https://youtu.be/NlmxoqftxZc" target="_blank">Click here to visit a video of this website!</a>
                                    <a target="_blank" href="https://github.com/thomasZimmerman0/buy_low_sell_high" target="_blank">Click here to visit the repository!</a>
            `;
    }

    if (e.target.title == "beautibodega") {
      webName.textContent = "Beauti Bodega";

      description.innerHTML = `
            Beauti Bodega is a mobile first shopping application targeted towards companies who sell beauty products, as well as their customers.
           The application in its current state features a login page, register page, landing page, a products page that allows the user to view all the products available on the
           site, a cart page that allows the user to view all the products they've added to their cart, a brands page that allows the user to navigate through all the brands featured on the site, profile pages that allow the user to view/edit your profile and 
           visit other users' profiles, and pages specific to managers of an individual brand. On the products page, the user can click on a specific product
           which will navigate them to a sub-page that displays more detailed information about the product they clicked on; they will also be able to add that product to their cart at a desired quantity.
           Likewise, once the user selects a brand on the brands page they will be navigated to a sub-page where they can view more detailed information about that brand, as well as all the products that brand has added to the site. 
           <br>
           <br>
           Currently, there are 2 primary user roles on Beauti Bodega: brand admin, and shopper. Every person who registers an account on Beauti Bodega is
           a shopper by default. Shoppers have access to viewing some authorization blocked sub-pages, have the ability to add/remove products from their cart, and have the ability to make changes to their profile.
           A user with a shopper account can also register a brand to Beauti-Bodega which will require them to submit information and a logo for that brand. This action will automatically
           change the user's account from a shopper to a brand admin for the new brand they've created.
           <br>
           <br>
           A brand admin will have the same access and abilities as a shopper, but will also have access to the brand manager pages for their specific brand. 
           On the brand manager pages, the user can add, edit, and delete products for their brand. When products are added, updated, or deleted the changes will be made visible on the products page, and on the specific brand page
           <br>
           <br>
           In a completed version of Beauty Bodega, there would be a 3rd primary role called 'creator'. A user who is a creator would be able to make posts that
           feature an image, description, and links to the beauty products that they are sponsoring or using in their post. All other users on the site would be able
           to follow the creator profiles, and get access to a feed of their posts. Currently, the scaffolding for user editing such as changing profile pictures and tags has been completed, 
           as well as the ability to change a shopper account to a creator account (which will make the account visible to anyone who visits the site), but for all intents and purposes it is a work in progress.
           <br>
           <br>
           The ability for any shopper to switch their account status from a shopper to a brand admin or creator would be replaced with an application that would require a review to see
           if the applicant meets the requirements to be featured as a company or an influencer on Beauti Bodega.`;

      role.textContent = `Completed most backend aspects of this application: installed Sequelize.js and
            Sequelize-CLI, formatted the database schema that is currently present, inputted seeder information, wrote the
            logic for almost all API call routes to the backend. Completed styling and logic for the products pages, brands
            pages, and cart page. Completed all of the create, read, update, delete functionality for the ‘brand-admin’ pages
            that allowed product manipulation for a specific brand. Completed setting up the Firebase image uploading that
            is present on multiple pages.`;

      img1.innerHTML = `<img src="./assets/img/beauti_bodega.png" alt=""></img>`;

      img2.innerHTML = `<img src="./assets/img/beauti_bodega1.png" alt="">`;

      img3.innerHTML = `<img src="./assets/img/beauti_bodega2.png" alt="">`;

      img4.innerHTML = `<img src="./assets/img/beauti_bodega3.png" alt="">`;

      tech.textContent =
        "TypeScript, Node.js, React, CSS, Tailwind, Express.js, PostgreSQL, ElephantSQL, Firebase, Sequelize.js, Redux Toolit";

      linkToSite.innerHTML = `<a target="_blank" href="" target="_blank">Click here to visit a video this website!</a>`;
      linkToSite.innerHTML = `<a target="_blank" href="https://github.com/sharnee/beautibodega-v0" target="_blank">Click here to visit the repository!</a>`;
    }

    webName.scrollIntoView();
    modal_container.classList.add("show");
  }
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});
