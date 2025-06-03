import React from "react";
import Cards from "./Cards";

const Courses = (props) => {
  let coursesData = props.data;
  let category=props.category;
  function getCourses(){
    let allCourses = [];
    if(category==="All"){
      const courseArrays = Object.values(coursesData);
      allCourses=courseArrays.flat()
    }else{
      const courseArrays = Object.values(coursesData[category]);
      allCourses=courseArrays.flat()
    }
    return allCourses;
  }
  return (
    <div>
      {getCourses().map(course=>(
        <Cards key={course.id}{...course}/>
      ))}
    </div>
  );
};

export default Courses;
