import React from "react";

const ProfileCard = ({ bio, name, email, occupation, verified }) => {
  return (
    <div className="m-2 p-4 w-full max-w-sm dark:bg-blue-600 border border-gray-800 rounded-lg shadow-md  dark:border-gray-800">
      <span className="bg-purple-100 text-purple-800 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300 cursor-pointer">
        {verified !== false ? "verified" : "NOT verified"}
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
          <p className="mb-1 text-lg text-center  font-xl text-gray-800 dark:text-white">
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
    </div>
  );
};

export default ProfileCard;
