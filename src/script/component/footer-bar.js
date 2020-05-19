class FooterBar extends HTMLElement {
	constructor() {
		super();
		this.shadowDOM = this.attachShadow({mode: "open"});
	}

	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowDOM.innerHTML = `
		<style>
			.isi_footer {
				width: 20%;
				background: linear-gradient(aqua, blue);
				padding: 3px;
				display: flex;
				border-radius: 20px;
				margin: 10px 0 20px 10%;
				box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.5);

			}

			a {
				text-decoration: none;
				color: white;
			}

			.isi_footer h3{
				margin: 0;
				margin: 5px 0 0 15px;
			}

			.isi_footer img{
				height: 35px;
				width: 35px;
				margin: 0 50px 0 35px;
				border-radius: 50%;
			}
		</style>
		<a href="https://api.whatsapp.com/send?phone=+6289623032892&text=Hi rifki :)">
			<div class="isi_footer">
				<img src="https://cdn3.iconfinder.com/data/icons/social-network-30/512/social-01-512.png">
				<a href="https://api.whatsapp.com/send?phone=+6289623032892&text=Hi rifki :)"><h3>089623032892</h3></a>
			</div>
		</a>

		<a href="https://www.instagram.com/mhmd.rifki_54/">
			<div class="isi_footer">
				<img src="https://image.freepik.com/free-vector/instagram-icon_1057-2227.jpg">
				<a href="https://www.instagram.com/mhmd.rifki_54/"><h3>mhmd.rifki_54</h3></a>
			</div>
		</a>

		<a href="https://m.facebook.com/profile.php">
			<div class="isi_footer">
				<img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png">
				<a href="https://m.facebook.com/profile.php"><h3>Muhamad Rifki</h3></a>
			</div>
		</a>
		`;
	}
}

customElements.define("footer-bar", FooterBar);