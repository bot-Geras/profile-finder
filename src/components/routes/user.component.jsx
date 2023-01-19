import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/Users";
import { Link } from "react-router-dom";

const User = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const  dispatch  = useDispatch();

  const userProfileList = useSelector((state) => state.users.value);

  return (
    // <div className="flex justify-center items-center m-6">
    //   <div className="w-1/4 flex gap-4 flex-col items-center">
    //     <form>
    //       <input type="text" placeholder="name" />
    //       <input type="text" placeholder="bio" />
    //       <input type="text" placeholder="occupation" />
    //       <input type="email" placeholder="email" />
    //       <button
    //         className=" my-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
    //         type="submit"
    //       >
    //         Add Profile
    //       </button>
    //     </form>
    //   </div>
    // </div>

    <div className="w-1/5  flex flex-col  gap-2 justify-center items-center my-10 mx-10 p-2">
      <input
        className="mx-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        type="text"
        placeholder="UserName..."
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="mx-2 mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
        type="text"
        placeholder="Bio..."
        onChange={(e) => setBio(e.target.value)}
      />
      <Link to="/">
        <button
          className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 px-4 py-2 rounded-xl text-white"
          onClick={() => {
            dispatch(
              addUser({
                id: userProfileList[userProfileList.length - 1].id + 1,
                name,
                bio,
              })
            );
          }}
        >
          Add
        </button>
      </Link>
    </div>
  );
};

export default User;
