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

  componentDidMount() {
    this.fetchReviews()
 }

  async doInsert() {
    let rating = parseInt(document.getElementById("newRating").value);
    let feedback = document.getElementById("newFeedback").value;
    let userId = document.getElementById("userId").value;
    let businessId = document.getElementById("businessId").value;
    canister.insert(userId, rating, feedback, businessId);

    this.fetchReviews();
  }

  async fetchReviews() {
    var reviews = await canister.getBusinessReviews().then( results => {
    console.log(results);
    var output = "";

      if(results.length > 0) {
        results.forEach(function(value, index){
          console.log("value is")
        console.log(value)
       output = output + '<div class="card shadow-md rounded bg-light mt-3">';
       output = output + '<div class="card-body px-4 py-4"><div class="row>"><div class="col-md-1"><ul class="list-unstyled d-flex">';
       output = output + '<li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-sm text-warning" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></li>'
       output = output + '<li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-sm text-warning" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></li>'

       output = output + '<li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-sm text-warning" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></li>'
       output = output + '<li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-sm text-warning" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></li>'
       output = output + '<li><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-sm text-warning" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></li>'
       output = output + '</ul></div><div class="col-md-11">'
               
            

         output = output+'<p>'+ value["feedback"] +'</p>';
        
        output = output+' </div></div>';
        output = output + '<h6 class="font-weight-bold">User <span class="text-primary">('+value["userId"] + ')</span></h6></div></div>';

        });
        console.log(output);
        let table = document.getElementById("reviews-list");
        table.innerHTML = output;
      };
    });

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
                <input class="form-control" required id="newRating" value="5" type="hidden"></input>
                <textarea class="form-control" row="3" required id="newFeedback"></textarea>
                <input class="form-control " type="hidden" required id="userId" value="3eqwz-k6u2t-isw5z-x2fbr-erqnp-6eljo-bexdo-sjwmx-ipyfg-vsi56-5ae" ></input>
                <input  class="form-control " type="hidden" id="businessId" ></input>

              </tbody>
            </table>
            <Button onClick={() => this.doInsert()} variant="success">Submit Review</Button>
          </div>
          <div id="reviews-list"></div>
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