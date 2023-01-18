import React from "react";

import { useUpdateUserMutation } from "../../features/dataSlices";
import ProfileCard from "./profile-card.component";
const ProfileCardList = ({ list }) => {
  const {updateUser} = useUpdateUserMutation()
  
  return (
    <div className="w-full  flex flex-col sm:items-stretch sm:flex-row sm:flex-wrap justify-center items-center ">
      {list?.map((profile) => {
        return <ProfileCard key={profile.id} {...profile} onClick={() => updateUser({...profile, verified: !profile.verified})}/>;
      })}
    </div>
  );
};

export default ProfileCardList;
