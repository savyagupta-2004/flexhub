import React  from 'react'
export default function About() {

    // const [myStyle,setmyStyle]=useState({
    // color:'white',
    // backgroundColor:'black'
    
// })
// const [btntext,setbtntext]=useState("Enable dark mode");
// const toggleStyle=()=>{
//     if(myStyle.color==='white'){
//         setmyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setbtntext("Enable dark mode")
//     }
//     else{
//         setmyStyle({
//             color:'white',
//             backgroundColor:'black',
//             border:'2px solid white'   
//         })
//         setbtntext("Enable light mode")
//     }

// }

  return (
    <>
    <div className='container' style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }}>
        <div className="accordion" id="accordionExample" style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }}>
  <div className="accordion-item">
    <h2 className="accordion-header">
    <h1 className='my-2' style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }}><strong>About us</strong></h1>
      <button style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Know about the Developer</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>What does the Developer think about you</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>special message</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{ color: '#333', backgroundColor: '#f8f9fa', border: "1px solid #dee2e6", borderRadius: '5px' }}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
<div className="conatiner my-2">
{/* <button type="button" className="btn btn-primary" value="text" onClick={toggleStyle} >{btntext}</button> */}
</div>
      
    </div>
    </>
  )
}


