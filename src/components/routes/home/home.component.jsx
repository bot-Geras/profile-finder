import ProfileCardList from "../../Profile-cards/profile-card-list.component";

import ExportExcel from "../../Excel/excelexport";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const userProfileList = useSelector((state) => state.users.value);

  return (
    <div className="h-screen bg-grey-200 flex flex-col items-center">
      {/* <SearchBar
        search={onSearchHandler}
        handleClick={(event) => setFilterSearch(event.target.value)}
      /> */}
      <div className="flex gap-4">
        <ExportExcel excelData={userProfileList} fileName={"Excel Export"} />
        <Link to="/user">
          <button className=" my-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <span>Create Profile</span>
          </button>
        </Link>
      </div>

      <ProfileCardList list={userProfileList} />
    </div>
  );
}

export default Home;
