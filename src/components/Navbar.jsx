function Navbar() {
	return (
	  <>
		<nav className=" font-mono flex justify-center mt-5">
		  <ul className="flex items-center text-white">
		  <li className="mx-2">
          <a href="#rezepte">Merry</a> {/* Verlinkt zu #rezepte */}
        </li>
			<li className="mx-2">
			  <img
				src="./logo.gif"
				alt="Logo"
				style={{ height: "50px" }}
			  />
			</li>
			<li className="mx-2">
          <a href="#playlist">Christmas</a> {/* Verlinkt zu #playlist */}
        </li>
		  </ul>
		</nav>
	  </>
	);
  }
  
  export default Navbar;
  
