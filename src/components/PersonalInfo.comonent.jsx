import React from 'react'

function PersonalInfo({formData, setFormData}) {
  return (
    <div className='other-info-container'>
          <input 
            type='text'
            placeholder='First name...'
            value={formData.name}
            onChange={(e) => setFormData({...formData, name:e.target.value})}
         />
         <input 
            type='text'
            placeholder='Last Name...'
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName:e.target.value})}
         />
          <input 
            type='text'
            placeholder='UserName...'
            value={formData.username}
            onChange={(e) => setFormData({...formData, username:e.target.value})}
         />
    </div>
  )
}

export default PersonalInfo