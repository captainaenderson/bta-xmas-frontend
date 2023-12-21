function Navbar() {
	return (
	  <nav className="font-mono flex justify-between items-center mt-5 px-4 mx-auto max-w-2xl">
		<div className="flex-1"></div> {/* Linker Platzhalter für Ausgleich */}
		
		<ul className="flex items-center text-white ">
		  <li className="mx-2">
			<a href="#rezepte" className="nav-link">Merry</a>
		  </li>
		  <li className="mx-2">
			<img className="nav-link" src="./logo.gif" alt="Logo" style={{ height: "50px" }} />
		  </li>
		  <li className="mx-2">
			<a href="#playlist" className="nav-link">Christmas</a>
		  </li>
		</ul>
		
		<ul className="flex items-center text-yellow-200 flex-1 justify-end md:flex-row flex-col">
		  <li className="mx-2 nav-link md:mb-0 mb-2">
			<a href="/">EN</a>
		  </li>
		  <li className="hidden md:block">
			| {/* Trennstrich sichtbar ab 'md'-Größe */}
		  </li>
		  <li className="mx-2 nav-link">
			<a href="/de">DE</a>
		  </li>
		</ul>
	  </nav>
	);
  }
  
  export default Navbar;
  