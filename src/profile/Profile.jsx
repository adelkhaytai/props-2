import React from 'react'
import PropTypes from "prop-types";
let img = {
  width: '300px',
}
let styles ={
  color : 'red',
  fontFamily: 'sansSerif',
}
let border ={
border: 'solid 1px black',
}

const Profile = ({fullname,bio,profession}) => {
  return (
   <div className='con'>
     <div className='container'>
<h1 style={styles}> {fullname}</h1>
<h2 style={border}>{bio} </h2>
<h3>{profession} </h3>
<img style={img} src="/astronaut.png" alt="" />
</div>
   </div>
  )
}
Profile.defaultProps={
  fullname: 'adel',
}

Profile.propTypes ={
  fullname: PropTypes.string,
}

export default Profile