Vue.component('my-component', {
	template: '<li @click="finished">{{data}}<button class="show" :style="{display:status}" @click.stop="del">完成</button></li>',
	props: ["data",
		"status"
	],
	methods: {
		finished: function() {
			this.$emit('togglefinish');
		},
		del: function() {
			this.$emit('delitem');
		}
	}
});

new Vue({
	el: "#todolist",
	data: {
		items: [],
		nextItemId: 0,
		myItem: ""
	},
	methods: {
		addItem: function() {
			this.items.push({
				"id": ++this.nextItemId,
				"content": this.myItem,
				"isFinished": false,
				"display": "none"
			});
			this.myItem = "";
		},
		toggleItem: function(item) {
			item.isFinished = !item.isFinished;
			if (item.display === "none") {
				item.display = "inline-block";
			} else {
				item.display = "none";
			}
		}
	}
});