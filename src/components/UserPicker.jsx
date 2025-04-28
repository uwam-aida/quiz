import { useEffect, useState } from "react";
import { useFavoriteUser } from "./FavoriteUserContext";

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setFavoriteUser } = useFavoriteUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <p className="text-xl italic text-gray-500">Loading users...</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-semibold mb-4">Pick Your Favorite User</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition duration-300"
            onClick={() => setFavoriteUser({ name: user.name, email: user.email })}
          >
            <strong className="text-lg">{user.name}</strong> <br />
            <small className="text-sm text-gray-600">{user.email}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPicker;
