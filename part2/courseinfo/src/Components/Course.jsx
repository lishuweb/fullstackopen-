import React from "react";
import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const Course = ({course}) => {
  return (
    <>
      {course.map((courses) => (
          <div key={courses.id}>
              <Header header={courses.name} />
              <Content parts={courses.parts} />
              <Total parts={courses.parts} />
          </div>
      ))}
    </>
  )    
}

export default Course;