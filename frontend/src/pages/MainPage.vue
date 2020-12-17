<template>
  <div class='page'>
  	<Header calss= 'header' />
  	<Content />
  </div>
</template>

<script>
import Header from '@/components/HeaderLayoutComp.vue'
import Content from '@/components/ContentLayoutComp.vue'

export default {
  name: 'main',
  components: {
  	Header,
  	Content
  }
}
</script>

<style scoped>
	div {
		width: 95vw;
		height: 80vh;

		border: 1px solid black;
	}

	.Header {
		width: 90vw;
		height: 10vh;
		border-bottom: 1px solid black;
		background: yellow;
	}
	
	.Header {
		width: 90vw;
		height: 10vh;
		border-bottom: 1px solid black;
		background: yellow;
	}

	@media( max-width: 800px) {
	}
</style>
