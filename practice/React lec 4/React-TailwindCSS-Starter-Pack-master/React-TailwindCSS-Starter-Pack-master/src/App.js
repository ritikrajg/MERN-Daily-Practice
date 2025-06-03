import React, { useEffect, useState } from "react";
import "./App.css";
import { apiUrl, filterData } from "./data";
import Courses from "./components/Courses";
import Filter from "./components/Filter";
import { Toaster } from 'react-hot-toast';
function App() {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(filterData);
  const [category, setCategory] = useState("All");
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setCourses(result.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <div className="flex justify-center items-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-600 border-solid"></div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Filter filter={filter} setCategory={setCategory} />
      <Courses data={courses} category={category}></Courses>
    </div>
  );
}

export default App;
