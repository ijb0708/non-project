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
			UserRequirement:"",
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
					this.UserRequirement="빈문자입니다";
					this.RepeatCount++;
					return;
				}else {
					this.UserRequirement="그냥 아무아이디로 접속하겠습니다.";
					text="바보"
					this.RepeatCount=0;
				}
			}
			this.UserRequirement=text+"님 연결중입니다 ...";
			this.Connection= new WebSocket("ws://localhost:2000");
			console.log("connect" + this.Connection);
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
