import React from "react";
import "./payouts.css";
import logo from "./assets/logo.svg";
import Arrow from "./assets/downarrow.svg";
import home from "./assets/home.svg";
import order from "./assets/orders.svg";
import products from "./assets/products.svg";
import delivery from "./assets/delivery.svg";
import marketing from "./assets/marketing.svg";
import analytics from "./assets/analytics.svg";
import payouts from "./assets/payouts.svg";
import discounts from "./assets/discounts.svg";
import audience from "./assets/audience.svg";
import appearance from "./assets/appearance.svg";
import plugins from "./assets/plugins.svg";
import credits from "./assets/credits.svg";
import PayoutSection2 from "./PayoutSection2";
const Payouts = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <header className="top-section">
          <img src={logo} alt="logo" />
          <div className="name-section">
            <p className="name1">Nishyan</p>
            <p className="name2">Visit store</p>
          </div>
          <img src={Arrow} />
        </header>
        <div className="middle-section">
          <div className="tags">
            <img className="img1" src={home} />
            <div>Home</div>
          </div>

          <div className="tags">
            <img src={order} />
            <span>Order</span>
          </div>

          <div className="tags">
            <img src={products} />
            <span>Products</span>
          </div>

          <div className="tags">
            <img src={delivery} />
            <span>Delivery</span>
          </div>

          <div className="tags">
            <img src={marketing} />
            <span>Marketing</span>
          </div>

          <div className="tags">
            <img src={analytics} />
            <span>Analytics</span>
          </div>

          <div className="color-tag">
            <div className="tags ">
              <img className="payout" src={payouts} />
              <span>Payouts</span>
            </div>
          </div>

          <div className="tags">
            <img src={discounts} />
            <span>Discounts</span>
          </div>

          <div className="tags">
            <img src={audience} />
            <span>Audience</span>
          </div>

          <div className="tags">
            <img src={appearance} />
            <span>apperance</span>
          </div>

          <div className="tags">
            <img src={plugins} />
            <span>plugins</span>
          </div>
        </div>

        <div className="footer">
          <div className="credits-sections">
            <img src={credits} />
            <div className="last-part">
              <p className="part1">Availabe credits</p>
              <p className="part2">222.10</p>
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="right-container">
        <PayoutSection2 />
      </div>
    </div>
  );
};

export default Payouts;
