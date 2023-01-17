import { useState } from "react";

import SearchBar from "../../searchBar/search.component";
import ProfileCardList from "../../profile-card-list.component";
import { useGetUsersQuery } from "../../../features/dataSlices";

function Home() {
  const { data } = useGetUsersQuery();
  const [filterSearch, setFilterSearch] = useState("");
  const searchResultArray = () =>
    data.filter((result) => result.name.toLowerCase().includes(filterSearch));
  function onSearchHandler(event) {
    setFilterSearch(event.target.value.toLowerCase());
  }

  return (
    <div className="h-screen bg-orange-100 flex flex-col items-center">
      <SearchBar search={onSearchHandler} handleClick={searchResultArray} />

      <ProfileCardList list={data} />
    </div>
  );
}

export default Home;
