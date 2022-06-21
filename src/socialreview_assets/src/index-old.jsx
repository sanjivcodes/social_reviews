
import * as React from 'react';
import { render } from 'react-dom';
import { socialreview as canister } from "../../declarations/socialreview";

import { socialreview } from "../../declarations/socialreview";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


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
