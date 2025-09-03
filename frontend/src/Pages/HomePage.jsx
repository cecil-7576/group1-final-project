import React, {useEffect} from 'react';
import Landing from '../Components/Landing';
import Footer from '../Components/Footer';


function HomePage({ scrollTo }) {

  useEffect(() => {
    if (scrollTo === "footer") {
      const footer = document.getElementById("footer");
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" });
      }
    } else if (scrollTo === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [scrollTo]);
  return (
    <>
        <Landing />
        {/* <Footer id="footer" /> */}
        {/* <ProductList /> */}
        
    </>
  )
}

export default HomePage