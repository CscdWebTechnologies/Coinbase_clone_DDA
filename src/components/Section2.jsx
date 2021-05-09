import React from "react"
import {Table, Container, Button } from "react-bootstrap"
import bitcoin from "./assets/logo1.png"
import etheruem from "./assets/logo2.png"
import bitcoinCash from "./assets/logo3.png"
import litecoin from "./assets/logo4.png"

const Section2=()=>{
    return (
      <Container>
        <Table size="md">
          <thead>
            <tr>
              <th>#</th>
              <th><label>Name</label></th>
              <th>Price</th>
              <th>Change</th>
              <th>Chart</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
              <tr className="bitcoin">
                  <td><h4>1</h4></td>
                  <td>
                      <img src={bitcoin} alt="bitcoin logo" height="36" width="36"/>
                  </td>
                  <td><h4>GHS 333,490.67</h4></td>
                  <td><h4>-2.67</h4></td>
                  <td>1</td>
                  <td><Button variant="success" size="md">Buy</Button></td>

              </tr>
              <tr className="ethereum">
                  <td><h4>2</h4></td>
                  <td>
                      <img src={etheruem} alt="bitcoin logo" height="36" width="36"/>
                  </td>
                  <td><h4>GHS 333,490.67</h4></td>
                  <td><h4>-2.67</h4></td>
                  <td>1</td>
                  <td><Button variant="success" size="md">Buy</Button></td>

              </tr>
              <tr className="bitcoinCash">
                  <td><h4>3</h4></td>
                  <td>
                      <img src={bitcoinCash} alt="bitcoin logo" height="36" width="36"/>
                  </td>
                  <td><h4>GHS 333,490.67</h4></td>
                  <td><h4>-2.67</h4></td>
                  <td>1</td>
                  <td><Button variant="success" size="md">Buy</Button></td>

              </tr>
              <tr className="litecoin">
                  <td><h4>4</h4></td>
                  <td>
                      <img src={litecoin} alt="bitcoin logo" height="36" width="36"/>
                  </td>
                  <td><h4>GHS 333,490.67</h4></td>
                  <td><h4>-2.67</h4></td>
                  <td>1</td>
                  <td><Button variant="success-custom" size="md">Buy</Button></td>

              </tr>
          </tbody>
        </Table>
      </Container>
    );
}
export default Section2