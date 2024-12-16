export default function MainComp() {

  return (
    <div>
      <input
        type="number"
        value="number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>Sum is {}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter
      </button>
    </div>
  );
}
