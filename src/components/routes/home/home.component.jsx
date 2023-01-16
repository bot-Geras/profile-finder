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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch("https://touchinspiration-0ada.restdb.io/rest/sample", {
  //       mode: "no-cors",
  //       method: 'GET',
  //       headers: {
  //         "x-apikey": "63be7360969f06502871ad7f",
  //         "Content-Type": "application/json"

  //       }
  //     })
  //     const user = await response.json()
  //     setUserProfile(user)
  //   }
  //  fetchData()

  // }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((users) => setUserProfile(users));
  // }, []);
  useEffect(() => {
    setUserProfile(data);
  }, []);

  useEffect(() => {
    const filterNewUsers = userProfile.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });
    setFilteredUsers(filterNewUsers);
  }, [userProfile, searchField]);

  function onSearchHandler(e) {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  }

  return (
    <div className="h-screen bg-orange-100 flex flex-col items-center">
      <SearchBar search={onSearchHandler} />

      <ProfileCardList list={filteredUsers} />
    </div>
  );
}

export default Home;
