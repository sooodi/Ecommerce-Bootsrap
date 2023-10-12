import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="m-0 py-3 rounded-bottom bg-dark fixed-bottom">
      <div className="container d-flex  justify-content-center w-100">
        <div className=" d-flex flex-column  ">
          <span className="text-muted mb-2 ">
            Copyright &copy; Wsebsite @2023 by Sodabeh
          </span>

          <div className="bg-white d-flex flex-row justify-content-center align-items-centers py-1  px-2 rounded">
            <h5 className="mt-1 text-muted">Follow me on</h5>

            <a
              href="https://www.linkedin.com/in/sudabeh-taherpanah"
              className="ms-2"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
            </a>
            <a href="https://github.com/sooodi" className="ms-2 ">
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
