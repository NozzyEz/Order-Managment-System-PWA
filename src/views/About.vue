<template>
	<div class="ion-page">
		<ion-header>
			<ion-toolbar>
				<ion-buttons slot="start">
					<ion-back-button default-href="/"></ion-back-button>
				</ion-buttons>
				<ion-title>Om Zaphyr Appen</ion-title>
			</ion-toolbar>
		</ion-header>
		<ion-content>
			<div class="vertical-center">
				<img src="../assets/logo.png" width="150" height="150" />
			</div>
			<ion-card>
				<ion-card-header>
					<ion-card-subtitle>
						QR kode til nem deling:
					</ion-card-subtitle>
				</ion-card-header>
				<ion-card-content>
					<!-- <div> -->
					<div class="ion-text-center">
						<qriously value="https://zaphyr-pwa.web.app/" :size="250" />
					</div>
					<br />
					<p>
						Instruktion: Hold din telefons kamera op til denne kode for at gå
						til appen automatisk.
					</p>
				</ion-card-content>
			</ion-card>
		</ion-content>
		<ion-footer>
			<ion-card>
				<ion-card-content>
					<p>
						Zaphyr appen er udviklet af Mark Sahlgreen og Elena Catalina
						Barbulescu, 2020
					</p>
				</ion-card-content>
			</ion-card>
		</ion-footer>
	</div>
</template>

<script>
export default {
	name: 'About',
}
</script>

<style scoped>
.vertical-center {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>