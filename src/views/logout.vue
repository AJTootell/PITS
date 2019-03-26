<template>
	<div class="container">
		<div class="py-5 text-center">
			<img class="d-block mx-auto mb-4" src="../assets/logo.png" alt="" width="72" height="72">
			<h2>Logged out!</h2>
			<p class="lead">You have now been logged out of PITS.</p>

			<div class="text-center">
				<router-link to="authenticate" class="btn btn-outline-success">Sign in</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "logout",
		data () {

		},
		mounted() {
			if(this.$session.has('user') || this.$store.getters.user){
				this.$session.remove('user');
				this.$store.commit('setUser', null);
			}
		}
	}
</script>

<style>
</style>