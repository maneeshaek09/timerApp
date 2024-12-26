import React from 'react';

interface AddButtonProps {
  isTitleValid: boolean;
  isTimeValid: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Add an onClick prop
}

const AddButton: React.FC<AddButtonProps> = ({
  isTitleValid,
  isTimeValid,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
        isTitleValid && isTimeValid
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-blue-400 cursor-not-allowed'
      }`}
      disabled={!isTitleValid || !isTimeValid} 
      onClick={onClick} 
    >
      Add Timer
    </button>
  );
};




export default AddButton;
