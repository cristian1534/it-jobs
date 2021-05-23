import React from 'react';
import FAQ from '../components/FAQ';
import './Css/faq.css';

const Faq = () => {
    return (
        <div>
            <div class="banner-breadcum section mb-25">
                <div class="row">
                    <div class="breadcrumb-image head">
                        <div class="container text-center">
                            <h1>Frequently asked questions</h1>
                                <div class="breadcrumbs_path">
                                    <a href="/contact">Contact us</a>  
                                </div>      
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    );
}

export default Faq;