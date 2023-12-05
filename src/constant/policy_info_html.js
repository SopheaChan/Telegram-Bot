
exports.policy_info = async () => {
    
    return `<!DOCTYPE html>
    <html>
      <head>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous"/>
         <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        
        <style>
            .main-background {
                width: 100%;
                height: 592px;
                background-color: #EEEBE7;
                padding: 8px 24px 8px 24px;
            }
            .content-header {
                font-size: 12px;
                font-weight: 600;
            }
            .main-header-underline {
                width: 24px;
                height: 1px;
                border: solid 1px rgba(0, 0, 0, 0.5);
                margin-top: -16px;
                margin-bottom: 16px;
            }
            .content-text {
                font-size: 12px; 
                margin-top: -16px;
            }
            .content-text-top {
                font-size: 12px;
                margin-top: 0px;
            }
            .content-text-after-line {
                font-size: 10px;
                margin-top: 8px;
            }
            .coverage-header {
                margin-top: 0px;
            }
            .coverage-amount {
                  font-weight: bold;
                font-size: 18px;
                  margin-top: -16px;
            }
              .outer-detail-container {
                  display: flex;
              }
            .insured-detail-outer-container {
          
              }
            .insured-detail-container {
                  width: 200px;
                height: 189px;
                background-color: #F5F5F5;
                  border-radius: 8px;
                  padding: 8px 8px 8px 8px;
              }
              .premium-header {
                  font-size: 12px;
              }
              .premium-amount {
                  font-size: 16px;
                font-weight: 600;
                margin-top: -16px
              }
            .payment-container {
                display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-top: -8px;
            }
              .payment-frequency-container {
                  width: 82px;
              }
            .payment-frequency-text {
                  font-size: 8px;
                  text-transform: uppercase;
              }
              .payment-frequency-value {
                  font-size: 12px;
                  font-weight: 600;
                  text-align: center;
                  border: solid 1px orange;
                  padding-top: 8px;
                  padding-bottom: 8px;
                  border-radius: 16px;
                  margin-top: -8px;
              }
              .policy-detail-header {
                  font-size: 12px;
                  color: rgba(0, 0, 0, 0.5);
                  margin-top: -8px;
              }
              .payment-date-container {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  margin-top: -16px;
              }
              .payment-date-title {
                  font-size: 10px;
                  color: rgba(0, 0, 0, 0.5);
              }
              .payment-date-value {
                  font-size: 10px;
                  font-weight: 500;
              }
              .rider-outer-container {
                  margin-left: 48px;
              }
              .rider-card-container {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
              }
              .rider-detail-container {
                  width: 157px;
                  height: 189px;
                  background-color: #F5F5F5;
                  border-radius: 8px;
                  margin-top: 18px;
                  padding: 12px 12px 12px 12px;
              }
              .rider-detail-container-left {
                  margin-right: 48px;
              }
              .rider-detail-title {
                  font-size: 10px;
                  color: rgba(0, 0, 0, 0.5);
              }
            .rider-detail-title-insured, .rider-detail-title-start-date, .rider-detail-title-end-date {
                margin-top: -8px;
            }
              .rider-detail-value {
                  font-size: 12px;
                  font-weight: 500;
                  margin-top: -16px;
              }
              .rider-detail-coverage {
                  font-size: 16px;
                  color: orange;
                  font-weight: 600;
                  margin-top: -16px;
              }
              .detail-line {
                  width: 100%;
                  height: 1px;
                  background-color: rgba(0, 0, 0, 0.5);
              }
              .detail-value-content, .detail-contact-title {
                  margin-top: -16px;
              }
              .detail-agent-contact-container {
                  display: flex;
                  justify-content: space-between;
              }
              .detail-container {
                  width: 200px;
                height: 166px;
                background-color: #F5F5F5;
                  border-radius: 8px;
                  padding: 8px 8px 8px 8px;
              }
              .detail-info-container {
                  display: flex;
                margin-top: 24px;
              }
              .beneficiary-detail-container {
                  width: 157px;
                  height: 92px;
                  background-color: #F5F5F5;
                  border-radius: 8px;
                  padding: 8px 8px 8px 8px;
              }
              .beneficiary-outer-container {
                  margin-left: 48px
              }
              .beneficiary-percentage-line {
                  width: 100%;
                  height: 12px;
                  background-color: rgb(255, 162, 0);
                border-radius: 8px;
              }
            .beneficiary-percentage {
                text-align: center;
                font-size: 10px;
                font-weight: 100;
            }
            .beneficiary-info-container {
                display: flex;
                flex-direction: row;
                align-items: baseline;
            }
            .beneficiary-info-dot-symbol {
                width: 6px;
                height: 6px;
                border: solid 1px rgba(255, 162, 0, 1);
                background-color: rgba(255, 162, 0, 1);
                border-radius: 3px;
                margin-right: 4px;
            }
            .beneficiary-name {
                font-size: 12px;
                font-weight: 500;
            }
            .beneficiary-relationship {
                font-size: 10px;
                margin-top: -16px;
            }
    
        </style>
               
      </head>
      <body>
        <div class="main-background">
          <p class="content-header">Overview</p>
          <div class="main-header-underline"></div>
          <p class="content-header coverage-header">You're covered for</p>
          <p class="coverage-amount">USD 1,000.00</p>
          <div class="outer-detail-container">
              <div class="insured-detail-outer-container">
              <p class="content-header">Insured for</p>
              <p class="content-text">Sophea Chan</p>
                <div class="insured-detail-container">
                  <p class="premium-header">Premium Amount</p>
                  <p class="premium-amount">USD 21.49</p>
                  <div class="payment-container">
                    <div class="payment-frequency-container">
                      <p class="payment-frequency-text">Frequency</p>
                      <p class="payment-frequency-value">Yearly</p>
                    </div>
                    <div class="payment-frequency-container">
                      <p class="payment-frequency-text">Method</p>
                      <p class="payment-frequency-value">Cash</p>
                    </div>
                  </div>
                  <p class="policy-detail-header">Policy details</p>
                  <div class="payment-date-container">
                    <p class="payment-date-title">Next payment on:</p>
                    <p class="payment-date-value">25 Aug 2024</p>
                  </div>
                  <div class="payment-date-container">
                    <p class="payment-date-title">Policy started on:</p>
                    <p class="payment-date-value">25 Aug 2024</p>
                  </div>
                  <div class="payment-date-container">
                    <p class="payment-date-title">Policy ends on:</p>
                    <p class="payment-date-value">25 Aug 2024</p>
                  </div>
                </div>
            </div>
            <div class="rider-outer-container">
              <p class="content-header">Rider(s)</p>
              <div class="rider-card-container">
                  <div class="rider-detail-container rider-detail-container-left">
                  <p class="rider-detail-title">LifeCancerCare</p>
                  <p class="rider-detail-coverage">USD 1,000.00</p>
                  <p class="rider-detail-title rider-detail-title-insured">Insured for</p>
                  <p class="rider-detail-value">Sophea Chan</p>
                  <p class="rider-detail-title rider-detail-title-start-date">Started on</p>
                  <p class="rider-detail-value">25 Aug 2023</p>
                  <p class="rider-detail-title rider-detail-title-end-date">Ends on</p>
                  <p class="rider-detail-value">25 Aug 2028</p>
                  </div>
                <div class="rider-detail-container">
                    <p class="rider-detail-title">LifeCancerCare</p>
                  <p class="rider-detail-coverage">USD 1,000.00</p>
                  <p class="rider-detail-title rider-detail-title-insured">Insured for</p>
                  <p class="rider-detail-value">Sophea Chan</p>
                  <p class="rider-detail-title rider-detail-title-start-date">Started on</p>
                  <p class="rider-detail-value">25 Aug 2023</p>
                  <p class="rider-detail-title rider-detail-title-end-date">Ends on</p>
                  <p class="rider-detail-value">25 Aug 2028</p>
                  </div>
              </div>
            </div>
          </div>
          <div class="detail-info-container">
              <div class="insured-detail-outer-container">
              <p class="content-header">Details</p>
                <div class="detail-container">
                  <p class="content-text-top">Mailing address</p>
                  <p class="content-text detail-value-content">sophea.chan@fwd.com, S'ang, Setbo, Prek Traeng, Cambodia</p>
                  <div class="detail-line"></div>
                  <p class="content-text-after-line">want to add on? Contact your agent!</p>
                  <p class="content-header detail-value-content">Kaneka man</p>
                  <div class="detail-agent-contact-container">
                      <p class="content-text detail-contact-title">Tel:</p>
                      <p class="content-text detail-value-content">0963777300</p>
                  </div>
                  <div class="detail-agent-contact-container">
                      <p class="content-text detail-contact-title">Email:</p>
                      <p class="content-text detail-value-content">kaneka.man@fwd.com</p>
                  </div>
                </div>
            </div>
            <div class="beneficiary-outer-container">
              <p class="content-header">Beneficiary(s)</p>
              <div class="beneficiary-detail-container">
                <div class="beneficiary-percentage-line"></div>
                <p class="beneficiary-percentage">100%</p>
                <div class="beneficiary-info-container">
                    <div class="beneficiary-info-dot-symbol"></div>
                    <div class="beneficiary-info-and-relationship-container">
                        <p class="beneficiary-name">Chan Sereyvuth</p>
                        <p class="beneficiary-relationship">Son</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>`
}