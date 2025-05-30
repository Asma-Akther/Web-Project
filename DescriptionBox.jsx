import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
         <div className="descriptionbox-nav-box">Description</div>
         <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
       <div className="descriptionbox-description">
         <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where bussiness and individuals can showcase their products,
            interact with customers and conduct trasaction without the need for a physical presence.
         </p>
       <p>
        E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available varirations(e.g. sizes, colours).
        Each product usually has its own dedicated page with relevant informations.
       </p>
       </div>
    </div>
  )
}
export default DescriptionBox