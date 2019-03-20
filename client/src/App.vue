<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
</style>

<script>
	export default {
		name: "App",
		created(){
			if(this.$session.has('user') && !this.$store.getters.user){
				// User is already logged in
				this.$store.commit('setUser', this.$session.get('user'));
				if(this.$router.currentRoute.name == 'authenticate'){
					this.$router.push('/');
				}
			} else {
				if(this.$router.currentRoute.name !== 'authenticate'){
					// No user, take to auth
					this.$router.push('/authenticate');
				}
			}
		}
	}
</script>
