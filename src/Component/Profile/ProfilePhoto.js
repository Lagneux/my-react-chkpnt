import React from "react"
import profileid from "../../profileid.jpg"
function ProfilePhoto() {
    return (
        <div>
            <h2>Photo de profil</h2>
            <img src={profileid} className="rounded" alt="Rounded Image" />
        </div>
    )
}
export default ProfilePhoto;