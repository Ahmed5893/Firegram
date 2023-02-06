import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImagesGrid from'./components/ImagesGrid'
import ImageModal from "./components/ImageModal";
import { useState } from "react";

function App() {
  const [selected,setSelected]=useState(null);
  const handleClose=()=>{setSelected(null)}
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImagesGrid setSelected={setSelected}/>
      {selected && <ImageModal selected={selected} onClose={handleClose} />}
    </div>
  );
}

export default App;
