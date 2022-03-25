const Toast = ({setToast, message}) => {
    return (
        <div id="toastsContainerTopRight" className="toasts-top-right fixed ">
            <div className="toast bg-info fade show" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header"><strong className="mr-auto">Info</strong>
                <button onClick={() => setToast(false)} data-dismiss="toast" type="button" className="ml-2 mb-1 close" aria-label="Close"><span aria-hidden="true">×</span></button>
              </div>
              <div className="toast-body">
                {message}
              </div>
            </div>
        </div>
    );
}

export default Toast;