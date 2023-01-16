import {useState } from "react";

import SearchBar from "../../searchBar/search.component";
import ProfileCardList from "../../profile-card-list.component";
import { useGetUsersQuery } from "../../../features/dataSlices";

function Home() {
  const { data } = useGetUsersQuery();
  const [searchField, setSearchField] = useState("");
  // const [userProfile, setUserProfile] = useState([]);
  // const [filteredUsers, setFilteredUsers] = useState(userProfile);
  // console.log(data);

  // useEffect(() => {
  //   setUserProfile(data);
  // }, [data]);

  // useEffect(() => {
  //   const filterNewUsers = userProfile.filter((user) => {
  //     return user.name.toLowerCase().includes(searchField);
  //   });
  //   setFilteredUsers(filterNewUsers);
  // }, [userProfile, searchField]);
  const keys = ["name", "email"]
  function search(data) {
    return data.filter((item) => 
    keys.some(key => item[key].toLowerCase().includes(searchField))
    )
  }

  function onSearchHandler(e) {
    const searchString = e.target.value
    setSearchField(searchString);
  }

  return (
    <div className="h-screen bg-orange-100 flex flex-col items-center">
      <SearchBar search={onSearchHandler} />

      <ProfileCardList list={search(data)} />
    </div>
  );
}

export default Home;
