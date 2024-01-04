import React from "react";
import "./Contribute.css"; // Assuming you have a CSS file for styling
import QnaCard from "./QnaCard";
import supportimg from "../../assets/Support.svg";
import UPIimg from "../../assets/UPI.svg";
import QRCODE from "../../assets/QR.jpeg";

function Contribute() {
  return (
    <div className="Contribute-Container">
      <div>
        <div className="Support-Section">
          <img src={supportimg} alt="Support Prayaas" />
          <h2>Support Prayaas</h2>
          <p>
            At Prayaas Club, we are committed to making a positive impact on
            society through various initiatives.
            Your support is crucial to the success of these
            initiatives. By donating to Prayaas Club, you directly contribute to
            the betterment of education, environmental sustainability,
            healthcare, and community engagement.Your support matters, and together, we can make a
            difference.<br></br>
            Thank you for being a part of the Prayaas family!
          </p>
        </div>
      </div>
      <div className="Payment-Section">
        <div className="UPIIMG">
          <img src={UPIimg} alt="UPI Payment Method" />
        </div>
        <div className="QR-content">
          <div className="QR-Code">
            <img src={QRCODE} alt="QR Code for UPI" />
          </div>
          <div className="INFO">
            <h6>UPI</h6>
            <p>
              If you are from India, you can use UPI for one-time contribution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
