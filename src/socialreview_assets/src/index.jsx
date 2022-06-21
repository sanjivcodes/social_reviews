
import * as React from 'react';
import { render } from 'react-dom';
import { socialreview as canister } from "../../declarations/socialreview";

import { socialreview } from "../../declarations/socialreview";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const domain = document.getElementById("domain").value.toString();

//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await dforms.greet(domain);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });

class SocialReview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
      <Container>
        <div><h1>Social Review</h1></div>
      </Container>
    </div>
    );
  }
}

render(<SocialReview />, document.getElementById('app'));
