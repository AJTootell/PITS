<template>
	<div class="container">
		<div class="py-5 text-center">
			<img class="d-block mx-auto mb-4" src="../assets/logo.png" alt="" width="72" height="72">
			<h2>Welcome to PITS</h2>
			<p class="lead">Please authenticate with Google to begin.</p>

			<g-signin-button class="btn btn-outline-info cursor-pointer" :params="googleSignInParams" @success="onSignInSuccess" @error="onSignInError">
				Sign in with Google
			</g-signin-button>
		</div>
	</div>
</template>

<script>
	export default {
		name: "authenticate",
		data () {
			return {
				googleSignInParams: {
					client_id: '128284732441-6f4fqv9huq71gse4878ebujneffmolgq.apps.googleusercontent.com'
				}
			}
		},
		methods: {
			onSignInSuccess (googleUser) {
				const profile = googleUser.getBasicProfile();

				let user = {
					email: profile.getEmail(),
					uid: profile.getId()
				};

				this.$session.set('user', user);
				this.$store.commit('setUser', user);
				this.$router.push('/');
			},
			onSignInError (error) {
				console.log('OH NOES', error)
			}
		}
	}
</script>

<style>
</style>