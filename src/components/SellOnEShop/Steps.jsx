import React, { useEffect, useRef, useState } from 'react'
import { BsCheckLg } from 'react-icons/bs';

const Steps = ({ steps, currentStep }) => {
    const [newStep, setNewStep] = useState([]);
    const stateRef = useRef()

    // updateStep() fnx
    const updateStep = (stepNumber, steps) => {
        const newSteps = [...steps];
        let count = 0;

        // Iterate
        while (count < newSteps.length) {
            // Check if currentStep
            if (count === stepNumber) {
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted: true,
                    selected: true,
                    completed: true
                }
                count++;
            }
            else if (count < stepNumber) { // Check if completed 
                 newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: true,
                    completed: true
                }
                count++;
            }
            else { // Check if still pending
                 newSteps[count] = {
                    ...newSteps[count],
                    highlighted: false,
                    selected: false,
                    completed: false
                }
                count++;
            }
        }
        // return newSteps object
        return newSteps
    }

    // Look for changes
    useEffect(() => {
        // Based on the current step, create an object with these properties
        const stepState = steps.map((step, index) =>
            Object.assign({}, {
                description: step,
                completed: false,
                highlighted: index === 0 ? true : false,
                selected: index === 0 ? true : false,
            })
        );

        // Set current state of useRef to the current_step stepState object
        stateRef.current = stepState;

        // Called the updateStep() fnx passing the following
        const current = updateStep(currentStep - 1, stateRef.current);

        // called setNewStep() passing the current
        setNewStep(current);
    }, [steps, currentStep])
    
    const displaySteps = newStep.map((step, index) => {
        return (
            <div
                key={index}
                className={`${index !== newStep.length - 1 ? "w-full flex items-center" : "flex items-center"} hidden sm:flex`}
            >
                <div className={`step_content relative flex flex-col items-center`}>
                    <div className={`step_number w-7 h-7 rounded-full bg-slate-300 text-[12px] flex items-center justify-center ${step.selected && "bg-slate-700 text-white"}`}>
                        {step.completed ? <BsCheckLg /> : index + 1}
                    </div>
                    <div className={`step_description absolute top-0  text-center text-[12.5px] text-slate-400 mt-9 w-32 ${step.selected && 'text-slate-800 font-medium'}`}>
                        {step?.description}
                    </div>
                </div>
                <div className={`step_line flex-auto border-t-2 ${step.completed && 'border-slate-900'}`}></div>
            </div>
        )
    })
    return (
        <div className='w-[100%] flex items-center justify-between'>
            {displaySteps}
        </div>
    )
}

export default Steps