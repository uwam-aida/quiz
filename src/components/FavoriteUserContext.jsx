import { createContext, useContext, useEffect, useState } from "react";

const FavoriteUserContext = createContext();

export const useFavoriteUser = () => useContext(FavoriteUserContext);

export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  // Load favorite user from localStorage on app start
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("favoriteUser"));
    if (storedUser) {
      setFavoriteUser(storedUser);
    }
  }, []);

  // Save favorite user to localStorage whenever it changes
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
