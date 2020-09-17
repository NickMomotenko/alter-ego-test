import React from "react";

const Profile = ({ unAuth }) => {
  return (
    <>
      <div className="profile">
        Страница профиля (доступ когда isLoggin = true)
      </div>
      <button onClick={unAuth}>Выйти</button>
    </>
  );
};

export default Profile;
