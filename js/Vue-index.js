new Vue({
    el: '#steps-form',
    data: {
        currentStep: 0,
        formData: {
            minute: 20,
            masterName: 'Александр',
            name: '',
            phone: '',
            street: '',
            comment: ''
        },
    },
    computed: {
        formNotSubmit() {
            return (
                this.formData.name === '' ||
                this.formData.phone === '' ||
                this.formData.street === '');
        }
    },
    methods: {
        nextStep() {
            this.currentStep += 1;
        },
        searchMaster() {
            setTimeout(() => {
                this.nextStep();
            }, 2000);
        },
        sendForm() {
            this.nextStep();
        }
    },
    watch: {

        currentStep(newVal) {
            switch (newVal) {
                case 1: {
                    this.searchMaster();
                    break;
                }
                case 2: {

                    break;
                }
            }
        }
    },
    created() {

    }
});