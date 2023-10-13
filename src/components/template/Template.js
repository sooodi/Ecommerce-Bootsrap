import Content from "./Content";
import Footer from "./Footer";
import "./template.css";

function Template(props) {
  return (
    <>
      {/* <Header /> */}
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Template;
