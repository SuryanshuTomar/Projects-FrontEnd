import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
	return (
		<motion.div className="home container" animate={{ rotateZ: -5 }}>
			<h2>Welcome to Pizza Joint</h2>
			<Link to="/base">
				<button>Create Your Pizza</button>
			</Link>
		</motion.div>
	);
};

export default Home;