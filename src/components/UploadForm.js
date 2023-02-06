import {useState} from 'react'
import ProgressBar from './ProgressBar';
import  classes from './UploadForm.module.css'

const UploadForm = () => {
    const [file,setFile]=useState(null);
    const [error,setError]=useState(null);
    const types=['image/png','image/jpeg'];
    const changeHandler=(e)=>{
    let selected=e.target.files[0];
    if(selected&&types.includes(selected.type)){
    
    setFile(selected);
    setError(null);
    }
    else{
        setFile(null);
    setError('Please select an image file with types png or jpeg')
    }

    }
  return (
    <>
  <form>
    <label>
<input type='file' onChange={changeHandler}/>
<span>+</span>

</label>
<div className={classes.output}>
{error && <div className={classes.error}>{error}</div>}
{file && <div>{file.name}</div>}
{file && <ProgressBar file={file} setFile={setFile} /> }

</div>
  </form>

    </>
  )
}

export default UploadForm