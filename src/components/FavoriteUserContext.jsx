import { createContext, useContext, useEffect, useState } from "react";

const FavoriteUserContext = createContext();

export const useFavoriteUser = () => useContext(FavoriteUserContext);

export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("favoriteUser"));
    if (storedUser) {
      setFavoriteUser(storedUser);
    }
  }, []);

  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem("favoriteUser", JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem("favoriteUser");
    }
  }, [favoriteUser]);

  return (
    <FavoriteUserContext.Provider value={{ favoriteUser, setFavoriteUser }}>
      {children}
    </FavoriteUserContext.Provider>
  );
};
