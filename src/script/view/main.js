const port = process.env.PORT

function main() {

	const getIndonesia = () => {
		fetch(`https://covid19.mathdro.id/api/countries/Indonesia`)
		.then(response => {
			return response.json();
		})
		.then(responseJson => {
			if(responseJson.error) {
				showResponseMessage(responseJson.message);
			} else {
				renderAllIndonesia(responseJson);
			}
		})
		.catch(error => {
			showResponseMessage(error);
		})
	};

	const renderAllIndonesia = (indonesias) => {
		const listIndoesiaElement = document.querySelector("#listCovid");
		listIndoesiaElement.innerHTML = `
		<div class="box">
			<h4>Terkonfirmasi</h4>
			<h2><b>${indonesias.confirmed.value}</b></h2>
			<i class="fa fa-user" style="margin:-100px 0 0 5px; font-size: 160px;opacity: 0.3"></i>
		</div>

		<div class="box">
			<h4>Positif</h4>
			<h2><b>${indonesias.confirmed.value}</b></h2>
			<i class="fa fa-meh-o" style="margin:-100px 0 0 5px; font-size: 160px; opacity: 0.3"></i>
		</div>

		<div class="box">
			<h4>Sembuh</h4>
			<h2><b>${indonesias.recovered.value}</b></h2>
			<i class="fa fa-smile-o" style="margin:-100px 0 0 5px; font-size: 160px; opacity: 0.3"></i>		
		</div>

		<div class="box">
			<h4>Meninggal</h4>
			<h2><b>${indonesias.deaths.value}</b></h2>
			<i class="fa fa-frown-o" style="margin:-100px 0 0 5px; font-size: 160px; opacity: 0.3"></i>
		</div>
		`;
	};

	const showResponseMessage = (message = "Check your internet") => {
		alert(message)
	};
	getIndonesia();


	const getProvinsi = () => {
		fetch(`https://indonesia-covid19.mathdro.id/api/provinsi`)
		.then(response => {
			return response.json()
		})
		.then(responseJson => {
			if(responseJson.error) {
				showMessage(responseJson.message);
			} else {
				renderAllProvinsis(responseJson.data);
			}
		})
		.catch(error => {
			showMessage(error);
		})
	};

	const renderAllProvinsis = (provinsis) => {
		const listProvinsiElement = document.querySelector("#data");
		listProvinsiElement.innerHTML = "";

		provinsis.forEach(provinsi => {
			listProvinsiElement.innerHTML += `
				<tr>
					<td>${provinsi.provinsi}</td>
					<td>${provinsi.kasusPosi}</td>
					<td>${provinsi.kasusSemb}</td>
					<td>${provinsi.kasusMeni}</td>
				</tr>
			`;
		});
	}

	const showMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    getProvinsi();
}

export default main;