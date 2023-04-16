import React from 'react'
import { GrGoogle, GrFacebook, GrTwitter, GrGithub } from 'react-icons/gr'

import { Link } from 'react-router-dom'

const SocialProfile = ({ type }) => {
  return (
    <div className='app__form-social'>
      <p className='text-center'>or continue with these social profile</p>
      <div className="social-icons d-flex justify-content-center">
        {[GrGoogle, GrFacebook, GrTwitter, GrGithub].map((Item, ind) => (
          <div className='icon mx-2'>
            {<Item key={ind} />}
          </div>
        ))}
      </div>
      <p className="text-center">Already a member?
        <Link to={`/form/${type === "signup" ? "login" : "signup"}`}>
          {type === "signup" ? "Login" : "Register"}
        </Link>
      </p>
    </div>
  )
}

export default SocialProfile
