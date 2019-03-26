<template>
	<div class="container">
		<div class="py-5 text-center">
			<img class="d-block mx-auto mb-4" src="../assets/logo.png" alt="" width="72" height="72">
			<h2>Welcome to PITS</h2>
			<p class="lead">Please select where you wish to go.</p>

			<div class="mt-5 row justify-content-center">
				<router-link to="launch" element="div" class="col-md-3 shadow-sm navigation-box">
					Launch
				</router-link>

				<router-link to="configure" element="div" class="col-md-3 shadow-sm navigation-box">
					Configure
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'home'
	}
</script>

<style>
	.navigation-box{
		margin: 5px;
		padding-top: 30px;
		padding-bottom: 30px;
		background-color: #2d2d2d;
		text-decoration: none;
		font-size: 24px;
		color:white;
		transition: all ease-in-out 100ms;
	}

	.navigation-box:hover{
		background-color: #808080;
		text-decoration: none;
		color:white;
	}
</style>
