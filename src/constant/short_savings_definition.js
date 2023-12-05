
exports.short_savings_definition_page = () => {
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
                <h1 class="main-header-text">FWD Short Savings</h1>
                <h1 class="header-text">Support for your most important years</h1>
                <p class="intro-text">
                    When you have a young family, you need to make your money work harder. This savings plan ensures you have life insurance and critical illness cover, a short financial commitment, and we’ll even pay you a lump sum of cash at the
                    end – meaning you’ll have some savings to show for the money you’ve invested.
                </p>
                <p class="saving-button">savings</p>
                <h3 class="header-text-h3">Available to buy via:</h3>
                <p class="fwd-agent-text">FWD agents</p>
                <div class="main-product-difinition-container">
                    <div class="product-difinition-container-1">
                        <img src="https://www.fwd.com.kh/images/v3/assets/bltb6aba17b385da849/blt7408aab40920b19c/63c6038cdbdbb6107736b4dd/protect_shield.png" alt="" width="52" height="52" />
                        <h1 class="product-difinition-header">Cover all possibilities</h1>
                        <p class="product-definition-text">
                            If a loss of life or critical illness means you're unable to provide for your family, we've got you covered. We'll pay at least 100% of the sum assured and up to 400% for an accidental death.
                        </p>
                    </div>
                    <div class="product-difinition-container-2">
                        <img src="https://www.fwd.com.kh/images/v3/assets/bltb6aba17b385da849/blt760c7e49f130aa57/63c6038c48ef12105ee3a37c/calendar.png" alt="" width="52" height="52" />
                        <h1 class="product-difinition-header">A shorter financial commitment for the same great cover</h1>
                        <p class="product-definition-text">Choose from a range of cost-effective plans: pay for just 10 years but get covered for up to 20 years - or pay for 5 years but get covered for 10 years.</p>
                    </div>
                    <div class="product-difinition-container-3">
                        <img src="https://www.fwd.com.kh/images/v3/assets/bltb6aba17b385da849/blt646e25a1aa834251/63c6038c81b45d107000f38a/care_saving.png" alt="" width="52" height="52" />
                        <h1 class="product-difinition-header">Receive cash at the end</h1>
                        <p class="product-definition-text-3">Receive a guaranteed maturity benefit (a lump sum that we pay out when the plan ends). This will be between 150%-180% of the sum assured (payment based on the plan you choose).</p>
                    </div>
                </div>
            </body>
        </html>
    
    `;
}