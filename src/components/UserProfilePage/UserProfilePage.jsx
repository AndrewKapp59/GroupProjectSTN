import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import UserProfileItem from "./UserProfileItem";
import UserSavedProfileEvent from "./UserSavedProfileEvent";
import { actionChannel } from "redux-saga/effects";
import { useParams, Link, useHistory } from "react-router-dom";

import { SettingsBrightnessOutlined } from "@mui/icons-material";

export default function UserProfile() {
  const dispatch = useDispatch();
  const fetchProfile = useSelector((store) => store.fetchProfile);
  const fetchProfileEvent = useSelector((store) => store.fetchProfileEvent);
  const user = useSelector((store) => store.user);
  const history = useHistory();



  useEffect(() => {
    console.log("fetchProfile = ", fetchProfile[0]);
    console.log(fetchProfile !== []);
    if (user?.id !== null && user?.id !== undefined) {
      console.log("user.id = " + user?.id);
      console.log("user.id is of type " + typeof user?.id);
    }
    if (fetchProfile === []) {
      console.log("fetchProfile contains an empty array");
    }
    if (fetchProfile[0] === undefined) {
      console.log("fetchProfile[0] is undefined.");
    } else {
      if (fetchProfile[0]?.id === undefined) {
        console.log("id is undefined.");
      }
      if (fetchProfile[0]?.id === null) {
        console.log("id is null.");
      }
      if (fetchProfile[0]?.id !== null && fetchProfile[0]?.id !== undefined) {
        console.log("id is of type." + typeof fetchProfile[0]?.id);
      }
    }
    if (fetchProfile !== [] && user.id) {
      dispatch({ type: "SET_PROFILE_SAGA", payload: user.id });
      dispatch({ type: "SET_PROFILE_EVENT_SAGA", payload: user.id });
    }
   
  }, []);

  // setTimeout(() => {}, 300);

  const handleEditClick = () => {
    history.push("/userprofileedit");
  };

  console.log("profile", fetchProfile);
  console.log("user", user.id);
  console.log("event", fetchProfileEvent);
  return (
    <div>
      <img src="https://www.flexx.co/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" />
      <button onClick={handleEditClick}>Edit</button>
      <div>
        <h3>Profile</h3>

        {fetchProfile[0]?.id}
        <div>
          <p>{fetchProfile[0]?.first_name}</p>
          <p>{fetchProfile[0]?.last_name}</p>
          <p>{fetchProfile[0]?.bio}</p>
          <p>{fetchProfile[0]?.email}</p>
        </div>
      </div>

      {/* {fetchProfile?.map((info, i) => {
        return (
          <div id={i}>
            <UserProfileItem info={info} />
          </div>
        );
      })} */}

      {/* {fetchProfileEvent.map((event, i) => {
        return (
          <div id={i}>
            <UserSavedProfileEvent event={event} />
          </div>
        );
      })} */}
    </div>
  );
}
// end of UserProfile
