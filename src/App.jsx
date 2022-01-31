const NAME = "Aayushi Dubey";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://media-exp1.licdn.com/dms/image/C4D03AQGK4e0DTM0Y_w/profile-displayphoto-shrink_800_800/0/1597674235010?e=1649289600&v=beta&t=6AcO2sJ82XN-NfejVcN2u9KL3VUYCxwGBt-11kRQ1kc" width="300px" />
		<p>International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Interested in Machine Learning & Data Science. Actively seeking internships for Summer 2022.</p>
		<a href="https://github.com/aayushidubey16" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));