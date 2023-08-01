import React from 'react';

// function Links({}) {
//     return (
//       <div>
//         <h3>Links</h3>
//         <a href="https://github.com/liza" target="_blank" rel="noopener noreferrer">GitHub</a>
//         <a href="https://www.linkedin.com/in/liza/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//       </div>
//     );
//   };
  
//   export default Links;
const Links = ({ github, linkedin }) => {
    return (
      <div>
        <h3>Links</h3>
        <a href={"https://github.com/liza"} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={"https://www.linkedin.com/in/liza/"} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    );
  };
  
  export default Links;
 
  
  
  
  
  