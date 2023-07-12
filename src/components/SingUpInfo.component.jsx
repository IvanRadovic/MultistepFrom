import React from 'react'

function SingUp({formData, setFormData}) {
  return (
    <div className='sign-up-container'>
        <input 
            type='email'
            placeholder='Email...'
            value={formData.email}
            onChange={(e) => setFormData({...formData, email:e.target.value})}
         />
         <input 
            type='text'
            placeholder='Password...'
            value={formData.password}
            onChange={(e) => setFormData({...formData, password:e.target.value})}

         />
         <input 
            type='text'
            placeholder='Comfirm password...'
            onChange={(e) => setFormData({...formData, comfPass:e.target.value})}
         />
    </div>
  )
}

export default SingUp