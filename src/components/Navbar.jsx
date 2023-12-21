function Navbar() {
	return (
	  <nav className="font-mono flex justify-between items-center mt-5 px-4">
		<div className="flex-1"></div> {/* Linker Platzhalter für Ausgleich */}
		
		<ul className="flex items-center text-white">
		  <li className="mx-2">
			<a href="#rezepte" className="nav-link">Merry</a>
		  </li>
		  <li className="mx-2">
			<img className="nav-link" src="./logo.gif" alt="Logo" style={{ height: "50px" }} />
		  </li>
		  <li className="mx-2">
			<a href="#playlist" className="nav-link" >Christmas</a>
		  </li>
		</ul>
		
		<ul className="flex items-center text-white flex-1 justify-end">
		  <li className="mx-2 nav-link">
			<a href="/">EN</a>
		  </li>
		  <li>
			|
		  </li>
		  <li className="mx-2 nav-link">
			<a href="/de">DE</a>
		  </li>
		</ul>
	  </nav>
	);
  }
  
  export default Navbar;
  