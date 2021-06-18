import React from "react";
import { CustomCollapse } from "../../components/CustomCollapse";
import { CustomButton } from "../../components/CustomButton";
import { Button } from "antd";
import "./Home.less";
import { faq } from "../../data";
import { Switch, Link, Route } from "react-router-dom";
import mob from "../../images/mob2.png";
import Done from "../../images/Done.png";
import AI from "../../images/AI.png";
import leftIcon from "../../images/icon.png";
import video from "../../images/video.png";
import onetwothree from "../../images/123.png";
import solution from "../../images/Solutions.png";
import group1 from "../../images/bgblock4.png";
import slash from "../../images/slash.png";
import privacy_sln from "../../images/privacy-sln.png";
import feedback_ph2 from "../../images/feedback-stars.png";
import group2 from "../../images/group1.png";


// components
import { ServiceBoard } from "../../components/ServiceBoard";
import { DiscoverComp } from "../../components/DicsoverComponent";
export const Home = () => {
  return (
    <div>
      {/* header section */}
      <section className="header-section">
        <div className="container">
          <div>
            <p className="sub-title">Powered by AI</p>
            <h1>
              The smartest,
              <br /> fastest way to
              <br /> Legal Aggrements
            </h1>
            <p className="text">
              Generate your
              <b> Privacy Policy, Terms of Use</b>
              <br /> or
              <b> Cookie Policy </b>for
              <a href=""> free</a>
            </p>
            <div>
              <CustomButton primary>Generate for free</CustomButton>
              <Button type="text">Learn more </Button>
            </div>
          </div>
        </div>
      </section>
      {/* 2 section */}
      <section className="stream-section">
        <div className="container">
          <div className="streamline">
            <div className="stream">
              <img src={mob} alt="" />
            </div>
            <div className="stream-text">
              <img src={AI} alt="" className="AI" />
              <p>Discover Possibilities</p>
              <h1>Streamline Your Purpose with AI</h1>
              <div>
                Streamline cost-effective solutions for your business. Generate
                legally compliant documents seamlessly with customizable
                agreements and policies for your website or mobile app anytime,
                anywhere with iTerms.
              </div>
              <ul>
                <li>
                  <img src={Done} alt="" />
                  Unlimited downloads for 9.95 a one-time fee
                </li>
                <li>
                  <img src={Done} alt="" />
                  All legal agreements confirmed by a practicing lawyer
                </li>
                <li>
                  <img src={Done} alt="" />
                  EU/US and main privacy laws covered
                </li>
                <li>
                  <img src={Done} alt="" />
                  Automatic legal updates powered by AI
                </li>
                <li>
                  <img src={Done} alt="" />
                  Industry-leading competitive pricing
                </li>
                <li>
                  <img src={Done} alt="" />
                  Securely host your policies on our platform
                </li>
                <li>
                  <img src={Done} alt="" />
                  Easy embed policy on your domain
                </li>
                <li>
                  <img src={Done} alt="" />
                  Suitable for most Web/Mobile apps
                </li>
              </ul>
              <div className="stream-buttons">
                <CustomButton primary>Generate </CustomButton>
                <Button type="text">
                  Learn more <img src={leftIcon} alt="" />
                </Button>
              </div>
            </div>
          </div>
          <div className="easy-effective">
            <div>
              <img src={video} alt="" />
            </div>
            <div>
              <p>Easy & Cost-Effective</p>
              <h1>How it works?</h1>
              <div>
                Numerous legal agreements accessible at the touch of your
                fingerprints for your website or mobile app.
              </div>
              <img src={onetwothree} className="one" alt="" />
            </div>
          </div>
          <div className="solutions">
            <img src={solution} alt="" className="solution" />
            <div className="sol-text1">
              <p>Intuitively Made For Your Business</p>
              <h1>
                Explore iTerms
                <br /> Solutions{" "}
              </h1>
            </div>
            <div className="sol-text2">
              <h5>
                Regardless of your requirements, iTerms has a solution ready for
                you to utilize.
              </h5>
            </div>
          </div>
          <div>
            <img
              src={group2}
              alt=""
              style={{
                marginLeft: "250px",
              }}
            />
          </div>
          <div className="bgblock">
            <img src={group1} alt="" style={{ width: "1642px" }} />
          </div>
          <div className="service-block">
            <ServiceBoard />
          </div>
        </div>
      </section>

      {/* Section 3 */}

      <section className="trusted-section">
        <div className="container">
          {/* million-section*/}
          <div className="milli" style={{ paddingTop: "200px" }}>
            <p className="sub-title">Trusted Provisions</p>
            <h1 className="secure">Secure Legal Safeguards</h1>
            <p className="secure-p">
              Attorney-certified compliance solutions for your convenience and
              protection.
            </p>
          </div>
        </div>
      </section>

      {/* Customer Section */}

      <section className="feedback-section">
        <div className="feedback-container container">
          <div className="feedback-01">
            <h3 className="feedback-h3">Your Protection Is Our Success</h3>
            <h2 className="feedback-h2">
              Our Customers <br />
              Are Saying{" "}
            </h2>
          </div>
          <p className="feedback-par">
            Ensured Compliance, guaranteed <br />
            customer satisfaction.
          </p>
        </div>
        <div className='container'>
          <img className="feedback-ph1" src={privacy_sln} alt="" />
        </div>
        <div className="feedback-ph2">
          <img src={feedback_ph2} alt="" />
        </div>
      </section>

      {/* discover section  */}

      <section className="discover-section">
        {/* container */}
        <div className="container">
          <div className="dsc-text">
            <h3 className="dsc-01">Keep Up With the Latest</h3>
            <h2 className="dsc-02">Discover What's New</h2>
            <p className="dsc-03">
              Learn from the experts at iTerms to ensure you stay on top of{" "}
              <br />
              industry legalities and changing legal landscapes at all times.
            </p>
          </div>
          {/* to be rendered blocks  */}
          <div className="dsc-render">
            {/* 1 */}
            <DiscoverComp />

            {/* 2 */}
            <div className="dsc-renderblock2">
              <DiscoverComp />
            </div>
            {/* 3 */}
            <div className="dsc-renderblock03">
              <DiscoverComp />
            </div>
            {/* 4 */}
            <div className="dsc-renderblock04">
              <DiscoverComp />
            </div>
          </div>
          {/* container */}
          <CustomButton primary className="btn-dsc">
            Read More
          </CustomButton>
        </div>
      </section>
      {/* faq section */}

      <section className="faq-section">
        <div className="container">
          <div className="questions">
            <p className="sub-title">Solutions to Your Problems</p>
            <h2>Do You Have any Questions?</h2>
            <p className="question-text">
              Take a look through our answers! Still, have questions? Please
              don't be afraid to contact our team at any time.
            </p>
          </div>

          <div className="collapse-block">
            <div
              className="sidebar"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3>Table of Contents</h3>

              {faq.map((el, id) => {
                return (
                  <Link key={id} to={`/${el.title}`}>
                    {el.title}
                  </Link>
                );
              })}
            </div>
            <div className="collapse">
              <Switch>
                {faq.map((el, id) => {
                  return (
                    <Route key={id} path={`/${el.title}`}>
                      <CustomCollapse el={el} />
                    </Route>
                  );
                })}
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
