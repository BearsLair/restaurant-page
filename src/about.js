const aboutPage = () => {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = "";

  const title = document.createElement("h1");
  const titleText = document.createTextNode("About");
  title.appendChild(titleText);
  mainContent.appendChild(title);
};

export default aboutPage;
