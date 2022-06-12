import React, { useState, useContext } from 'react'
import { Stepper, StepLabel, Step } from '@mui/material'
import Header from './home/Header'
import Sidebar from './home/sidebar/Sidebar'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import { multiStepContext } from '../StepContext'

const CampaignSetup = () => {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   const { currentStep, finalStep } = useContext(multiStepContext)

   function showStep(step) {
      switch (step) {
         case 1:
            return <Step1 />
         case 2:
            return <Step2 />
         case 3:
            return <Step3 />
      }
   }

   return (
      <div>
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />

         <div className="container" style={{ marginTop: '100px' }}>
            <Stepper activeStep={currentStep - 1} orientation="horizontal">
               <Step>
                  <StepLabel>campaign</StepLabel>
               </Step>
               <Step>
                  <StepLabel></StepLabel>
               </Step>
               <Step>
                  <StepLabel></StepLabel>
               </Step>
            </Stepper>

            {showStep(currentStep)}
         </div>
      </div>
   )
}

export default CampaignSetup