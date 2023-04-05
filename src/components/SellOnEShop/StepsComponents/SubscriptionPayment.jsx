import React from 'react'
import Accordion from '../Accordion'
import PaymentMethod from '../PaymentMethod'
import SubscriptionPlans from '../SubscriptionPlans'

const SubscriptionPayment = () => {
    return (
        <div className="subscription w-[100%] mx-auto lg:w-[85%]">
            <div className="subscription_container">
                <h2 className='text-[14px] font-medium mb-[1rem] text-center md:text-left md:mb-3 md:text-[22px]'>
                    Select your magic plan
                </h2>
                <div className="frequently_asked_question_Plans flex flex-col gap-[5rem] md:flex-row">
                    <div className="left hidden md:block md:w-[55%]">
                        <div className="accordions">
                            <Accordion />
                        </div>
                    </div>
                    <div className="right w-[100%] md:w-[45%]">
                        <SubscriptionPlans />
                    </div>
                </div>

                <div className="bottom_payment_method w-[100%] flex flex-col gap-3 my-8 sm:flex-row md:gap-10">
                    <PaymentMethod />
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPayment