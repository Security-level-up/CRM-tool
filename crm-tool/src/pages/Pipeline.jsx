import "./Pipeline.css";
import SideNav from "../components/SideNav";

const Pipeline = () => {
  return (
    <div className="page-container">
      <SideNav /> {/* Include the SideNav component */}
      {/* Your main content goes here */}
      <div className="main-container">
        {/* Main content of your home page */}
        <h1>Welcome to the Home Page</h1>
        <p>This is your home page content.</p>
      </div>
    </div>
  );
};

export default Pipeline;
