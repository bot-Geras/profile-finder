import React from 'react';

const SearchBar = ({search, handleClick, searchValue}) => {
    return (
        <div className="mt-8 flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                    onChange={search}
                   
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded " onClick={handleClick}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
