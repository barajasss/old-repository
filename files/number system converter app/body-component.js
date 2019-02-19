
Vue.component('body-component', {
	props: ['numberSystems', 'input1', 'input2'],
	template: `
		<div>
			<input-component 
				:number-systems="numberSystems"
				:input="input1"
				placeholder="Enter value 1"
				@update-input="$emit('update-input-2', { input: 'one', data: $event })"
				@update-number-system="$emit('update-number-system-2', { system: 'one', data: $event })"
			></input-component>
			<input-component 
				:number-systems="numberSystems"
				:input="input2"
				placeholder="Enter value 2"
				@update-input="$emit('update-input-2', { input: 'two', data: $event })"
				@update-number-system="$emit('update-number-system-2', { system: 'two', data: $event })"
			></input-component>
		</div>
	`
});
//child of body-component which is in turn child of the root vue instance of converter-app
Vue.component('input-component', {
	data: function(){
		return {
			numberSystemPosition: 0
		}
	},
	props: ['numberSystems', 'input', 'placeholder'],
	template: `
		<div class="card-panel blue" style="padding: 10px 0px 0px 0px">
			<div class="row" style="margin: 0px">
				<button 
					class="col push-s1 offset-m1 offset-l1 s2 m2 l2 btn orange waves-effect waves-light"
					@click="updateNumberSystem('prev')"
				>
					Prev
				</button>
				<div 
					id="number-system-display" 
					class="offset-s2 offset-m1 offset-l1 col s4 m4 l4 purple darken-3 container"
				>
					{{ numberSystems[numberSystemPosition] }}
				</div>
				<button 
					class="offset-s2 offset-m1 offset-l1 col pull-s1 s2 m2 l2 btn orange waves-effect waves-light"
					@click="updateNumberSystem('next')"
				>
					Next
				</button>
			</div>
			<div class="row">
				<input 
					class="col offset-s1 offset-m1 offset-l1 s10 m10 l10 white-text"
					type="text"
					:value="input"
					:placeholder="placeholder"
					@input="$emit('update-input', $event.target.value)"
				>
			</div>
		</div>
	`,
	methods: {
		updateNumberSystem: function(dir){
			if(dir == 'prev'){
				if(this.numberSystemPosition>0){
					this.numberSystemPosition--;
				} else{
					this.numberSystemPosition = this.numberSystems.length-1;
				}
			}
			else if(dir == 'next'){
				if(this.numberSystemPosition < this.numberSystems.length-1){
					this.numberSystemPosition++;
				} else{
					this.numberSystemPosition = 0;
				}
			}
			this.$emit('update-number-system', this.numberSystems[this.numberSystemPosition]);
		}
	}
});