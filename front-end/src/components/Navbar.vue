<template>
	<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
		<a class="navbar-brand" href="#">CodaHx</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">
				<li class="nav-item active">
					<a class="nav-link" href="/"
						>Home <span class="sr-only"></span
					></a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/product">Product</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/about">About Us</a>
                    
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/hospital">Sign Up</a>
                    
				</li>
			</ul>
			<br />
			<br />
			<div class="navbar-nav ms-auto">
				<form class="form-inline my-2 my-lg-0">
					<input
						class="form-control mr-sm-2"
						type="search"
						placeholder="Search"
						aria-label="Search" />
				</form>
			</div>
		</div>
	</nav>
</template>
<script>
	export default {
		name: 'Navbar',
	};
</script>
