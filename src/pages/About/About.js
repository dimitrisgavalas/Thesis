// Page that provides information about the platform
import React from "react";
import "./About.css";
import { Image } from "primereact/image";

function About() {
  const logo = ["images/person.jpg"];
  // Sample team data
  const team = [
    {
      id: 1,
      name: "Elon Musk",
      role: "Founder",
      photo: logo,
    },
    {
      id: 2,
      name: "Bill Gates",
      role: "Co-founder",
      photo: logo,
    },
    {
      id: 3,
      name: "Mark Zuck",
      role: "CTO",
      photo: logo,
    },
  ];

  return (
    <div className="about">
      <div className="mission-statement p-6">
        <h2>Our Mission</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor
          urna nunc id cursus metus. At in tellus integer feugiat scelerisque.
          Sed viverra tellus in hac habitasse platea dictumst. Cursus sit amet
          dictum sit. Quisque sagittis purus sit amet volutpat consequat mauris.
          Tortor at auctor urna nunc id cursus metus. Ipsum dolor sit amet
          consectetur adipiscing elit ut aliquam. Vitae semper quis lectus nulla
          at. Aenean vel elit scelerisque mauris pellentesque. Ultrices mi
          tempus imperdiet nulla.
        </p>
      </div>

      <div className="surface-0 text-center border-round">
        <div className="grid ">
          <div className="col-12 md:col-4 mb-4 px-5 mt-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i
                style={{ color: "#6366F1" }}
                className="pi pi-dollar text-4xl "
              ></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">Save Money</div>
            <span className="text-700 line-height-3">
              Our Goal is have the best prices. We offer promotions and
              discounts.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5 mt-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i
                style={{ color: "#6366F1" }}
                className="pi pi-verified text-4xl "
              ></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Verified Ecourses
            </div>
            <span className="text-700 line-height-3">
              Risus nec feugiat in fermentum posuere urna nec. Posuere
              sollicitudin aliquam ultrices sagittis.
            </span>
          </div>
          <div className="col-12 md:col-4 mb-4 px-5 mt-5">
            <span
              className="p-3 shadow-2 mb-3 inline-block"
              style={{ borderRadius: "10px" }}
            >
              <i
                style={{ color: "#6366F1" }}
                className="pi pi-comment text-4xl "
              ></i>
            </span>
            <div className="text-900 text-xl mb-3 font-medium">
              Student Rating
            </div>
            <span className="text-700 line-height-3">
              Ornare suspendisse sed nisi lacus sed viverra tellus. Neque
              volutpat ac tincidunt vitae semper.
            </span>
          </div>
        </div>
      </div>

      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {team.map((member) => (
            <div key={member.id} className="team-member">
              <Image src={member.photo} alt={member.name} width="250" />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
