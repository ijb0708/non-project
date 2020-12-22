<template>
  <div>
  	<input 	type="text"
  			v-model="Text"
  			v-on:keyup.enter="BtnClick"
  			placeholder="Standing by"
  	/>
  	<button v-on:click="BtnClick">
  		{{ BtnName }}
  	</button>
  </div>
</template>

<script>
export default {
	name:'ButtonAndText',
	props:['BtnName'],
	data() {
		return {
			Text:''
		}
	},
	methods: {
		BtnClick() {
			this.$emit("BtnClick", this.Text);
			this.clearText();
		},
		clearText() {
			this.Text='';
		}
	}
}
</script>

<style>
</style>
