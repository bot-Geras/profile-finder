import { useEffect, useState } from "react";
import ProfileCardList from "./components/profile-card-list.component";
import SearchBar from "./components/searchBar/search.component";

function App() {
 

  const [userProfile, setUserProfile] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(userProfile);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://touchinspiration-0ada.restdb.io/rest/sample", {
        mode: "no-cors",
        method: 'GET',
        headers: {
          "x-apikey": "63be7360969f06502871ad7f",
          "Content-Type": "application/json"

        }
      })
      const user = await response.json()
      setUserProfile(user)
    }
   fetchData()
   
  }, []);

  useEffect(() => {
    const filterNewUsers = userProfile.filter((user) => {
        return user.name.toLowerCase().includes(searchField);
      });
    setFilteredUsers(filterNewUsers)
  }, [userProfile, searchField]);

  function onSearchHandler(e) {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  }

  return (
    <div>
      <SearchBar search={onSearchHandler} />
     
      <ProfileCardList list={filteredUsers} />
    </div>
  );
}

export default App;
