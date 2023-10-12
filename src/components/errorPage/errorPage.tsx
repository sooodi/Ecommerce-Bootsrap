const ErrorPage = () => (
  <div
    className="container  mt-5 p-5 mb-5 justify-content-top bg-light  w-100 h-75"
    // style={{ minHeight: "560px" }}
  >
    <div className="p-16">
      <p className="h-10"> OOps!, Somthing went wrong</p>
      <hr />
      <h1 className="text-center" role="heading">
        <br />
        <span role="heading">Please Try later </span>
      </h1>
    </div>
  </div>
);

export default ErrorPage;
