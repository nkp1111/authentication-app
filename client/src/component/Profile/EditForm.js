import React, { useRef } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'

import { fetchProfileEdited } from '../../utils'

const EditForm = ({ userData, setEditProfile }) => {

  const imageRef = useRef();

  const handleEdit = (e) => {
    // check editted information and send to database
    e.preventDefault()
    e.stopPropagation()
    const form = e.currentTarget
    if (!form.checkValidity()) {
      form.classList.add("was-validated")
    }
    else {
      const editedProfileInfo = {}

      // image field 
      const img = imageRef.current.files[0]
      const reader = new FileReader()
      reader.readAsDataURL(img)
      reader.addEventListener("loadend", function (e) {
        const image = this.result
        editedProfileInfo["image"] = image

        // inputs field 
        const inputs = form.querySelectorAll("input")
        inputs?.forEach((input, ind) => {
          if (ind > 0) {
            editedProfileInfo[input.id] = input.value
          }
        })

        // bio field 
        const textarea = form.querySelector("textarea")
        editedProfileInfo["bio"] = textarea.value

        fetchProfileEdited(editedProfileInfo)
      })
    }
  }

  return (
    <div>
      <button onClick={() => setEditProfile(false)}><MdArrowBackIosNew /> Back</button>
      <section className='profile-edit'>
        <h2>Change Info</h2>
        <p>Changes will be reflected to every services</p>

        <form onSubmit={(e) => handleEdit(e)}
          className='edit-form needs-validation'
          noValidate>

          {/* image  */}
          <div className="mb-3 d-flex align-items-center">
            <div className='profile-img-edit'>
              <img src="https://www.gravatar.com/avatar/" alt="" />
            </div>
            <label htmlFor='image' role="button">CHANGE PHOTO
              <input type="file" id="image" name="image"
                className='invisible'
                ref={imageRef}
                required />
            </label>
          </div>

          {/* name  */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name..."
              required
              autoComplete={userData?.name ? userData.name : "true"} />
          </div>

          {/* bio  */}
          <div className="mb-3">
            <label htmlFor="bio" className="form-label">Bio</label>
            <textarea type="text" className="form-control" id="bio" placeholder="Enter your bio..."
              required
              autoComplete={userData?.bio ? userData.bio : "true"} />
          </div>

          {/* phone  */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="text" className="form-control" id="phone" placeholder="Enter your phone..."
              required
              autoComplete={userData?.phone ? userData.phone : "true"} />
          </div>

          {/* email  */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email..."
              required
              autoComplete={userData?.email ? userData.email : "true"} />
          </div>

          {/* password  */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="text" className="form-control" id="password" placeholder="Enter your password..."
              required
              autoComplete="**********" />
          </div>

          <div className="mb-3">
            <button className='btn' type="submit">Save</button>
          </div>
        </form>

      </section>
    </div>
  )
}

export default EditForm
