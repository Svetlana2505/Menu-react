export const Button = () => {
  return (
    <button
      className="scroll-button"
      onClick={() => {
        const element = document.querySelector('.nav');
        element?.scrollIntoView({ behavior: 'smooth' });
      }}
    ></button>
  );
};
