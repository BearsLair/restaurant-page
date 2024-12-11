const homePage = () => {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = "";

  const homeTitle = document.createElement("h1");
  const title = document.createTextNode("Bears Den Restaurant");
  homeTitle.appendChild(title);

  const homeImage = document.createElement("img");
  homeImage.src =
    "https://images.pexels.com/photos/10216441/pexels-photo-10216441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  homeImage.alt = "Welcoming bear statue.";

  const homeDescription = document.createElement("p");
  const description = document.createTextNode(
    "A welcoming dining experience for all ages!"
  );
  homeDescription.appendChild(description);

  const image = mainContent.appendChild(homeTitle);
  mainContent.appendChild(homeImage);
  mainContent.appendChild(homeDescription);

  const hours = document.createElement("div");
  mainContent.appendChild(hours);
  hours.classList.add("hours");

  const hoursTitle = document.createElement("h3");
  hours.appendChild(hoursTitle);
  const hoursTitleText = document.createTextNode("Hours Open");
  hoursTitle.appendChild(hoursTitleText);

  const weekdayHours = document.createElement("p");
  hours.appendChild(weekdayHours);
  const weekdayHoursText = document.createTextNode("Mon-Fri: 8 a.m to 9 p.m.");
  weekdayHours.appendChild(weekdayHoursText);
  weekdayHours.classList.add("hours-text");

  const weekendHours = document.createElement("p");
  hours.appendChild(weekendHours);
  const weekendHoursText = document.createTextNode("Sat-Sun: 7 a.m to 10 p.m.");
  weekendHours.appendChild(weekendHoursText);
  weekdayHours.classList.add("hours-text");
};

export default homePage;
