import React, { useState } from 'react'
import ProductDescription from './ProductDescription/ProductDescription';
import RatingsReview from './RatingsReview/RatingsReview';
import Seller from './Seller';
import Tabs from './Tabs';

const tabs = ['Description', 'Ratings & Review', 'Seller']

const ProductTabsAndTabContent = () => {
    const [activeTab, setActiveTab] = useState('Description');

     // Tab content : Based on the tab selected
    const renderTabContent = (/*id*/) => {
        switch (activeTab) {
            case 'Description':
                return <ProductDescription /*productId={id}*/ />;
            case 'Ratings & Review':
                return <RatingsReview />;
            case 'Seller':
                return <Seller />;
            default:
                return null;
        } 
    };
    return (
        <div>
            <div className="tabs flex items-center px-[10px] border-b-[1px] border-zinc-200 mt-[2rem]  mb-[10px] gap-x-[2rem] md:mt-0">
                {tabs?.map((tab, index) => (
                    <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabName={tab} key={index} />
                ))}
            </div>
            {/* Tab content */}
            <div className="px-[20px] md:px-[10px]">
                {renderTabContent(/*id*/)}
            </div>
        </div>
    )
}

export default ProductTabsAndTabContent