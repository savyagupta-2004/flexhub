// import React from 'react'
// import PropTypes from 'prop-types'
// import { Link } from "react-router-dom"


// export default function NavbarTextCraft(props) {
//   return (
//     <div>
//       <nav className={`NavbarTextCraft NavbarTextCraft-expand-lg NavbarTextCraft-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <Link className="NavbarTextCraft-brand" to="/">{props.title}</Link>
//     <button className="NavbarTextCraft-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#NavbarTextCraftSupportedContent" aria-controls="NavbarTextCraftSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="NavbarTextCraft-toggler-icon"></span>
//     </button>
//     <div className="collapse NavbarTextCraft-collapse" id="NavbarTextCraftSupportedContent">
//       <ul className="NavbarTextCraft-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link active" to="/about">{props.About_us}</Link>
//         </li>
        
        
//       </ul>
//       {/* <button type="button" className="btn btn-success" onClick={props.handleGreenTheme}>Green Theme</button>
//       <button type="button" className="btn btn-danger"  onClick={props.handleRedTheme}>Red Theme</button>
//       <button type="button" className="btn btn-info"  onClick={props.handleInfoTheme}>Sky Blue Theme</button> */}
//     </div>
//   </div>
//   <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
//   <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//   <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.text}</label>
// </div>
// </nav>

//     </div>

//   )
// }
// NavbarTextCraft.propTypes={
//     title : PropTypes.string.isRequired,
//     About_us : PropTypes.string
// }
