import { FavoriteUserProvider } from "./components/FavoriteUserContext";
import UserPicker from "./components/UserPicker";
import UserDisplay from "./components/UserDisplay";

function App() {
  return (
    <FavoriteUserProvider>
      <div className="max-w-lg mx-auto text-center p-1">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Favorite User Picker</h1>
        <UserDisplay />
        <UserPicker />
      </div>
    </FavoriteUserProvider>
  );
}

export default App;
