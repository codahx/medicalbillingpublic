<template>
	<div>
		<h2>Create an Account</h2>
		<form v-on:submit.prevent="submitForm">
			<div class="q-gutter-md">
				<label for="name">Name</label>
				<q-input
					rounded
					outlined
					style="max-width: 300px"
					type="text"
					id="name"
					placeholder="Your name"
					v-model="form.name" />
			</div>
			<div class="q-gutter-md">
				<label for="email">Email address</label>
				<q-input
					rounded
					outlined
					style="max-width: 300px"
					type="email"
					id="email"
					placeholder="name@example.com"
					v-model="form.email" />
			</div>
			<div>
				<label for="amount"
					>Enter The hospital Where you received your procedure</label
				>
				<q-select
					rounded
					outlined
					style="max-width: 300px"
					name="hospital"
					id="hospital"
					:options="hospital_options"
					v-model="form.hospital" />
			</div>
			<div>
				<label for="amount">Enter your Bill Amount</label>
				<q-input
					rounded
					outlined
					style="max-width: 300px"
					type="number"
					id="amount"
					placeholder="Bill Amount"
					v-model="form.amount" />
			</div>
			<div class="form-group">
				<label for="billtype">What Type of Medical Bill do you have?</label>
				<q-select
					rounded
					outlined
					style="max-width: 300px"
					name="billtype"
					:options="bill_options"
					id="billtype"
					v-model="form.billtype" />
			</div>
			<div>
				<label for="insurance">What Type of Insurance do you have?</label>
				<q-select
					standout
					:options:="insurance_options"
					style="max-width: 300px"
					name="insurance"
					id="insurance"
					v-model="form.insurance" />
			</div>
			<div>
				<label for="refer">From where did you hear about us?</label>
				<q-select
					rounded
					style="max-width: 300px"
					name="refer"
					id="refer"
					v-model="form.refer"
					:options="refer_options" />
			</div>
			<div class="form-group">
				<div class="form-check form-check-inline">
					<q-checkbox v-model="form.terms" />
					<label class="form-check-label" for="inlineCheckbox3"
						>Agree to Terms & Conditions</label
					>
				</div>
			</div>
			<div class="form-group">
				<button class="btn btn-primary" onclick="location.href = '/mychart';">
					Submit
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'PostFormAxios',
		data() {
			return {
				hospital_options: ['Johns Hopkins', 'Mayo Clinic'],
				bill_options: ['Emergency', 'Childbirth'],
				refer_options: ['Website', 'Friend'],
				insurance_options: ['Regence', 'Kaiser'],
				form: {
					name: '',
					hospital: '',
					email: '',
					refer: '',
					terms: false,
					insurance: '',
				},
			};
		},
		methods: {
			submitForm() {
				axios
					.post('http://127.0.0.1:5000/register', this.form)
					.then((res) => {
						//Perform Success Action
					})
					.catch((error) => {
						// error.response.status Check status code
					})
					.finally(() => {
						//Perform action in always
					});
			},
		},
	};
</script>
