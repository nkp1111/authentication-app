import React from 'react'

const UserInfo = ({ userData, setEditProfile }) => {

  const { image } = userData

  let imageToShow
  if (!image) {
    imageToShow = "https://www.gravatar.com/avatar/"
  } else {
    imageToShow = image.url
  }

  return (
    <section className='personal-info'>
      <h2 className='text-center'>Personal info</h2>
      <p className='text-center'>Basic info, like your name and photo</p>
      <div className="card">
        {/* card heading  */}
        <div className="card-header d-flex align-items-center justify-content-between">
          <div>
            <h3 className="card-title">
              Profile
            </h3>
            <p>Some info may be visible to other people</p>
          </div>
          <div>
            <button onClick={() => setEditProfile(true)} className='btn'>
              Edit
            </button>
          </div>
        </div>
        {/* card body  */}
        <div className="card-body">
          <div className="container">
            {["photo", "name", "bio", "phone", "email", "password"].map(item => {
              return (
                <div className="row" key={item}>
                  {/* item name  */}
                  <div className="col-4">
                    <p>{item.toUpperCase()}</p>
                  </div>
                  {/* profile value  */}
                  <div className="col-8">
                    {item === "password"
                      ? "**********"
                      : item === "photo"
                        ? <img src={imageToShow} alt="avatar" width="50" height="50" />
                        : item === "email"
                          ? userData["username"]
                          : userData[item]}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInfo
