import React from "react";

import default_profile from "../../assets/default-user.png";

export default function Contact({ dataContact, clickContact, contact }) {
  return (
    <>
      {dataContact.length > 0 && (
        <>
          {dataContact.map((item) => (
            <div
              key={item.id}
              className={`contact mt-3 p-2 ${
                contact?.id === item?.id && "contact-active"
              }`}
              onClick={() => {
                clickContact(item);
              }}
            >
              {item.profile.image !== null ? (
                <>
                  <img
                    src={
                      "https://res.cloudinary.com/dgmgol0a2/image/upload/v1655086419/" +
                      item.profile?.image
                    }
                    className="rounded-full mr-3 img-contact"
                    alt="user avatar"
                  />
                </>
              ) : (
                <>
                  <img
                    src={default_profile}
                    alt="img"
                    className="rounded-full mr-3"
                    style={{ width: "49px" }}
                  />
                </>
              )}

              <div className="ps-1 text-contact d-flex flex-column justify-content-around">
                <p className="text-white font-semibold text-base">
                  {item.name}
                </p>
                <p className="text-contact-chat mt-1 mb-0">
                  {item.message.slice(0, 30) + "..."}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}
