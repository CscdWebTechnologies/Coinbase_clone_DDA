import React from "react";
import { Container, Row, Jumbotron, Button } from "react-bootstrap";
import agt from "./assets/s21.svg";
import grt from "./assets/s22.svg";
import xlm from "./assets/s24.svg";
import comp from "./assets/comp.png";

const Section3 = () => {
  return (
    <Container>
      <Row className="big-box row-flex">
        <section className="flex-grid">
          <div sm={{ span: "4" }} xs={{ span: "6" }} className="col1-sec-3">
            <div className="sec3-text-grid">
              <h2 className="earth-font display-text">
                Earn up to $28 worth of crypto
              </h2>
              <p className="earth-font-p display-text">
                Discover how specific cryptocurrencies work — and get a bit of
                each crypto to try out for yourself.
              </p>
              <Button variant="primary" size="sm" className="start-earn-btn">
                Start earning
              </Button>
            </div>
          </div>

          <div className="col2-sec-3">
            <div style={{ width: "100%" }}>
              <div className="row-sec-3">
                <a href className="col-2-text">
                  <div className="inner-row">
                    <div className="content-display">
                      <img
                        src={agt}
                        alt="ampleforth logo"
                        className="sec-3-logo"
                      />
                      <h2 className="sec-3-text1 sec-3-text2 sec-3-text3">
                        Ampleforth Governance Token
                      </h2>
                      <h3 className="sub-text">FORTH</h3>
                    </div>
                    <div className="content-display">
                      <div className="earn-text">Earn $3 FORTH</div>
                    </div>
                  </div>
                </a>
                <a href className="col-2-text">
                  <div className="inner-row">
                    <div className="content-display">
                      <img
                        src={grt}
                        alt="the graph logo"
                        className="sec-3-logo"
                      />
                      <h2 className="sec-3-text1 sec-3-text2 sec-3-text3">
                        The Graph
                      </h2>
                      <h3 className="sub-text">GRT</h3>
                    </div>
                    <div
                      className="content-display"
                      style={{ marginLeft: "auto" }}
                    >
                      <div className="earn-text">Earn $3 GRT</div>
                    </div>
                  </div>
                </a>
                <a href className="col-2-text">
                  <div className="inner-row">
                    <div className="content-display">
                      <img
                        src={xlm}
                        alt="Stellar Lumens logo"
                        className="sec-3-logo"
                      />
                      <h2 className="sec-3-text1 sec-3-text2 sec-3-text3">
                        Stellar Lumens
                      </h2>
                      <h3 className="sub-text">XLM</h3>
                    </div>
                    <div
                      className="content-display"
                      style={{ marginLeft: "auto" }}
                    >
                      <div className="earn-text">Earn $10 XLM</div>
                    </div>
                  </div>
                </a>
                <a href className="col-2-text">
                  <div className="inner-row">
                    <div className="content-display">
                      <img
                        src={comp}
                        alt="compund logo"
                        className="sec-3-logo"
                      />
                      <h2 className="sec-3-text1 sec-3-text2 sec-3-text3">
                        The Graph
                      </h2>
                      <h3 className="sub-text">COMP</h3>
                    </div>
                    <div
                      className="content-display"
                      style={{ marginLeft: "auto" }}
                    >
                      <div className="earn-text">Earn $9 COMP</div>
                    </div>
                  </div>
                </a>
                <a href className="view-text">
                  View more &gt;
                </a>
              </div>
            </div>
          </div>
        </section>
      </Row>
    </Container>
  );
};
export default Section3;
