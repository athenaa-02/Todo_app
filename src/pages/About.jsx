import { useEffect } from "react";
import useCanonical from "../hooks/useCanonical";

function About() {
  useCanonical("https://todo-app-vert-two-28.vercel.app/about");

  useEffect(() => {
    document.title = "ჩვენ შესახებ | My Website";
  }, []);

  return <div>About</div>;
}

export default About;
