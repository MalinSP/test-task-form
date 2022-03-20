import React, { useState, useContext, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data) {
        const newUsers = data.map((person) => {
          const { id, name } = person;
          const { city } = person.address;
          const { name: company } = person.company;
          return {
            id,
            name,
            city,
            company,
          };
        });
        setUsers(newUsers);
      } else {
        setUsers([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <AppContext.Provider value={{ loading, users, setUsers }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
