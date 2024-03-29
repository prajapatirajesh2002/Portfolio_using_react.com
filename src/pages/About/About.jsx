import React, { useEffect, useState } from "react";
import Service from "./Service";
import Testimonial from "./Testimonial";
// import img from "../../../public/images/logo-1-color.png";
const servicesData = [
  {
    title: "Java Development ",
    icon: "https://e7.pngegg.com/pngimages/769/163/png-clipart-professional-java-programmer-software-development-software-developer-others-miscellaneous-text.png",
    description:
      " Experienced in Java 2 Standard Edition (J2SE) with proficiency in core Java concepts, libraries, and APIs for desktop and server applications",
  },
  {
    title: "Web development",
    icon: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*M4bxiCIjcTK-2Xr6.jpeg",
    description: " Proficient in web development using HTML, CSS, and JavaScript to create responsive and interactive web applications with a strong focus on user experience and front-end design.",
  },
  {
    title: "Dababases ",
    icon: "https://media.istockphoto.com/id/1367766076/vector/database-storage-icon-vector-for-your-website-design-logo-app-ui-illustration.jpg?s=612x612&w=0&k=20&c=5-nzlAxbGQMw-lJcZc_P9QbHWXGb00ZLimhhwtr9rnc=",
    description:
      " Intermediate in databases with experience in SQL querying, database design, and data manipulation, contributing to efficient data management and analysis in software development projects.",
  },
  {
    title: "React js ",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/120px-React_Logo_SVG.svg.png",
    description:
      "Proficient in React and  Redux for state management and the Axios library for handling HTTP requests in web applications, enhancing functionality and data handling capabilities.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Daniel Lewis",
      avatar: "/images/avatar-1.png",
      testimonial:
        "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Jessica Miller",
      avatar: "/images/avatar-2.png",
      testimonial:
        "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Emily Evans",
      avatar: "/images/avatar-3.png",
      testimonial:
        "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
    {
      name: "Henry William",
      avatar: "/images/avatar-4.png",
      testimonial:
        "Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of the client.",
    },
  ]);

  // useEffect(()=>{
  // fatch('testimonials.json').then(res=>res.json()).then(data=>{
  //   console.log(data);
  //   setTestimonials(data);
  // })

  // },[])

  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About me </h2>
      </header>

      <section className="about-text">
        <p>
        Rajesh Prajapati, a B.Tech Computer Science student at Jai Narain College of Technology, Bhopal.
        </p>

        <p>
        Leveraging expertise in Java development, React.js, Node.js, Express.js, web technologies (HTML/CSS/JavaScript), and database management to make meaningful contributions to software projects. Seeking a challenging role that fosters innovation, collaboration, and professional growth in the tech industry.
        </p>
      </section>

      {/*sevices   */}
      <section className="service">
        <h2 className="h3 service-title"> What I Have done</h2>
        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      {/* textimonials sections  */}
     
      {/*clients log  */}
      <section className="clients">
        <h3 className="h3 clients-title">Skills </h3>
        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="data:image/png;base64,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" alt="" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src=" data:image/jpeg;base64,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" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://static.tildacdn.one/tild6238-3035-4335-a333-306335373139/IMG_3349.jpg" alt="" />
            </a>
          </li>
          <li className="clients-item">
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/800px-React_Logo_SVG.svg.png" alt="" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src=" data:image/jpeg;base64,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" alt="" />
            </a>
          </li>

          <li className="clients-item">
            <a href="#">
              <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*TY9uBBO9leUbRtlXmQBiug.png" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
