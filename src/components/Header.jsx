

function Header() {

    return (
      <header className="flex justify-between items-center w-full px-6 py-4 text-accentColor">
        <div className="flex items-center justify-center w-10 text-accentColor">
            <h1 className="text-3xl">C</h1>
        </div>
        <ul className="flex gap-9 text-md font-thin">
          <li>
            TOP
          </li>
          <li>
            PROJECTS
          </li>
          <li>
            CONTACT
          </li>
        </ul>
      </header>
    )
  }
  
  export default Header
  