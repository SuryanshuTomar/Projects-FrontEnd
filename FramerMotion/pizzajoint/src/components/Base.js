import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {
		opacity: 0,
		x: "100vw",
	},
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.5,
			type: "spring",
			stiffness: 120,
		},
	},
};

const nextVariants = {
	hidden: {
		x: "-100vw",
	},
	visible: {
		x: 0,
		transition: {
			type: "spring",
			stiffness: 120,
		},
	},
};

const Base = ({ addBase, pizza }) => {
	const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

	return (
		<motion.div
			className="base container"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			<h3>Step 1: Choose Your Base</h3>
			<ul>
				{bases.map((base) => {
					let spanClass = pizza.base === base ? "active" : "";
					return (
						<motion.li
							key={base}
							onClick={() => addBase(base)}
							whileHover={{
								scale: 1.3,
								color: "#f8e112",
								originX: 0,
								textShadow: "0 0 8px #f8e112",
							}}
							transition={{
								type: "spring",
								stiffness: 300,
							}}
						>
							<span className={spanClass}>{base}</span>
						</motion.li>
					);
				})}
			</ul>

			{pizza.base && (
				<motion.div className="next" variants={nextVariants}>
					{/* We dont need to mention the initial and animate property in the child element if its both parent and child elements are using variants with same variants property names */}
					<Link to="/toppings">
						<motion.button
							whileHover={{
								scale: 1.1,
								textShadow: "0 0 8px white",
								boxShadow: "0 0 8px white",
							}}
						>
							Next
						</motion.button>
					</Link>
				</motion.div>
			)}
		</motion.div>
	);
};

export default Base;
