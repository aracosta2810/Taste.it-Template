const Error404 = () => {
  return (
    <div
      className={"display-4 text-center bg-light pt-5"}
      style={{
        zIndex: 1000000,
        position: "absolute",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
      }}
    >
      <b>Error 404</b>. Page Not Found
    </div>
  );
};

export default Error404;
