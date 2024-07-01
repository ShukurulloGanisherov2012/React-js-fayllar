import React from 'react';

export default function Blog() {
  return (
    <>
      

      <div className="container mt-5">
        <h1 className="text-center mb-4">Blog</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://c8.alamy.com/comp/WRR5JA/cupertino-usa-10th-sep-2019-the-apple-company-logo-on-the-stage-of-the-steve-jobs-theater-on-the-company-campus-apple-presented-three-new-iphone-models-a-new-apple-watch-and-a-new-ipad-at-the-event-credit-christoph-dernbachdpaalamy-live-news-WRR5JA.jpg" className="card-img-top" alt="Apple Event" />
              <div className="card-body">
                <h5 className="card-title">Apple Event 2024</h5>
                <p className="card-text">Highlights from the latest Apple event, including new product launches and updates.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg?q=x_0,y_0,h_2268,w_4030,c_fill" className="card-img-top" alt="MacBook Pro Review" />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 2024 Review</h5>
                <p className="card-text">In-depth review of the new MacBook Pro, exploring its features, performance, and design.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <img src="https://help.apple.com/assets/5E9759AA680CE290321CE8C3/5EB1FE800946224832B512EE/en_US/14f6bce87e803c011727731e691535a8.png" className="card-img-top" alt="MacK Bro Innovations" />
              <div className="card-body">
                <h5 className="card-title">Innovations by MacK Bro</h5>
                <p className="card-text">An overview of the latest innovations from MacK Bro, focusing on their new tech solutions.</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
