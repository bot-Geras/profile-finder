import { useState, useEffect } from "react";

import SearchBar from "../../searchBar/search.component";
import ProfileCardList from "../../profile-card-list.component";
import { useGetUsersQuery } from "../../../features/dataSlices";

function Home() {
  const { data } = useGetUsersQuery();
  const [filterSearch, setFilterSearch] = useState("");
  const [newData, setNewData] = useState(data)
  
  function onSearchHandler(event) {
    setFilterSearch(event.target.value.toLowerCase());
  }

  useEffect(() => {
    const filterResults = data?.filter((result) => result.name.toLowerCase().includes(filterSearch));
    setNewData(filterResults)
  }, [data, filterSearch])
 


  return (
    <div className="h-screen bg-orange-100 flex flex-col items-center">
      <SearchBar search={onSearchHandler}   />

      <ProfileCardList list={newData} />
    </div>
  );
}

export default Home;
