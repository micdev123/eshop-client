import React from 'react'

const Tabs = ({ activeTab, setActiveTab, tabName }) => {
    return (
        <p
            className={`tab text-[13.5px] py-[10px] text-center cursor-pointer md:text-[14px]  ${activeTab === tabName ? 'border-b-[1px] border-zinc-800 text-zinc-800 font-medium' : 'text-zinc-500'} sm:w-[100%] md:text-[12.5px]`}
            onClick={() => setActiveTab(tabName)}
        >
            {tabName}
        </p>
    )
}

export default Tabs