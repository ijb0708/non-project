<template>
  <div>
  	<textarea v-model="Text"></textarea>
  </div>
</template>

<script>
export default {
	name:'MessageBox',
	props:['Text'],
	data() {
		return {
			ChatMessages:''
		}
	}
}
</script>

<style>
</style>
