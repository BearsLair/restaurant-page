const menuPage = () => {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = "";

  const menuItems = [];

  const title = document.createElement("h1");
  const titleText = document.createTextNode("Menu");
  title.appendChild(titleText);
  mainContent.appendChild(title);
};

export default menuPage;
