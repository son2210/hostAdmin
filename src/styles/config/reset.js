const ResetCss = () => {
  return /*css*/ `
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		html {
			font-size: 62.5%;
		 	font-family: 'Roboto', sans-serif;
			 line-height: 1.6rem;
			 color: var(--txt-color);
		}

		ul {
			list-style: none;
		}

		a {
			text-decoration: none;
		}

		button,
		input,
		textarea {
			outline: none;
		}

		button {
			cursor: pointer;
		}

		img {
			max-width: 100%;
			height: auto;
			vertical-align: middle;
		}
		.error-group .err-msg {
			position: absolute;
			color: var(--red-color) !important;
			font-size: 1.3rem;
			padding-top: 5px;
		}
		.error-group .form-field {
			font-size: 1.3rem;
			border: 1px solid var(--red-color) !important;
			background-color: var(--red-bg-err) !important;
		}
		.error-group .label-field {
			color: var(--red-color) !important;
		}
	`;
};

export default ResetCss;
