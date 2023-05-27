const Header = () => {
  const val = 'Hello World';
  return (
    <>
      <h1>Hi!</h1>
      <p>{val}</p>
      <input type="text" placeholder='some text' />
      <button>button</button>
    </>
  );
}

export default Header;