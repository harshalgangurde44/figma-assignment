import React from "react";
import "./payouts.css";
import question from "./assets/question.svg";
import message from "./assets/message.svg";
import circle from "./assets/circleArrow.svg";
import search from "./assets/search.svg";
import Arrow1 from "./assets/Arrow1.svg";
import rightArrow from "./assets/rightArrow.svg";
import question1 from "./assets/question1.svg";
import blueArrow from "./assets/blueArrow.svg";
import double from "./assets/double.svg";
import download from "./assets/download.svg";
import { transactionData } from "../constants";
const PayoutSection2 = () => {
  return (
    <div>
      <div className="top-right">
        <div className="part1-right">Payouts</div>
        <div className="part2-right">
          <img className="q1-img" src={question} />
          <div className="q1-part">How it works</div>
        </div>
        <div className="part3-right">
          <img className="search-img" src={search} />
          <div className="search">Search features, tutorials, etc.</div>
        </div>
        <div className="part4-right">
          <img className="sms-img" src={message} />
          <img className="sms-img" src={circle} />
        </div>
      </div>

      {/*  */}
      <div className="top-bottom">
        <div className="bottom-container">
          <div className="section1">
            <div className="overview">Overview</div>
            <div className="month">
              <div className="subpart">This Month</div>
              <img src={Arrow1} className="subpart-img" />
            </div>
          </div>
          <div className="section2">
            <div className="sub-section-content1">
              <div className="next flex">
                <div>Next Payout</div>
                <img src={question1} />
              </div>
              <div className="order flex">
                <div>₹2,312.23</div>
                <div className="flex order1">
                  <div className="sub-order">23 orders </div>
                  <img className="sub-order-img" src={rightArrow} />
                </div>
              </div>
              <div className="date flex">
                <div className="date1">Next payout date:</div>
                <div className="date2">Today, 04:00PM</div>
              </div>
            </div>

            {/*  */}
            <div className="sub-section-content2">
              <div className="amount flex">
                <div className="q1-title">Amount Pending</div>
                <img className="q1-img1" src={question} />
              </div>
              <div className="amount-num flex">
                <div className="b1-title2">₹92,312.20</div>
                <div className="flex ">
                  <div className="b1-title">13 orders</div>
                  <img className="b1-img" src={blueArrow} />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="sub-section-content3">
              <div className="proccess flex">
                <div className="a1">Amount Processed</div>
                <img className="q1-img2" src={question} />
              </div>
              <div className="numbers">₹23,92,312.19</div>
            </div>
          </div>

          {/*  */}
          <div className="footer-container">
            <div className="footer-part1">Transactions | This Month</div>
            <div className="flex footer-part2 ">
              <div className="btn-1">Payouts (22)</div>
              <div className="btn-2">Refund (22)</div>
            </div>

            <div className="footer-part3 flex">
              <div className="div1 flex">
                <img className="search-id" src={search} />
                <div className="search-title">Order ID or transaction ID</div>
              </div>
              <div className="div2 flex">
                <div className="content1 flex">
                  <div className="div-content">Sort</div>
                  <img className="div-img" src={double} />
                </div>
              </div>
              <div className="div3">
                <img src={download} />
              </div>
            </div>

            {/*  */}

            <div>
              <table>
                <thead style={{ display: "table-header-group" }}>
                  <tr>
                    <th>Order ID</th>
                    <th>Status </th>
                    <th>Transaction ID </th>
                    <th>Refund date </th>
                    <th>Order amount </th>
                  </tr>
                </thead>
                <tbody>
                  {transactionData.map((transaction) => (
                    <tr key={transaction.orderId}>
                      <td className="table-color">{transaction.orderId}</td>
                      <td className="flex">
                        <div className="green-color"></div>
                        {transaction.status}
                      </td>
                      <td>{transaction.transactionId}</td>
                      <td>{transaction.time}</td>
                      <td>{transaction.price}</td>
                    </tr>
                  ))}

                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutSection2;
