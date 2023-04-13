// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import {
//   About,
//   Contact,
//   Experience,
//   Feedbacks,
//   Hero,
//   Navbar,
//   Tech,
//   Works,
//   StarsCanvas,
// } from "./components";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-primary">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           {/* <Navbar />
//           <Hero /> */}
//
//         </div>

//         {/* <About />
//         <Experience />
//         <Tech />
//         <Works /> */}

//         <div
//           className="relative z-0
//         "
//         >
//           {/* <Contact />
//           <StarsCanvas /> */}
//           hi
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  Tech,
  StarsCanvas,
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
      <div
        className="relative z-0
         "
      >
        <Feedbacks />
        <Contact />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
};

export default App;
