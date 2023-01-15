import React from 'react';

const ProfileCard = ({bio, name, occupation, _id}) => {
    return (
        <div
        className="m-2 p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
       
      >
        <div className="flex flex-col justify-center items-center">
          <div className="m-4 py-2">
            <p className="mb-1 text-base font-medium text-gray-900 dark:text-white">
              {bio}
            </p>
          </div>
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {occupation}
          </span>
        </div>
      </div>
    );
}

export default ProfileCard;
