<template>
    <div>
        <nav-title :data="data" :name="strName" :title="'Test title'"></nav-title>
    
    
    
        <div class="container-fluid">
            <form-input @output="outputForm($event)" :form="form"></form-input>
    
            <table-data class="mt-3" :col="10" :row="5" :input="true"></table-data>
        </div>
    
    </div>
</template>

<script>
    import NavTitle from '@/components/widget/NavTitle';
    import FormInput from '@/components/widget/FormInput';
    import TableData from '@/components/widget/TableData';
    export default {
        components: {
            NavTitle,
            FormInput,
            TableData
        },
        data() {
            return {
                strTitle: 'xxx',
                strName: 'test',
                form: {
                    fields: [{
                            name: 'Name',
                            col: 2,
                            showDialog: true,
                            dialog: []
                        },
                        {
                            name: 'Surname',
                            col: 2,
                        }
                    ],
                },
    
                data: null
            }
        },
    
        created() {
            this.callAPI();
        },
        methods: {
    
            outputForm(value) {
                //console.log(value);
                this.data = value
    
            },
            callAPI() {
                setTimeout(() => {
                    console.log('Success')
                }, 2000)
            },
            callAPI2() {
                setTimeout(() => {
                    console.log('Success 2')
                }, 2000)
            }
        }
    }
</script>

