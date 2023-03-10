function Header() {
  return (
    <header className="flex justify-between items-center w-full px-6 py-4 text-accentColor">
      <div className="flex items-center justify-center w-10 text-accentColor">
        <h1 className="text-3xl">C .</h1>
      </div>
      <div className="flex gap-9 items-center">
        <ul className="flex gap-9 text-md font-thin">
          <li>TOP</li>
          <li>PROJECTS</li>
          <li>CONTACT</li>
        </ul>
        <a
          href="src\assets\CONOR DUNNE Resume 2021.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" text-mainColor font-semibold bg-accentColor py-2 px-4 rounded">
            Resume
          </button>
        </a>
      </div>
    </header>
  );
}

export default Header;
