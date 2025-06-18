import React, { createContext,useState,useEffect } from "react";

export const AppContext = createContext();
function AppContextProvider({ children }) {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);
  const [posts, setPosts] = useState([]);
  const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetch(`${baseUrl}?page=${page}`);
      const data = await result.json();
      console.log(data);
      setTotalPages(data?.totalPages);
      setPosts(data?.posts);
      setLoading(false);
    };

    fetchData();
  }, [page]); // ]]

  function pageHandler(newPage) {
    if (newPage >= 1 && (!totalPages || newPage <= totalPages)) {
      setPage(newPage);
    }
  }

  const value= {
    loading,
    page,
    totalPages,
    posts,
    pageHandler,
  };
  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}
export default AppContextProvider;
