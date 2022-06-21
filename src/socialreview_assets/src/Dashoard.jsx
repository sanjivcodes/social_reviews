import React, { useEffect, useState } from "react"
import logo from "../assets/logo-dark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export function Dashboard() {
  return (
    <>
<div class="container">
<section >
  <div class="container py-5">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-xl-8 text-center">
        <h3 class="fw-bold mb-4">Social Reviews</h3>
        <p class="mb-4 pb-2 mb-md-5 pb-md-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
          numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
          quisquam eum porro a pariatur veniam.
        </p>
      </div>
    </div>

    <div class="row text-center">
      <div class="col-md-12 mb-4 mb-md-0">
        <div class="card shadow-md">
          <div class="card-body py-4 mt-2">
            
            
            <ul class="list-unstyled d-flex justify-content-center">
              <li>
              <FontAwesomeIcon icon={faStar} size="sm" className="text-warning"/>
              </li>
              <li>
              <FontAwesomeIcon icon={faStar} size="sm" className="text-warning"/>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} size="sm" className="text-warning"/>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} size="sm" className="text-warning"/>
              </li>
              <li>
              <FontAwesomeIcon icon={faStar} size="sm" className="text-secondary"/>
              </li>
            </ul>
            <p class="mb-2">
              <i class="fas fa-quote-left pe-2"></i>Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
              ad velit ab hic tenetur.
            </p>
            <h6 class="font-weight-bold my-3">Teresa</h6>
          </div>
        </div>
      </div>
  
    
    </div>
  </div>
</section>
</div>
    </>
  )
}