import React, { useEffect, useState } from "react"
import logo from "../assets/logo-dark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Header } from "./Header"

export function Dashboard() {
  return (
    <>
<Header />
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
      <div class="card shadow-md rounded bg-light">
        <div class="card-body px-4 py-4">
          <div class="row>">
              <div class="col-md-1">
                <ul class="list-unstyled d-flex">
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
              </div>
              <div class="col-md-11">
                <p>
                  <i class="fas fa-quote-left"></i>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                  ad velit ab hic tenetur.
                </p>
              </div>
          </div>
          <h6 class="font-weight-bold">Teresa</h6>
        </div>
      </div>
    </div>
</section>
</div>
    </>
  )
}