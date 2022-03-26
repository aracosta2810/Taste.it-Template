// import "../styles/Toast.css";

const Toast = ({ message, setToast }) => {
  return (
      <div
        className="toast fade show p-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        style={{zIndex:100000, position:'fixed', bottom:0, left:0, background: 'rgba(228, 43, 22, 0.8)'}}
      >
        <div className="toast-header bg-transparent text-white">
        <strong className="mr-auto">Info</strong>
          <button
            onClick={() => setToast(false)}
            data-dismiss="toast"
            type="button"
            className="ml-2 mb-1 close text-white"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div
          className="toast-body text-white m-0 p-0 px-5"
          style={{ fontSize: "1.1rem" }}
        >
          {message}
        </div>
      </div>
  );
};

export default Toast;
