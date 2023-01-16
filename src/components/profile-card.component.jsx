import React from "react";

import BackgroundLetterAvatars from "./avatar/avatar.names";

const ProfileCard = ({ website, name, email }) => {
  return (
    <div className="m-2 p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col justify-center items-center">
        <BackgroundLetterAvatars username={name} />

        <div className="m-4 py-2">
          <p className="mb-1 text-base font-medium text-gray-900 dark:text-white">
            {website}
          </p>
        </div>
        <h5 className="mb-1 text-xl font-medium  text-blue-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {email}
        </span>
      </div>
    </div>
  );
};

export default ProfileCard;
