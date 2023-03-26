import "./SignUpModal.scss";

const SignUpModal = ({ onClose }) => {
  return (
    <div className="modal-background" onClick={onClose}>
      <div className="modal">
        <h2>Sign Up</h2>
        <form className="signup-form">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Sign Up</button>
        </form>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignUpModal;
