const ErrorMessage = ({ message }) => {
  message = `Oops! Something went wrong. Please try again later.`;
  return <div className="error-message">{message}</div>;
};

export default ErrorMessage;
