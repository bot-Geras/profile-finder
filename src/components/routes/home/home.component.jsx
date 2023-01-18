import { useState, useEffect } from "react";

import SearchBar from "../../searchBar/search.component";
import ProfileCardList from "../../Profile-cards/profile-card-list.component";
import { useGetUsersQuery} from "../../../features/dataSlices";
import ExportExcel from "../../Excel/excelexport";


function Home() {
  const { data } = useGetUsersQuery();
 
  const [filterSearch, setFilterSearch] = useState("");
  const [newData, setNewData] = useState(data);

  function onSearchHandler(event) {
    setFilterSearch(event.target.value.toLowerCase());
  }

  useEffect(() => {
    const filterResults = data?.filter((result) =>
      result.occupation.toLowerCase().includes(filterSearch)
    );
    setTimeout(() => {
      setNewData(filterResults);
    }, 4000);
  }, [data, filterSearch]);

  return (
    <div className="h-screen bg-grey-200 flex flex-col items-center">
      <SearchBar
        search={onSearchHandler}
        handleClick={(event) => setFilterSearch(event.target.value)}
      />
      <ExportExcel excelData={newData} fileName={"Excel Export"} />

      <ProfileCardList list={newData} />
      
    </div>
  );
}

export default Home;
