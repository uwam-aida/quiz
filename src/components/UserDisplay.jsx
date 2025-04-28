import { useFavoriteUser } from "./FavoriteUserContext";

const UserDisplay = () => {
  const { favoriteUser, setFavoriteUser } = useFavoriteUser();

  if (!favoriteUser) {
    return <p className="italic text-gray-500">You have not picked a favorite user yet.</p>;
  }

  return (
    <div className="bg-blue-200 p-6 rounded-lg mt-6">
      <h2 className="text-2xl font-semibold mb-4">Your Favorite User</h2>
      <p className="text-xl">{favoriteUser.name} ({favoriteUser.email})</p>
      <button
        onClick={() => setFavoriteUser(null)}
        className="mt-4 px-4 py-2 bg-red-100 text-black rounded-lg hover:bg-red-200 transition duration-300"
      >
        Clear Favorite
      </button>
    </div>
  );
};

export default UserDisplay;
