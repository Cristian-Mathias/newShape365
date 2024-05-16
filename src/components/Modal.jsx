import React from 'react'


const BACKGROUND_STYLE = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: 'rgb(0,0,0, 0.1)',
  zIndex: '1000'
}

const MODAL_STYLE = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  padding: '150px',
  backgroundColor: '#fff',
  borderRadius: '10px',
  color: 'black',
  height: '500px'
}
const CLOSE_BUTTON_STYLE = {
  position: 'absolute',
  top: '10px', 
  right: '10px', 
  width:'30px',
  height:'30px',
  backgroundColor: '#75a99c',
  color: '#ffffff',
  border: 'none',
  borderRadius:'4px',
  cursor: 'pointer',
};

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div style={BACKGROUND_STYLE}>
        <div style={MODAL_STYLE}>
          <div>{children}</div>
          <button style={CLOSE_BUTTON_STYLE} onClick={setModalOpen}>X</button>
        </div>
      </div>
    )
  }

  return null
}