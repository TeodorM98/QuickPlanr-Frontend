
interface SubmitButtonProps {
  value: string; 
  onClick?: () => void; 
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ value, onClick }) => {
  return (
    <input
      type="submit"
      value={value}
      className="bg-slate-400 text-gray-700 hover:bg-orange-600 p-2 rounded cursor-pointer"
      onClick={onClick} 
    />
  );
};

export default SubmitButton;

  