import React from "react";

function Profile() {
  return (
    <div>
      <label>Name:</label>
      <input type="text" value={name} />
      <label>Email:</label>
      <input type="text" value={email} />
      <label>Age:</label>
      <input type="text" value={age} />
    </div>
  );
}

export default Profile;
