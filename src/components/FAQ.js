import React from 'react';
import './Css/FAQ.css';

const Faq = () => {
    return (
        <div>
            <div class="container mt-3 mb-5">
                <br />
                <br />
                <br />

                <div class="alert alert-warning alert-dismissible" role="alert">
                    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                    This section contains a wealth of information, related to <strong>IT-Jobs</strong> and its store. If you cannot find an answer to your question, 
                    make sure to contact us. 
                </div>

                <br />

                <div class="panel-group" id="accordion">
                    <div class="faqHeader">Jobs questions</div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle" 
                                data-toggle="collapse" 
                                data-parent="#accordion" 
                                href="#collapseOne">Is account registration required?</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="panel-body">
                                Account registration at <strong>PrepBootstrap</strong> is only required if you will be selling or buying themes. 
                                This ensures a valid communication channel for all parties involved in any transactions. 
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle collapsed" 
                                data-toggle="collapse" 
                                data-parent="#accordion" 
                                href="#collapseTen">Can I submit my own Bootstrap templates or themes?</a>
                            </h4>
                        </div>
                        <div id="collapseTen" class="panel-collapse collapse">
                            <div class="panel-body">
                                A lot of the content of the site has been submitted by the community. Whether it is a commercial element/template/theme 
                                or a free one, you are encouraged to contribute. All credits are published along with the resources. 
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle collapsed" 
                                data-toggle="collapse" 
                                data-parent="#accordion" 
                                href="#collapseEleven">What is the currency used for all transactions?</a>
                            </h4>
                        </div>
                        <div id="collapseEleven" class="panel-collapse collapse">
                            <div class="panel-body">
                                All prices for themes, templates and other items, including each seller's or buyer's account balance are in <strong>USD</strong>
                            </div>
                        </div>
                    </div>

                
                    <div class="faqHeader">Accounts questions</div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle collapsed" 
                                data-toggle="collapse" 
                                data-parent="#accordion" 
                                href="#collapseFour">I want to buy a theme - what are the steps?</a>
                            </h4>
                        </div>
                        <div id="collapseFour" class="panel-collapse collapse">
                            <div class="panel-body">
                                Buying a theme on <strong>PrepBootstrap</strong> is really simple. Each theme has a live preview. 
                                Once you have selected a theme or template, which is to your liking, you can quickly and securely pay via Paypal.
                                <br />
                                Once the transaction is complete, you gain full access to the purchased product. 
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h4 class="panel-title">
                                <a class="accordion-toggle collapsed"
                                 data-toggle="collapse" 
                                 data-parent="#accordion" 
                                 href="#collapseSeven">Is this the latest version of an item</a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Faq;