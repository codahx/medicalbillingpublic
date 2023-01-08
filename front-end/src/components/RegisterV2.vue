<template>
	<div class="q-pa-md" style="max-width: 400px">
		<q-form
			action="/dashboard"
			method="post"
			ref="registerform"
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="q-gutter-md"
			align="center">
			<q-input
				name="name"
				filled
				v-model="name"
				label="Your name *"
				hint="Name and surname"
				lazy-rules
				:dense="dense"
				:rules="[
					(val) => (val && val.length > 0) || 'Please type something',
				]" />
			<h6>Enter Your Bill Amount</h6>
			<q-input
				filled
				name="amount"
				type="number"
				v-model="amount"
				label="Amount*"
				lazy-rules
				:dense="dense" />

			<h6>What Insurance do you have?</h6>
			<q-select
				filled
				:options="insurance_options"
				v-model="insurance"
				:dense="dense" />

			<h6>How Did you Learn about us</h6>
			<q-select
				label="How did you learn about us *"
				v-model="refer"
				filled
				:dense="dense"
				:options="refer_options" />
			<h6>Select Your Bill Type</h6>
			<q-select
				filled
				:options="bill_options"
				v-model="billtype"
				:dense="dense" />

			<q-toggle
				v-model="accept"
				label="I accept the license and terms"
				:dense="dense" />

			<div>
				<q-btn label="Submit" type="submit" color="primary" />
				<q-btn
					label="Reset"
					type="reset"
					color="primary"
					flat
					class="q-ml-sm"
					:dense="dense" />
			</div>
		</q-form>
	</div>
</template>

<script>
	import { useQuasar } from 'quasar';
	import { ref } from 'vue';
	import axios from 'axios';
	export default {
		setup() {
			const $q = useQuasar();

			const name = ref(null);
			const amount = ref(null);
			const accept = ref(false);
			const refer = ref(null);
			const billtype = ref(null);
			const insurance = ref(null);

			return {
				dense: true,
				refer_options: ['Website', 'Friend'],
				hospital_options: ['Johns Hopkins', 'Mayo Clinic'],
				bill_options: ['Emergency', 'Childbirth'],
				insurance_options: ['Evergreen'],
				name,
				amount,
				accept,
				refer,
				billtype,
				insurance,
				onSubmit() {
					if (accept.value !== true) {
						$q.notify({
							color: 'red-5',
							textColor: 'white',
							icon: 'warning',
							message: 'You need to accept the license and terms first',
						});
					} else {
						this.$refs.registerform.submit();
					}
				},

				onReset() {
					name.value = null;
					amount.value = null;
					accept.value = false;
					refer.value = null;
					billtype.value = null;
					insurance.value = null;
				},
			};
		},
		methods: {
			onSubs(evt) {
				console.log('@submit - do something here', evt);
				evt.target.submit();
			},
		},
	};
</script>
