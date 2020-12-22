<template>
  <div>
  	<Header />
  	<MessageView />
  	<StatusButtonText
  		v-bind:BtnName="BtnStatus"
  		v-on:BtnClick="Connect"
  	/>
  	<TextLabel
  		v-bind:Text="UserRequirement"
  	/>
  	<Footer />
  </div>
</template>

<script>

import Footer from "../FooterComp.vue";
import Header from "../HeaderComp.vue";
import MessageView from "../common/MessageViewComp.vue";
import ButtonText from "../common/ButtonTextComp.vue";
import TextLabel from "../common/TextLabelComp.vue"

export default {
	data() {
		return {
			Connection:null,
			isConnection:false,
			BtnStatus:"",
			ConnectStatus:0, 
// 0:연결대기  1:빈문자 2:아무아이디 3:연결중 4: 연결실패 5:연결성공
			RepeatCount:0
		}
	},
	created() {
		this.BtnStatus="연결";
		this.UserRequirement="사용하실 이름을 적고 연결버튼을 눌러주세요.";
	},
	methods: {
		Connect(text) {
			if(text==""){
				var text = text || text.trim();
				if(this.RepeatCount<3) {
					this.ConnectStatus=1;
					this.RepeatCount++;
					return;
				}else {
					this.ConnectStatus=2;
					this.RepeatCount=0;
				}
			}
			this.ConnectStatus=3;
			this.Connection= new WebSocket("ws://localhost:2000");
			
			this.Connection.onerror= function() {
				this.ConnectStatus=4;
				console.log("disconnect" + this.UserRequirement);
			}

		}
	},
	components: {
		"Header":Header,
		"Footer":Footer,
		"StatusButtonText":ButtonText,
		"MessageView":MessageView,
		"TextLabel":TextLabel
	}
}
</script>

<style>
</style>
