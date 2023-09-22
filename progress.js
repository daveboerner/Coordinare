import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderStepOne = () => (
    <div>
      <h2>Step 1: Enter Your Name</h2>
      <input type="text" value={name} onChange={handleNameChange} />
      <button onClick={handleNextStep}>Next</button>
    </div>
  );

  const renderStepTwo = () => (
    <div>
      <h2>Step 2: Enter Your Email</h2>
      <input type="text" value={email} onChange={handleEmailChange} />
      <button onClick={handleNextStep}>Next</button>
    </div>
  );

  const renderProgressBar = () => (
    <div className="progress-bar">
      <div className={`progress-bar__step ${currentStep === 1 ? 'active' : ''}`}></div>
      <div className={`progress-bar__step ${currentStep === 2 ? 'active' : ''}`}></div>
    </div>
  );

  return (
    <div>
      {renderProgressBar()}
      {currentStep === 1 ? renderStepOne() : renderStepTwo()}
    </div>
  );
};

export default App;
