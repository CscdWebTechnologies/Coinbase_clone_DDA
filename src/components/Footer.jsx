import React from "react";
import logo from "./assets/logo.svg";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="foo-container">
      <div className="content-box">
        <div className="cols">
          <img src={logo} alt="coinbase logo" className="foo-coinbase-icon" />
          <select className="select-box">
            <option value="de">Deutsch</option>
            <option selected="" value="en">
              English
            </option>
            <option value="es">Español - España</option>
            <option value="es-LA">Español - América Latina</option>
            <option value="fr">Français - France</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="it">Italiano</option>
            <option value="ko">한국어</option>
            <option value="pl">Polski</option>
            <option value="pt">Português - Brasil</option>
            <option value="pt-PT">Português - Portugal</option>
            <option value="ru">Pусский</option>
            <option value="th">ไทย</option>
            <option value="tr">Türkçe</option>
          </select>
          <div className="small-box">
            <p className="copyright-text">© 2021 Coinbase</p>
            <div className="contact-box">
              <a href="#home" className="link-text1 link-text2">
                Blog
              </a>
              <span className="dot">•</span>
              <a href="#home" className="link-text1 link-text2">
                Twitter
              </a>
              <span className="dot">•</span>
              <a href="#home" className="link-text1 link-text2">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col1">
          <div>
            <div className="cols">
              <h2 className="foo-heading">Company</h2>
              <a className="link-text1 link-text2" href="##">
                About
              </a>
              <a className="link-text1 link-text2" href="##">
                Careers
              </a>
              <a className="link-text1 link-text2" href="##">
                Affiliates
              </a>
              <a className="link-text1 link-text2" href="##">
                Blog
              </a>
              <a className="link-text1 link-text2" href="##">
                Press
              </a>
              <a className="link-text1 link-text2" href="##">
                Investors
              </a>
              <a className="link-text1 link-text2" href="##">
                Legal & privacy
              </a>
              <a className="link-text1 link-text2" href="##">
                Cookie policy
              </a>
            </div>
            <div className="cols">
              <h2 className="foo-heading">Learn</h2>
              <a className="link-text1 link-text2" href="##">
                Browse crypto prices
              </a>
              <a className="link-text1 link-text2" href="##">
                Crypto basics
              </a>
              <a className="link-text1 link-text2" href="##">
                Tips & tutorials
              </a>
              <a className="link-text1 link-text2" href="##">
                Market updates
              </a>
              <a className="link-text1 link-text2" href="##">
                What is Bitcoin?
              </a>
              <a className="link-text1 link-text2" href="##">
                What is crypto?
              </a>
              <a className="link-text1 link-text2" href="##">
                What is a blockchain?
              </a>
              <a className="link-text1 link-text2" href="##">
                How to set up a crypto wallet
              </a>
              <a className="link-text1 link-text2" href="##">
                How to send crypto
              </a>
              <a className="link-text1 link-text2" href="##">
                Taxes
              </a>
            </div>
          </div>
          <div>
            <div className="cols">
              <h2 className="foo-heading">Individuals</h2>
              <a className="link-text1 link-text2" href="##">
                Buy & sell
              </a>
              <a className="link-text1 link-text2" href="##">
                Earn free crypto
              </a>
              <a className="link-text1 link-text2" href="##">
                Wallet
              </a>
              <a className="link-text1 link-text2" href="##">
                Card
              </a>
            </div>
            <div className="cols">
              <h2 className="foo-heading">Businesses</h2>
              <a className="link-text1 link-text2" href="##">
                Prime
              </a>
              <a className="link-text1 link-text2" href="##">
                Custody
              </a>
              <a className="link-text1 link-text2" href="##">
                Asset Hub
              </a>
              <a className="link-text1 link-text2" href="##">
                Commerce
              </a>
            </div>
            <div className="cols">
              <h2 className="foo-heading">Delevopers</h2>
              <a className="link-text1 link-text2" href="##">
                Coinbase Cloud
              </a>
              <a className="link-text1 link-text2" href="##">
                Connect
              </a>
              <a className="link-text1 link-text2" href="##">
                Commerce
              </a>
              <a className="link-text1 link-text2" href="##">
                Pro
              </a>
              <a className="link-text1 link-text2" href="##">
                Bison Trails
              </a>
              <a className="link-text1 link-text2" href="##">
                WalletLink
              </a>
              <a className="link-text1 link-text2" href="##">
                Rosetta
              </a>
              <a className="link-text1 link-text2" href="##">
                USDC
              </a>
            </div>
          </div>
          <div>
            <div className="cols">
              <h2 className="foo-heading">Support</h2>
              <a className="link-text1 link-text2" href="##">
                Help center
              </a>
              <a className="link-text1 link-text2" href="##">
                Contact us
              </a>
              <a className="link-text1 link-text2" href="##">
                Create account
              </a>
              <a className="link-text1 link-text2" href="##">
                ID verification
              </a>
              <a className="link-text1 link-text2" href="##">
                Account information
              </a>
              <a className="link-text1 link-text2" href="##">
                Payment methods
              </a>
              <a className="link-text1 link-text2" href="##">
                Account access
              </a>
              <a className="link-text1 link-text2" href="##">
                Supported crypto
              </a>
              <a className="link-text1 link-text2" href="##">
                Supported countries
              </a>
              <a className="link-text1 link-text2" href="##">
                Status
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
