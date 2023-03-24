import React, { Component } from 'react'
export default class One extends Component {
  render() {
    return (
      <>
        <div className="container-fluid bg-light">
          <div className="container " style={{ padding: "25px 0px" }}>
            <div className="row align-items-center">
              <div className="col-lg-4">
                <div className="mb-4 mb-lg-0 my-3">
                  <div className="p-2 bg-soft-primary d-inline-block rounded mb-4">
                    <div className="icon-xxl uim-icon-primary sgcs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em"><polygon class="uim-primary" points="12 12.3 3.5 7.05 12 1.8 20.5 7.05 12 12.3"></polygon><polygon class="uim-quaternary" points="12 22.2 12 12.3 20.5 7.05 20.5 16.95 12 22.2"></polygon><polygon class="uim-tertiary" points="12 22.2 3.5 16.95 3.5 7.05 12 12.3 12 22.2"></polygon></svg></div>
                  </div>
                  <h3 className="text-muted">Why Choose Us?</h3>
                  <p className="text-muted mb-4">Nam libero tempore cum soluta as nobis est eligendi optio cumque
                    nihile impedite quo minus id quod maxime.</p>
                  <a href="#" className="btn btn-outline but  abh-box-icon">Learn More</a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-md-6">
                    <div className="wc-box rounded text-center wc-box-primary p-4 mt-md-5 abh-box-icon ">
                      <div className="box-icon ">
                        {/*  */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout icon-xs me-1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                      </div>
                      <h5 className="text-muted fw-bold mb-2 wc-title mt-4">Easy To Use</h5>
                      <p className="text font-size-15 ">Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem.</p>
                    </div>
                    <div className="wc-box rounded text-center wc-box-primary p-3 abh-box-icon">
                      <div className="box-icon">
                        <i class="fa-solid fa-chart-line-up"></i>
                        {/*  */}
                        <i className="fa-regular fa-chart-line-up"></i>
                      </div>
                      <h5 className="text-muted fw-bold mb-2 wc-title my-4">Grow Your Revenue</h5>
                      <p className="text font-size-15 ">Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="wc-box rounded text-muted-center wc-box-primary p-4 abh-box-icon">
                      <div className="box-icon">
                        <i class="fa-regular fa-chart-line-up"></i>
                      </div>
                      <h5 className="text-muted fw-bold mb-2 wc-title mt-4">Analytics Security</h5>
                      <p className="text font-size-15 ">Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem.</p>
                    </div>
                    <div className="wc-box rounded text-center wc-box-primary p-4 abh-box-icon">
                      <div className="box-icon">
                        <i class="fa-solid fa-database"></i>
                        {/*  */}
                      </div>
                      <h5 className="text-muted fw-bold mb-2 wc-title mt-4 my-4">Data Privacy</h5>
                      <p className="text font-size-15 ">Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
