/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Automatic Number Plate Recognition (ANPR)",
    description:
      "A Python based project that uses OpenCV and Pytesseract to recognize the number plate of a vehicle.",
    url: "https://github.com/aditya232002/ANPR",
  },
  {
    title: "Car Rental System",
    description:
      "Our C++ software streamlines car rentals, making reservations easy for tourists, travel agencies, and private visitors.",
    url: "https://github.com/aditya232002/Car-rental-system-",
  },
  {
    title: "plant-light Monitoring System",
    description:
      "This device enhances production for farmers and industries like Haldiram and Tirumala by optimizing light intensity.",
    url: "https://github.com/aditya232002/Plant_light_monitor",
  },
  {
    title: "IoT-Website",
    description:
      "A website that displays all about IoT and its applications. ",
    url: "https://github.com/aditya232002/IoT-website",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
