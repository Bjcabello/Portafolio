import { useState, useEffect } from "react";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios
      .get("/api/profiles/1/")
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
      });
  }, []);

  return (
    <div className="row mb-5">
      {profile ? (
        <>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <img
              src={profile.profile_picture}
              alt="Profile"
              className="img-fluid"
              style={{ width: "150px", height: "190px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md-8">
            <h2>
              {profile.name} {profile.last_name}
            </h2>
            <h2>{profile.profession}</h2>
            <p dangerouslySetInnerHTML={{ __html: profile.bio }}></p>
          </div>
        </>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
