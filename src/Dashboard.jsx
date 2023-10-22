import React from "react";
import pic from "./asset/neon.jpeg";
import bg from "./asset/neon2.webp";
import StackedChart from "./Components/StackedChart";
import { MdOutlineNotifications } from "react-icons/md";
import { AiFillPlusCircle, AiFillApple } from "react-icons/ai";
import {
  BiSolidPieChartAlt,
  BiLogOutCircle,
  BiDollarCircle,
  BiBorderBottom,
} from "react-icons/bi";
import { LuSunDim } from "react-icons/lu";
import { TbAntennaBars4 } from "react-icons/tb";
import { BiWalletAlt } from "react-icons/bi";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import PieChart from "./Components/Pie";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dash-container">
        <div className="top-bg" />
        <aside>
          <div className="sidebar-top">
            <div
              style={{
                backgroundColor: "blue",
                borderRadius: "12px",
                width: "2rem",
                height: "2rem",
                display: "grid",
                placeItems: "center",
              }}
            >
              <img src={pic} alt="profile" style={{ height: "1.5rem" }} />
            </div>
            <div>
              <h2>Kristain Ramos</h2>
              <h3>kristain.ramos@gmail.com</h3>
            </div>
          </div>
          <ul className="sidebar-middel">
            <li>
              <span>
                <BiSolidPieChartAlt />
              </span>
              <p className="dash-list">Dashboard</p>
            </li>
            <li>
              <span>
                <BiWalletAlt />
              </span>
              <p>Holdings</p>
            </li>
            <li>
              <span>
                <TbAntennaBars4 />
              </span>
              <p>Performance</p>
            </li>
          </ul>
          <div>
            <BiLogOutCircle />
            Logout
          </div>
        </aside>
        <div className="main">
          <div>
            <div className="main-nav">
              <p>
                <LuSunDim /> Us stock market opens in 3 hours
              </p>
              <select></select>
              <div className="notification">
                <MdOutlineNotifications fontSize={"1.5rem"} />
              </div>
              <AiFillPlusCircle fontSize={"1.5rem"} />
            </div>
            <div className="top-charts">
              <article className="upgrade">
                <h2 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  Upgrade your Account
                </h2>
                <div>
                  <img src={bg} alt="bg" />
                  <div className="bg-area">
                    <p>access many features and helpful insigts</p>
                    <BsFillArrowRightSquareFill fontSize="2rem" />
                  </div>
                </div>
              </article>
              <article className="port-val">
                <div>
                  <div className="date-interval">
                    <p>1d</p>
                    <p>1w</p>
                    <p>1m</p>
                    <p>1y</p>
                    <p>All</p>
                  </div>
                  <BiDollarCircle />
                </div>
                <div>
                  <div className="left">
                    <StackedChart />
                  </div>
                  <div className="right">
                    <div>
                      <p>Portfolio value</p>
                      <p>$ 9 864.34</p>
                      <p>234.23(30.34%2)</p>
                    </div>
                    <div>
                      <div>
                        <div />
                        <p>Portfolio</p>
                      </div>
                      <div>
                        <div />
                        <p>Dollar</p>
                      </div>
                      <div>
                        <div />
                        <p>ETFs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="port-history">
            <div>
              <p>Portfolio History</p>
              <p>Per Industry</p>
            </div>
            <div className="his-main">
              <div className="history-art">
                <article>
                  <h2>Nov 19</h2>
                  <div>
                    <p>Portfolio value</p>
                    <p>$ 9 864.34</p>
                    <p>234.23(30.34%2)</p>
                  </div>
                </article>
                <article>
                  <h2>OCT 19</h2>
                  <div>
                    <p>Portfolio value</p>
                    <p>$ 9 864.34</p>
                    <p>234.23(30.34%2)</p>
                  </div>
                </article>
                <article>
                  <h2>SEP 19</h2>
                  <div>
                    <p>Portfolio value</p>
                    <p>$ 9 864.34</p>
                    <p>234.23(30.34%2)</p>
                  </div>
                </article>
              </div>
              {/* <PieChart /> */}
            </div>
          </div>
          <footer>
            <div>
              <h4>SYMBOL</h4>
              <div>
                <div>
                  <AiFillApple />
                </div>
                <h2>AAPL</h2>
              </div>
            </div>
            <div>
              <div>
                <h4>PRICE</h4>
                <h2>$ 234.00</h2>
              </div>
              <div>
                <h4>% Return</h4>
                <h2>45.43</h2>
              </div>
              <div>
                <h4>TOTAL NET COST</h4>
                <h2>$1 234.00</h2>
              </div>
              <div>
                <h4>MARKET VALUE</h4>
                <h2>$1 345.87</h2>
              </div>
            </div>
            <div>
              <div>
                <h4>TOTAL GAIN</h4>
                <h2>$456.34</h2>
              </div>
              <div>
                <h4>DAILY GAIN</h4>
                <h2>-$3.45</h2>
              </div>
              <div>
                <h4>%PORTFOLIO</h4>
                <h2>13.45%</h2>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
