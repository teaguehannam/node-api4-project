import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
	<div className="NavContainer">
		<h1>Rick & Morty API</h1>
		<div>
			<Link to="/">Home</Link>
		</div>
		<div>
			<Link to="/characters">Characters</Link>
		</div>
		<div>
			<Link to="/locations">Locations</Link>
		</div>
		<div>
			<Link to="/episodes">Episodes</Link>
		</div>

	</div>
);

export default Navigation;
