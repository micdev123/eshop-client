import React, { useState } from 'react';
import { StepsContext } from '../contexts/StepsContext';
import ControlSteps from '../components/SellOnEShop/ControlSteps';
import CreateShop from '../components/SellOnEShop/StepsComponents/CreateShop';
import SellOnEshopNotes from '../components/SellOnEShop/SellOnEshopNotes';
import Steps from '../components/SellOnEShop/Steps';
import SubscriptionPayment from '../components/SellOnEShop/StepsComponents/SubscriptionPayment';
import CreationConfirmed from '../components/SellOnEShop/StepsComponents/CreationConfirmed';
import Message from '../components/SellOnEShop/StepsComponents/Message';

const SellOnEshop = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [stepData, setStepData] = useState('');
    const [finalStepData, setFinalStepData] = useState([])
    // const [complete, setComplete] = useState(false);
    
    const steps = ['Create your store',  'Creation confirmed', 'Subscription'];
    // Determine the corresponding step component and then display
    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <CreateShop />
            // case 1:
            //     return <Message />
            case 2:
                return <CreationConfirmed />
            case 3:
                return <SubscriptionPayment />
            default:
        }
    }

    // HandleClick() fnx __ controlSteps
    const handleClick = (direction) => {
        let newStep = currentStep;

        // Check the direction
        direction === "continue" ? newStep++ : newStep--;

        // Check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
    }
    return (
        <div className='mt-4'>
            <h2 className='font-medium text-[16px] mb-2'>Vendor Registration</h2>
            <div className="registration_container bg-lighterBlue py-11 px-[4rem] rounded-md">
                {/* Steps */}
                <div className="steps w-[40%] mx-auto flex items-center justify-between mb-[5rem]">
                    <Steps
                        steps={steps}
                        currentStep = {currentStep}
                    />
                   
                </div>
                <div className="form flex flex-col justify-center items-center">
                    <StepsContext.Provider value={{
                        stepData,
                        setStepData,
                        finalStepData,
                        setFinalStepData
                    }}>
                        {displayStep(currentStep)}
                    </StepsContext.Provider>
                    {/* {displayStep} */}
                    {/* 
                    </p> */}
                   

                    {/* Controls | Navigation */}
                    <ControlSteps
                        handleClick={handleClick}
                        currentStep={currentStep}
                        steps={steps}
                    />
                    {/* {!complete && (
                        <button
                            onClick={() => {
                                curr === steps.length ? setComplete(!complete) : setCurr((prev) => prev + 1)
                            }}
                            className='bg-amber-700 text-white text-[12px] py-2 px-10 mt-4  rounded-md hover:bg-amber-600'>
                            {curr === steps.length ? 'Done' : 'Continue'}
                        </button>
                    )} */}
                </div>

                <div className="notes mt-[7rem] mb-3">
                    <SellOnEshopNotes />
                </div>
            </div>
            
        </div>
    )
}

export default SellOnEshop