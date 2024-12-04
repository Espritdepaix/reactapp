import React from 'react';
import ProgramHeader from '../components/program/ProgramHeader';
import ProgramDescription from '../components/program/ProgramDescription';
import ProgramSteps from '../components/program/ProgramSteps';
import ProgramPricing from '../components/program/ProgramPricing';
import ProgramContact from '../components/program/ProgramContact';

const ProgramPage = () => {
  return (
    <div>
      <ProgramHeader />
      <ProgramDescription />
      <ProgramSteps />
      <ProgramPricing />
      <ProgramContact />
    </div>
  );
};

export default ProgramPage;