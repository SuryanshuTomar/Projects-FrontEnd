import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Popular() {
	const [popular, setPopular] = useState([]);

	const getPopular = async () => {
		const checkStorage = localStorage.getItem("popular");

		if (checkStorage) {
			setPopular(JSON.parse(checkStorage));
		} else {
			const response = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=9`
			);
			const data = await response.json();
			localStorage.setItem("popular", JSON.stringify(data.recipes));
			setPopular(data.recipes);
		}
	};

	useEffect(() => {
		getPopular();
	}, []);

	return (
		<div>
			<Wrapper>
				<h3>Popular Picks</h3>
				<Splide
					options={{
						perPage: 4,
						arrows: false,
						pagination: false,
						drag: "free",
						gap: "2rem",
					}}
				>
					{popular.map((recipe) => {
						return (
							<SplideSlide key={recipe.id}>
								<Card>
									<p>{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
									<Gradient />
								</Card>
							</SplideSlide>
						);
					})}
				</Splide>
			</Wrapper>
		</div>
	);
}

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Card = styled.div`
	min-height: 15rem;
	border-radius: 2rem;
	overflow: hidden;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: white;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 2rem;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Popular;
