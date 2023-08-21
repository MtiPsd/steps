const messages = [
  'Learn React',
  'Apply for Jobs',
  'Invest your new income',
];

export default function App() {
  const step = 1;

  function handlePrevious() {
    console.log('Previous Button Clicked');
  }

  function handleNext() {
    console.log('Next Button Clicked');
  }

  /////////////////////////////////////////
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
        <div className={`${step >= 2 ? 'active' : ''}`}> 2</div>
        <div className={`${step >= 3 ? 'active' : ''}`}> 3</div>
      </div>

      <div className='message'>
        Step {step}: {messages[step - 1]}
      </div>

      <div className='buttons'>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          style={{ backgroundColor: '#7950f2', color: '#fff' }}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}
