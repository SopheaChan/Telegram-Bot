
exports.full_loan_protection_definition_page = () => {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <title>Page Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
                <style>
                    body {
                        padding: 8px;
                    }
                    .header-text {
                        color: rgba(0, 0, 0, 1);
                        font-size: 18px;
                        font-weight: bold;
                    }
                    .header-text-h3 {
                        color: rgba(0, 0, 0, 1);
                        font-size: 16px;
                        font-weight: bold;
                    }
                    .fwd-agent-text {
                        color: rgba(0, 0, 0, 0.7);
                        font-size: 16px;
                        font-weight: 600;
                    }
                    .saving-button {
                        color: rgba(237, 143, 2, 1);
                        font-size: 16px;
                        border: 1px solid rgba(237, 143, 2, 1);
                        width: 62px;
                        text-align: center;
                        border-radius: 4px;
                    }
                    .main-product-difinition-container {
                        display: flex;
                        justify-content: space-between;
                        flex-direction: row;
                        width: 100vw;
                    }
                    .product-difinition-container-1 {
                        flex: 1;
                        min-width: 33vw;
                        max-width: 33vw;
                        padding: 8px;
                    }
                    .product-difinition-container-2 {
                        flex: 1;
                        min-width: 33vw;
                        max-width: 33vw;
                        padding: 8px;
                    }
                    product-difinition-container-3 {
                        flex: 1;
                        min-width: 30vw;
                        max-width: 30vw;
                        padding: 8px;
                    }
                    .product-difinition-header {
                        font-size: 18px;
                        font-weight: 700;
                        margin-top: 8px;
                    }
                    .product-definition-text {
                        white-space: normal;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        color: rgba(0, 0, 0, 1);
                    }
                    .product-definition-text-3{
                        white-space: normal;
                        overflow-wrap: break-word;
                        word-wrap: break-word;
                        margin-right: 8px;
                        color: rgba(0, 0, 0, 1);
                    }
                    .main-header-text {
                        font-size: 24px;
                        background-color: rgba(237, 143, 2, 1);
                        margin-left: -8px;
                        margin-top: -8px;
                        padding: 8px;
                        width: 238px;
                        border-radius: 0 0 18px 0;
                        font-weight: bold;
                        color: rgba(255, 255, 255, 0.9);
                    },
                    .intro-text {
                        color: rgba(0, 0, 0, 1);
                    }
                </style>
            </head>
            <body>
                <h1 class="main-header-text">FWD Full Loan Protection</h1>
                <h1 class="header-text">Don’t worry – we’ve got it covered</h1>
                <p class="intro-text">
                    You have spent your precious times and so much efforts to accumulate wealths for your loved ones. Therefore to protect your loved ones, you should have a wise protection for those properties. We provide you a solution is FWD Full Loan Protection that you will get full coverage on financial loan to remain your wealth ownershipin case of the unforeseen events. FWD guarantees the wealth is still yours and being the one for your next generation.
                </p>
                <p class="saving-button">loan protection</p>
                <h3 class="header-text-h3">Available to buy via:</h3>
                <p class="fwd-agent-text">Bank partner</p>
                <div class="main-product-difinition-container">
                    <div class="product-difinition-container-1">
                        <img src="https://www.fwd.com.kh/images/v3/assets/bltb6aba17b385da849/blt45b350d46fce9660/63c61d6ed40a0e2d036c4835/protect_saving.png" alt="" width="52" height="52" />
                        <h1 class="product-difinition-header">Loan and Debt Risk Protection</h1>
                        <p class="product-definition-text">
                            Worry Free from remaining liability in case of unfortunate events.
                        </p>
                    </div>
                    <div class="product-difinition-container-2">
                        <img src="https://www.fwd.com.kh/images/v3/assets/bltb6aba17b385da849/blt7b064b8941853acf/63c566f7897bff1483453a26/protect_3.png" alt="" width="52" height="52" />
                        <h1 class="product-difinition-header">Get Extra Benefit</h1>
                        <p class="product-definition-text">Receive additional coverage of 100% of Sum Assured in the event of Accidental Death or TPD of the Life Insured.</p>
                    </div>
                    <div class="product-difinition-container-3">
                        <img src="https://www.fwd.com.kh/images/v3/assets/bltb6aba17b385da849/blt45b350d46fce9660/63c61d6ed40a0e2d036c4835/protect_saving.png" alt="" width="52" height="52" />
                        <h1 class="product-difinition-header">Various Types of Loan Protection</h1>
                        <p class="product-definition-text-3">Get loan protection for mortgage, SME, corporate enterprise, personal or other loans.</p>
                    </div>
                </div>
            </body>
        </html>
    `;
}