import React from "react";
import Countdown from "react-countdown";

const Completionist = () => <div className="text-center"><h2 className="countdown-text mt-1">Happy 5th Anniversary!</h2></div>;

const CountdownComponent = () => {
  const renderer = ({days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div className="d-flex justify-content-center mt-2">
        <div className="container-timer">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div id="daysNum" className="countdown-card m-auto">
                {days}
              </div>
              <div className="countdown-stat">
                Day(s)
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div id="hoursNum" className="countdown-card m-auto">
                {hours}
              </div>
              <div className="countdown-stat">
                hours
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div  id="minsNum" className="countdown-card m-auto">
              {minutes}
              </div>
              <div className="countdown-stat">
                minutes
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-12 countdown-card-wrap">
              <div id="secsNum" className="countdown-card m-auto">
              {seconds}
              </div>
              <div className="countdown-stat">
                seconds
              </div>
            </div>
          </div>
        </div>

      </div>
      );
    }
  };

  return <Countdown date='2023-12-22T00:00:00' renderer={renderer} />;
};

export default CountdownComponent;
