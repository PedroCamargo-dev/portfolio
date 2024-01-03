import { FC, ReactNode } from "react";
import Footer from "../Organisms/Footer";
import Navbar from "../Organisms/Navbar";
import StarCanvas from "./StarBackground";

interface TemplateProps {
  children: ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <StarCanvas />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Template;
