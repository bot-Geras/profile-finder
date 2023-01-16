import { useEffect, useState } from "react";

import SearchBar from "../../searchBar/search.component";
import ProfileCardList from "../../profile-card-list.component";
import { useGetUsersQuery } from "../../../features/dataSlices";

function Home() {
  const { data } = useGetUsersQuery();
  const [searchField, setSearchField] = useState("");
  const [userProfile, setUserProfile] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(userProfile);
  console.log(data);

  useEffect(() => {
    setUserProfile(data);
  }, [data]);

  useEffect(() => {
    const userProfile = undefined
    const filterNewUsers = userProfile ? userProfile.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    }) : []
    setFilteredUsers(filterNewUsers);
  }, [userProfile, searchField]);

  function onSearchHandler(e) {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  }
console.log(filteredUsers);
  return (
    <div className="h-screen bg-orange-100 flex flex-col items-center">
      <SearchBar search={onSearchHandler} />

      <ProfileCardList list={filteredUsers} />
    </div>
  );
}

export default Home;
