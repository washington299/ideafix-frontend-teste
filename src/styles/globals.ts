import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	:root {
		--purple: #842C8F;
		--orange: #FF7603;
		--water-blue: #86CCC9;
		--white: #FFFFFF;
		--light-grey: #F4F5F7;
		--grey: #A6A5A6;
		--dark-grey: #919191;

		--font-weight-light: 500;
		--font-weight: 600;
		--font-weight-bold: 700;

		--size-extra-small: 0.5rem; // 8px
		--size-small: 1rem; // 16px
		--size-medium: 1.5rem; // 24px
		--size-large: 2rem; // 32px
		--size-extra-large: 4rem; //64px
	}
`;
