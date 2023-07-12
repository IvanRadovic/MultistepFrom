import React, {useState} from 'react'
import SingUp from './SingUpInfo.component';
import PersonalInfo from './PersonalInfo.comonent';
import OtherInfo from './OtherInfo.component';

const Form = () =>  {

  const [page, setPage] = useState(0);
  const [ formData, setData] = useState({
    email:'',
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    username:'',
    nationality:'',
    other:''
  });
  const FormTitles = ['Sing up', 'Presonal info', 'Other']

  const pageDisplay = () => {
    if (page === 0) {
      return <SingUp formData={formData} setFormData={setData} />
    }else if (page === 1) {
      return <PersonalInfo formData={formData} setFormData={setData} />
  } else{
    return <OtherInfo formData={formData} setFormData={setData} />
  }
}

  const handlePagePlsChange = () => {
      setPage((currPage) => currPage + 1);
    };
    const handlePageMnsChange = () => {
      if(page === FormTitles.length){
        alert("Form submited");
      }else{
        setPage((currPage) => currPage - 1);
      }
    };

  return (
    <div className='form'>
        <div className='progressbar'>
          <div style={{width: page === 0  ? "33.33%" : page === 1 ?  '66.66%' : "100%"}}></div>
        </div>
        <div className='form-container'>
            <div className="header">
              <h1>{FormTitles[page]}</h1>
            </div>
            <div className="body">{pageDisplay()}</div>
            <div className="footer">
                <button 
                  disabled={page == 0} 
                  onClick={handlePageMnsChange}>Prev</button>
                <button 
                  disabled = {page === FormTitles.length - 1}
                  onClick={handlePagePlsChange}
                 >
                  { page === FormTitles.length - 1 ? 'Submit' : 'Next'}
                 </button>
            </div>
        </div>
    </div>
  )
}

export default Form;
