
const useValidate = ({ email, password }) => {
  const validateInputs = () => {
    if (email.includes("@") && password.length > 5) {
      return 'Validation successfully!';
    } else {
      return 'Enter a valid email or password';
    }
  };
  return validateInputs() ;
};

export default useValidate;
