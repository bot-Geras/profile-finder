
import { updateUserName } from "../../features/Users";
import { useDispatch } from "react-redux";
const ProfileCard = (props) => {
  const { id, bio, name, email, occupation, handleClick, state, setState } =
    props;
  const dispatch = useDispatch();
  

  const buttonOne = (
    <button onClick={() => dispatch(updateUserName({ id: id, name: state }))}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 hover:animate-pulse"
      >
        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
      </svg>
    </button>
  );
  const inputFloat = ( <input
    type="text"
    placeholder=" edit username..."
    onChange={(e) => setState(e.target.value)}
  />)

  return (
    <div
      className="m-2 p-8 w-full max-w-sm dark:bg-blue-600 border border-gray-800 rounded-lg shadow-md  dark:border-gray-800  hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200"
      id={props.id}
    >
      <span className="bg-purple-100 text-purple-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 cursor-pointer">
        verified
      </span>
      <div className="flex flex-col justify-center items-center">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 shadow-lg">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            {name
              .match(/(^\S\S?|\b\S)?/g)
              .join("")
              .match(/(^\S|\S$)?/g)
              .join("")
              .toUpperCase()}
          </span>
        </div>

        <div className="m-4 py-2">
          <p className="mb-1 text-lg text-center  font-xl text-gray-800 dark:text-white  hover:text-gray-900 transition-all duration-200">
            {bio}
          </p>
        </div>
        <h5 className="mb-1 text-xl font-bold text-black  dark:text-white">
          {name}
        </h5>
        <span className="text-medium font-bold text-purple-700 dark:text-gray-400">
          {email}
        </span>
        <span className="text-medium text-grey-700 dark:text-gray-400">
          {occupation}
        </span>
      </div>
      <div className="flex justify-around gap-10">
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 hover:animate-pulse"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {inputFloat }
        { buttonOne }
       
      </div>
    </div>
  );
};

export default ProfileCard;
