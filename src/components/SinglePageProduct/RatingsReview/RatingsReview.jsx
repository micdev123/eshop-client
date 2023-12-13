import React, { useState } from 'react'
import StoreReview from './StoreReview';
import ProductReview from './ProductReview';

const tabs = ['Review for this item', 'Review for this store']
const RatingsReview = () => {
  const [activeTab, setActiveTab] = useState('Review for this item')
  // Tab content : Based on the tab selected
  const renderTabContent = (/*id*/) => {
      switch (activeTab) {
          case 'Review for this item':
              return <ProductReview /*productId={id}*/ />;
          case 'Review for this store':
              return <StoreReview />;
          default:
              return null;
      } 
  };
  return (
    <div>
      <div className="tab flex flex-col items-center gap-y-[0.5rem] sm:flex-row sm:gap-y-0 xl:gap-x-[1.3rem]">
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
      <div className="tab_content mt-[10px]">
          {renderTabContent()}
      </div>
    </div>
  )
}

export default RatingsReview