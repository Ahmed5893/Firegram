import React from 'react'
import Modal from './Modal-UI/Modal'

const ImageModal = ({selected,onClose}) => {
  return (
   
    <Modal onClose={onClose}>
      <img src={selected} alt='zoom in' className='img-modal' />
      <button onClick={onClose} className='btn-close'>Close</button>
    </Modal>
  )
}

export default ImageModal