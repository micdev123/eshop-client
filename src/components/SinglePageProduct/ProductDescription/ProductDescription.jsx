import React, { useState } from 'react'
import Description from './Description';
import ShippingReturnsPayments from './ShippingReturnsPayments';

const tabs = ['About this product', 'Shipping | Returns | Payments']
const ProductDescription = () => {
    const [activeTab, setActiveTab] = useState('About this product')
    // Tab content : Based on the tab selected
    const renderTabContent = (/*id*/) => {
        switch (activeTab) {
            case 'About this product':
                return <Description /*productId={id}*/ />;
            case 'Shipping | Returns | Payments':
                return <ShippingReturnsPayments />;
            default:
                return null;
        } 
    };

    return (
        <div>
            <div className="tab flex flex-col items-center gap-y-[0.5rem] sm:flex-row  sm:gap-y-0 xl:gap-x-[1.3rem]">
                {tabs?.map((tabName, index) => (
                    <p
                        className={`tab text-[13.8px] py-[10px] px-[20px] text-center cursor-pointer md:text-[13.5px]  ${activeTab === tabName ? 'border-b-[1px] border-zinc-800 text-zinc-800 font-medium' : 'text-zinc-500'}`}
                        onClick={() => setActiveTab(tabName)}
                        key={index}
                    >
                        {tabName}
                    </p>
                ))}
            </div>
            <div className="tab_content mt-[1rem] md:mt-[10px]">
                {renderTabContent()}
            </div>
        </div>
    )
}

export default ProductDescription