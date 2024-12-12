const homePage = () => {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = "";

  const homeTitle = document.createElement("h1");
  mainContent.appendChild(homeTitle);
  const title = document.createTextNode("Bears Den Restaurant");
  homeTitle.appendChild(title);
  homeTitle.classList.add("home-title");

  const homeImage = document.createElement("img");
  homeImage.src =
    "https://images.pexels.com/photos/10216441/pexels-photo-10216441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const image = mainContent.appendChild(homeTitle);
  homeImage.alt = "Welcoming bear statue.";
  homeImage.classList.add("home-img");
  mainContent.appendChild(homeImage);

  const homeDescription = document.createElement("p");
  const description = document.createTextNode(
    "A welcoming dining experience for all ages!"
  );
  homeDescription.appendChild(description);
  mainContent.appendChild(homeDescription);
  homeDescription.classList.add("home-desc");

  const hours = document.createElement("div");
  mainContent.appendChild(hours);
  hours.classList.add("home-hours");

  const hoursTitle = document.createElement("h3");
  hours.appendChild(hoursTitle);
  const hoursTitleText = document.createTextNode("Hours Open");
  hoursTitle.appendChild(hoursTitleText);
  hoursTitle.classList.add("home-hourstitle");

  const weekdayHours = document.createElement("p");
  hours.appendChild(weekdayHours);
  const weekdayHoursText = document.createTextNode("Mon-Fri: 8 a.m to 9 p.m.");
  weekdayHours.appendChild(weekdayHoursText);
  weekdayHours.classList.add("home-hourstext");

  const weekendHours = document.createElement("p");
  hours.appendChild(weekendHours);
  const weekendHoursText = document.createTextNode("Sat-Sun: 7 a.m to 10 p.m.");
  weekendHours.appendChild(weekendHoursText);
  weekdayHours.classList.add("home-hourstext");

  const location = document.createElement("div");
  mainContent.appendChild(location);
  location.classList.add("home-location");

  const locationTitle = document.createElement("h3");
  location.appendChild(locationTitle);
  const locationTitleText = document.createTextNode("Location");
  locationTitle.appendChild(locationTitleText);
  locationTitle.classList.add("home-locationtitle");

  const locationElement = document.createElement("p");
  location.appendChild(locationElement);
  const locationElementText = document.createTextNode(
    "1234 Sunrise Blvd, Bears Lair, California"
  );
  locationElement.appendChild(locationElementText);
  locationElement.classList.add("home-locationtext");
};

export default homePage;
