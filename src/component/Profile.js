import React from 'react'
import '../style.css';
function Profile() {
  return (
    <div className='Login_container'>
    <div className='Login_details' style={{height:'600px'}}>
         <h2>Profile Page</h2>
      <div >
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Avatar"
          style={{ borderRadius: '50%', marginBottom: '10px' }}
        />
      </div>
      <p>
        <strong>Name:</strong> Ivan Herald W
      </p>
      <p>
        <strong>Email:  </strong>ivanheraldd@gmail.com
      </p>
      <p>
        <strong>Location:  </strong> Coimbatore, India
        </p>
      <p>
        <strong>About Me:   </strong>An Extremely motivated individual who is able to work in a busy environment <br/>and produce high standards
of work. <br/>A team player with excellent communication and interpersonal skills,<br/> capable of collaborating
with colleagues to achieve common goals.
      </p>
    </div>
    </div>
  )
}

export default Profile