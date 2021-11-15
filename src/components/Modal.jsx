const Modal = ({ children }) => {
  return (
    <div class="modal-wrapper">
      <div class="modal">
        {children}
      </div>
    </div>
  )
}

export default Modal
