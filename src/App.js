export default function App() {
  return (
    <div className='steps'>
      <div className='numbers'>
        <div className='1'></div>
        <div className='2'></div>
        <div className='3'></div>
      </div>

      <div className='message'>hello</div>

      <div className='buttons'>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Previous
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Next
        </button>
      </div>
    </div>
  );
}
