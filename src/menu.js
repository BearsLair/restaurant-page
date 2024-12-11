const menuPage = () => {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = "";

  const breakfastItems = [
    {
      title: "Breakfast Sausage",
      description:
        "Yummy sausage with a side of french toast and scrambed eggs!",
      price: "$5",
      img: "https://www.allrecipes.com/thmb/rXk2dDejYiP_9-k7UuVhWebP8RI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/16359-breakfast-sausage-DDMFS-4x3-b2172456aa614158a0c5e710a75215ae.jpg",
    },
    {
      title: "Tater Tot and Bacon Casserole",
      description: "Tasty tater tots with yummy bacon mixed in!",
      price: "$6",
      img: "https://www.allrecipes.com/thmb/BV5mYDdqNPYFGENOOzMMXJhMcqE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/242266-tater-tot-and-bacon-breakfast-casserole-DDMFS-4x3-0949-web-ad45516f699d433d9cca0a274db3193d.jpg",
    },
    {
      title: "Hashbrown Casserole",
      description: "Delicious hashbrowns with a side of bacon!",
      price: "$5",
      img: "https://www.allrecipes.com/thmb/soNhJ3_crvoap-knlQZkzMsE2GI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-13755-restaurant-style-hashbrown-casserole-DDMFS-4x3-beauty-d1eaa488be8440b184ab08ecec024dda.jpg",
    },
  ];

  const lunchItems = [
    {
      title: "Hamburger and Fries",
      description: "A tasty burger with a side of fries to quench your hunger!",
      price: "$5",
      img: "https://www.allrecipes.com/thmb/GvGzAzmqmTiCFP9AIisrHZav_Gw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Copycat-Burger-and-Fries-2000-b09140d301434155bda5a8c8a40f5e95.jpeg",
    },
    {
      title: "Pepperoni Pizza",
      description: "Delicious pepperoni pizza straight from the oven!",
      price: "$5",
      img: "https://www.allrecipes.com/thmb/elr9t2Z5eEgUXLkeuoGlNoHaFCo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/240376-homemade-pepperoni-pizza-Beauty-3x4-1-6ae54059c23348b3b9a703b6a3067a44.jpg",
    },
    {
      title: "Garlic Fried Chicken",
      description: "Yummy chicken with a touch of garlic!",
      price: "5",
      img: "https://www.allrecipes.com/thmb/iZux-ViM7XK6HoGMj8ewKYZ5aWk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/8349113-garlic-chicken-fried-chicken-Tacita-Lady_T-Beautiful-1x1-1-434fa1b59efc48db9a0a351322e3f45a.jpg",
    },
  ];

  const dinnerItems = [
    {
      title: "Shrimp Scampi",
      description: "Delicious, fresh shrimp from the coast!",
      price: "$6",
      img: "https://www.allrecipes.com/thmb/Qh-6yn3w6XmlesqOLw7_laWDdtg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-8730066-copycat-red-lobster-shrimp-scampi-recipe-VAT-4x3-2lowerangle-2ea7c4b615f04459a0aea17fd28d9778.jpg",
    },
    {
      title: "Salisbury Steak",
      description: "Mouth-watering steak with a side of green beans!",
      price: "$7",
      img: "https://www.allrecipes.com/thmb/A4tAzNRV95i8DyOT-yxIkOegMBo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-RM-14595-salisbury-steak-ddmfs-3x4-9ed23d6ffebe4448abf1ef7e22c75e3f.jpg",
    },
    {
      title: "Salmon Caesar Salad",
      description: "Yummy salmon on caesar salad!",
      price: "7",
      img: "https://www.allrecipes.com/thmb/mpQEuxtI6vtjV8pHFjU6W96ueg0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/8667191_Salmon-Caesar-Salad_TheDailyGourmet_4x3-8d07bcf4c39b474fa9bd71385d909e5e.jpg",
    },
  ];

  const beverageItems = [
    {
      title: "Mocha Coffee",
      description: "Have some mocha to brighten up your day!",
      price: "$3",
      img: "https://www.allrecipes.com/thmb/35UZt_xp3xYU41NzrZL5aEYbeD8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/23538-mocha-coffee-ddmfs-4x3-1-e3a40f5fe05f40e0abf0faa01293f211.jpg",
    },
    {
      title: "Citrus-Honey Green Tea",
      description: "Soothing green tie for your relaxation!",
      price: "$2.50",
      img: "https://www.allrecipes.com/thmb/jw7H7Kb-MIRAOJDZDVMeGiYhls4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/3897307-efff5a5eb3c6428596f5da2f857b40b7.jpg",
    },
    {
      title: "Fresh Orange Juice",
      description: "Fresh, mouth-watering orange juice just for you!",
      price: "$2.50",
      img: "https://www.allrecipes.com/thmb/e8umKwWy2qeyFqRgafkwllVuYkQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-8922-fresh-orange-juice-DDMFS-4x3-5ddc816f82c9417db63e5176a60305b4.jpg",
    },
  ];

  const title = document.createElement("h1");
  const titleText = document.createTextNode("Menu");
  title.appendChild(titleText);
  mainContent.appendChild(title);

  const menuItems = document.createElement("div");
  mainContent.appendChild(menuItems);
  menuItems.classList.add("menuItems");

  const breakfastList = document.createElement("div");
  menuItems.appendChild(breakfastList);
  breakfastList.classList.add("breakfastList");
  const breakfastTitle = document.createElement("h3");
  breakfastList.appendChild(breakfastTitle);
  breakfastTitle.classList.add("menuTitle");
  const breakfastText = document.createTextNode("Breakfast");
  breakfastTitle.appendChild(breakfastText);

  breakfastItems.map((item) => {
    const itemContent = `
          <h3 class="item-title">${item.title}</h3><p class="item-desc">${item.description}</p><p class="item-price">${item.price}</p><img class="item-img" src=${item.img} />`;
    breakfastList.innerHTML += itemContent;
  });

  // LunchList
  const lunchList = document.createElement("div");
  menuItems.appendChild(lunchList);
  lunchList.classList.add("lunchList");
  const lunchTitle = document.createElement("h3");
  lunchList.appendChild(lunchTitle);
  lunchTitle.classList.add("menuTitle");
  const lunchText = document.createTextNode("Lunch");
  lunchTitle.appendChild(lunchText);

  lunchItems.map((item) => {
    const itemContent = `
          <h3 class="item-title">${item.title}</h3><p class="item-desc">${item.description}</p><p class="item-price">${item.price}</p><img class="item-img" src=${item.img} />`;
    lunchList.innerHTML += itemContent;
  });

  // Dinner List
  const dinnerList = document.createElement("div");
  menuItems.appendChild(dinnerList);
  dinnerList.classList.add("dinnerList");
  const dinnerTitle = document.createElement("h3");
  dinnerList.appendChild(dinnerTitle);
  dinnerTitle.classList.add("menuTitle");
  const dinnerText = document.createTextNode("Dinner");
  dinnerTitle.appendChild(dinnerText);

  dinnerItems.map((item) => {
    const itemContent = `
          <h3 class="item-title">${item.title}</h3><p class="item-desc">${item.description}</p><p class="item-price">${item.price}</p><img class="item-img" src=${item.img} />`;
    dinnerList.innerHTML += itemContent;
  });

  // Beverage List
  const beverageList = document.createElement("div");
  menuItems.appendChild(beverageList);
  beverageList.classList.add("beverageList");
  const beverageTitle = document.createElement("h3");
  beverageList.appendChild(beverageTitle);
  beverageTitle.classList.add("menuTitle");
  const beverageText = document.createTextNode("Beverages");
  beverageTitle.appendChild(beverageText);

  beverageItems.map((item) => {
    const itemContent = `
          <h3 class="item-title">${item.title}</h3><p class="item-desc">${item.description}</p><p class="item-price">${item.price}</p><img class="item-img" src=${item.img} />`;
    beverageList.innerHTML += itemContent;
  });
};

export default menuPage;
