import React from 'react'
import Accordion from '../Accordion'
import PaymentMethod from '../PaymentMethod'
import SubscriptionPlans from '../SubscriptionPlans'

const SubscriptionPayment = () => {
    return (
        <div className="subscription w-[85%] mx-auto">
            <div className="subscription_container">
                <div className="frequently_asked_question_Plans flex gap-[5rem]">
                    <div className="left w-[55%]">
                        <h2 className='text-[22px] font-medium mb-3'>Select your magic plan</h2>
                        <div className="accordions">
                            <Accordion />
                        </div>
                    </div>
                    <div className="right w-[45%]">
                        <SubscriptionPlans />
                    </div>
                </div>

                <div className="bottom_payment_method flex gap-10 my-8">
                    <PaymentMethod />
                </div>
            </div>
        </div>
    )
}

export default SubscriptionPayment