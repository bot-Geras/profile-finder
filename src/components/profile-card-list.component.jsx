import React from "react";
import ProfileCard from "./profile-card.component";

const ProfileCardList = ({ list }) => {
  
  return (
    <div className="w-full  flex flex-col sm:items-stretch sm:flex-row sm:flex-wrap justify-center items-center ">
      {list?.map((profile) => {
        return <ProfileCard key={profile.id} {...profile} />;
      })}
    </div>
  );
};

export default ProfileCardList;
