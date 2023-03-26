import "./Modal.scss";

function Modal(props) {
  const { show, onClose, children } = props;

  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
