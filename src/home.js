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
};

export default homePage;
