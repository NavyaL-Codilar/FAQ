import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <div className="Parent">
          <div className="image">
            <div className="img1">
              <img src="images/illustration-box-desktop.svg" alt="" />
            </div>
            <img src="images/illustration-woman-online-desktop.svg" alt="" />
          </div>

          <div className="Main_q">
            <h1>FAQ</h1>
            <br />
            <div className="Que">
              <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button
                        class="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                      >
                        How many team members can I invite?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      You can invite up to 2 additional users on the Free plan.
                      There is no limit on team members for the Premium plan.
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button
                        class="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What is the maximum file upload size ?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      No more than 2GB. All files in your account must fit your
                      allotted storage space.
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button
                        class="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How do i reset my password?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Click “Forgot password” from the login page or “Change
                      password” from your profile page. A reset link will be
                      emailed to you.
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button
                        class="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Do you provide additional support ?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Chat and email support is available 24/7. Phone lines are
                      open during normal business hours
                    </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <button
                        class="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Can i cancel my subscription ?
                      </button>
                    </h5>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div class="card-body">
                      Yes! Send us a message and we’ll process your request no
                      questions asked.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
