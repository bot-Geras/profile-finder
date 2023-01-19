import ProfileCard from "./profile-card.component";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../features/Users";
import { useState } from "react";
const ProfileCardList = ({ list }) => {
  const dispatch = useDispatch();
  const [newUserName, setNewUserName] = useState("");
  return (
    <div className="w-full  flex flex-col sm:items-stretch sm:flex-row sm:flex-wrap justify-center items-center ">
      {list?.map((profile) => {
        return (
          <div className="flex flex-col gap-8" key={profile.id}>
            <ProfileCard
              id={profile.id}
              {...profile}
              state={newUserName}
              setState={setNewUserName}
              handleClick={() => {
                dispatch(deleteUser({ id: profile.id }));
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProfileCardList;
