
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
 

    <title>Informasi Covid-19</title>
  </head>
  <body>
  	<app-bar>
  		<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
		  <a class="navbar-brand">Informasi Covid-19</a>
		  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
		    <span class="navbar-toggler-icon"></span>
		  </button>

		  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
		    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
		      <li class="nav-item active">
		        <a class="nav-link" href="https://rifkimalana54.github.io/myprofile.io/">Profile <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item active">
		        <a class="nav-link" href="#">Article</a>
		      </li>
		    </ul>
		    <form class="form-inline my-2 my-lg-0">
		      <input class="form-control mr-sm-2" type="search" placeholder="Search">
		      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		    </form>
		  </div>
		</nav>
  	</app-bar>

	<div class="jumbotron">
	  <div class="container">
	    <h1>Cegah Penyebaran Covid-19</h1>
	    <p>Tahun ini, dunia di gegerkan dengan adanya virus corona yang sangat berbahaya dan mudah menyebar kepada manusia, salah satu contoh pencegahan yaitu dengan cara hidup sehat dan bersih. Kita jangan lupa mencuci tangan sebelum dan sesudah makan, memakai masker ketika keluar rumah dan hindari kerumunan supaya terhindar dari virus tersebut.</p>
	  </div>
	  <div id="logo">
	  	<img src="https://s.republika.co.id/uploads/images/headline_slide/gejala-dan-cara-cegah-virus_200404110247-686.png" width="380" height="250">
	  </div>
	</div>
	
	<div class="total_kasus">
		<h2><b>TOTAL KASUS</b></h2>
		<p>Data dari kementrian RI</p>
	</div>

	<content id="listCovid">
		
	</content>

	<div class="total_kasus">
		<h2><b>TOTAL KASUS PROVINSI</b></h2>
		<p>Data dari kementrian RI</p>
	</div>
	
	<div class="history card">
		<h2>Informasi Covid-19 Provinsi</h2>
		<table>
			<thead>
				<tr>
					<th>Nama Profinsi</th>
					<th>Positif</th>
					<th>Sembuh</th>
					<th>Meninggal</th>
				</tr>
			</thead>
			<tbody id="data">
			</tbody>
		</table>
	</div>

	<div class="total_kasus">
		<h2><b>SOSIAL MEDIA</b></h2>
		<p>Jangan lupa ikuti</p>
	</div>

	<footer-bar></footer-bar>

	<div class="copyright">
		&copy2020 Muhamad Rifki
	</div>

	<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </body>
</html>
