import { useEffect, useState } from "react";
import ProfileCard from "./components/profile-card.component";

function App() {
  const API_URL = "https://touchinspiration-0ada.restdb.io/rest";
  const API_KEY = "63be7360969f06502871ad7f";
  const objOption = {
    headers: {
      "x-apikey": API_KEY,
      "Content-Type": "application/json",
    },
  };
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    fetch(` ${API_URL}/sample`, objOption)
      .then((res) => res.json())
      .then((data) => setUserProfile(data));
  }, []);

  const userProfileHtml = userProfile.slice().map((profile) => {
    return <ProfileCard key={profile._id} {...profile} />;
  });

  return (
    <div className="w-full bg-orange-100 flex flex-col sm:items-stretch sm:flex-row sm:flex-wrap justify-center items-center ">
      {userProfileHtml}
    </div>
  );
}

export default App;
