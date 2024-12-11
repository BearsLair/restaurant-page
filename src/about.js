const aboutPage = () => {
  const mainContent = document.querySelector("#content");
  mainContent.innerHTML = "";

  const title = document.createElement("h1");
  const titleText = document.createTextNode("About us");
  title.appendChild(titleText);
  mainContent.appendChild(title);

  const aboutSection = document.createElement("div");
  mainContent.appendChild(aboutSection);
  aboutSection.classList.add("about-section");

  const about = document.createElement("p");
  aboutSection.appendChild(about);
  about.classList.add("about-description");
  const aboutText = document.createTextNode(
    "We were established in 1955, and have for the past 60 years provided our community with fine diing for the whole family! We welcome all!"
  );
  about.appendChild(aboutText);

  const contactInfo = document.createElement("div");
  mainContent.appendChild(contactInfo);
  contactInfo.classList.add("contact-info");

  const contactTitle = document.createElement("h3");
  contactInfo.appendChild(contactTitle);
  const contactTitleText = document.createTextNode("Contact Us");
  contactTitle.appendChild(contactTitleText);
  contactTitle.classList.add("contact-title");

  const phone = document.createElement("p");
  contactInfo.appendChild(phone);
  const phoneText = document.createTextNode("Phone: 555-555-5555");
  phone.appendChild(phoneText);
  phone.classList.add("contact-text");

  const email = document.createElement("p");
  contactInfo.appendChild(email);
  const emailText = document.createTextNode(
    "Email: mrbear@totallynotfakeemail.com"
  );
  email.appendChild(emailText);
  email.classList.add("contact-text");
};

export default aboutPage;
