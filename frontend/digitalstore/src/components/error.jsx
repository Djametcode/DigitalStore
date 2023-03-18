import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

const ErrorPage = () => {
  return (
    <div>
      <Header />
      <div>Error silahkan kembali</div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ErrorPage;
