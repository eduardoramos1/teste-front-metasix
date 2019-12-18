import React from "react";
import logo from "./images/logo.png";

const Header = () => {
	return (
		<React.Fragment>
			<header>
				<nav className="custom-bg-blue flex-between">
					<img src={logo} alt="logo" className="logo" />
					<div className="navbar-item-group">
						<a href="#!" className="navbar-item">
							<i className="fas fa-th icon"></i>
							<span className="navbar-item-text">Módulos</span>
						</a>
						<a href="#!" className="navbar-item">
							<i className="fas fa-sign-out-alt icon"></i>
							<span className="navbar-item-text">Log Out</span>
						</a>
					</div>
				</nav>
			</header>
		</React.Fragment>
	);
};

export default Header;
