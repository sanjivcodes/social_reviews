import React, { useEffect, useState } from "react"
import logo from "../assets/logo-dark.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Header } from "./Header"
import { socialreview as canister } from "../../declarations/socialreview";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

export default class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  async doInsert() {
    let rating = document.getElementById("newRating").value;
    let feedback = document.getElementById("newFeedback").value;
    let userId = document.getElementById("userId").value;
    let businessId = document.getElementById("businessId").value;
    canister.insert(rating, feedback, userId, businessId);
  }

  
  render() {
    // const [signedIn, setSignedIn] = useState(false)
    // const [principal, setPrincipal] = useState("")
  return (
    <>
<Header />
<div class="container">
  
<section >
    <div class="container">
  
          <div class="mt-4">
            <table class="mt-4 mb-3 col-12">
              <tbody>
                <input class="form-control" required id="newRating" type="hidden"></input>
                <textarea class="form-control" row="3" required id="newFeedback"></textarea>
                <input class="form-control " type="hidden" required id="userId"  ></input>
                <input  class="form-control " type="hidden" id="businessId" ></input>

              </tbody>
            </table>
            <Button onClick={() => this.doInsert()} variant="success">Submit Review</Button>
          </div>
      <div class="card shadow-md rounded bg-light mt-5">
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
                  <i class="fas fa-quote-left"></i>Very good product. Love the detailed stats fitbit provides. Really looking forward to the new version launch.
                </p>
              </div>
          </div>
          <h6 class="font-weight-bold">Jay <span class="text-primary">(3eqwz-k6u2t-isw5z-x2fbr-erqnp-6eljo-bexdo-sjwmx-ipyfg-vsi56-5ae)</span></h6>
        </div>
      </div>
    </div>
</section>
</div>
    </>
  )
}};