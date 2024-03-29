import React from "react";
import { FaBookReader } from "react-icons/fa";
import TimeLineItem from "./TimeLineItem";
import SkillItem from "./SkillItem";
const Resume = () => {
  return (
    <div>
      <section>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className="h3">Education </h3>
          </div>
          <ol className="timeline-list">
            <TimeLineItem
              title="B.tech(Computer Science)"
              date="2020-2024"
              description="B.Tech in Computer Science with a CGPA of 8.23 from Jai Narain College of Technology, Bhopal, demonstrating strong academic performance and technical expertise in software development"
            />
          </ol>

          <ol className="timeline-list">
            <TimeLineItem
              title="Higher Secondary Education "
              date="2019-2020"
              description="Completed 12th class with 85.6% from Government Higher Secondary School Matguwan, Chhatarpur, showcasing strong academic performance and commitment to excellence"
            />
          </ol>
          <ol className="timeline-list">
            <TimeLineItem
              title="Secondary Education"
              date="2017-2018"
              description="Completed 10th class with 88% and 12th class with 85.6% from Government Higher Secondary School Matguwan, Chhatarpur mp."
            />
          </ol>
        </div>

        <div className="timeline">
          <div className="title-wrapper">
            <div className="icon-box">
              <FaBookReader />
            </div>
            <h3 className="h3"> Projects : </h3>
          </div>
          <ol className="timeline-list">
            <TimeLineItem
              title="Twitter Clone"
              description="Developed a Twitter clone application using the MERN (MongoDB, Express.js, React.js, Node.js) stack, implementing features such as user authentication, real-time messaging, and post sharing. Utilized RESTful APIs for backend functionality and deployed the application on cloud platforms for scalability."
            />
          </ol>

          <ol className="timeline-list">
            <TimeLineItem
              title="ATM Interface"
               
              description="Designed and implemented an ATM interface application using Java Swing and AWT for the user interface and JDBC for database connectivity with SQL. Developed features including account management, transaction history tracking, and balance inquiry, ensuring secure and efficient banking operations."
            />
          </ol>
          <ol className="timeline-list">
            <TimeLineItem
              title="Weather App"
              
              description="Developed a Weather application using HTML, CSS, and JavaScript, providing real-time weather information based on user input. Implemented features such as location detection, weather forecast display, and responsive design for optimal user experience across devices"
            />
          </ol>
        </div>
{/* Skill section */}
        <div className="skill">
        <h3 className="h3 skills-title"> My Skills</h3>
        <ul className="skills-list content-card">
         <SkillItem title='Java Developer' value={80}/>

         <SkillItem title='Java Script ' value={60}/>


         <SkillItem title='React Js' value={70}/>
         <SkillItem title='DataBase ' value={60}/>

         <SkillItem title='Some Academic Subject :  like DBMS,OS,RDBMS ' value={50}/>

        </ul>
      </div>
      </section>
       
      
</div>
    
  );
};

export default Resume;
