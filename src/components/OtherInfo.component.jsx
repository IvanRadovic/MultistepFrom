import React from 'react'

function OtherInfo({formData, setFormData}) {
  return (
    <div className='other-info-container'>
          <input 
            type='text'
            placeholder='Nationality...'
            value={formData.nationaltiy}
            onChange={(e) => setFormData({...formData, nationaltiy:e.target.value})}
         />
         <input 
            type='text'
            placeholder='Other...'
            value={formData.OtherInfo}
            onChange={(e) => setFormData({...formData, other:e.target.value})}
         />
    </div>
  )
}

export default OtherInfo