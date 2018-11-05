<template>
    <div>
        <nav-title :data="input" title="TRANSECTION PROTOTYPE "></nav-title>
        <tabs name="ex" :tabs="tabsData"></tabs>
        <div class="container-fluid">
            <div class="tab-content" id="myTabContent">
                <div :class="'tab-pane fade show active'  " id="ex0" role="tabpanel" aria-labelledby="home-tab">
                    <form-input @output="value.input1 = $event" :form="form"></form-input>
                </div>
                <div :class="'tab-pane fade show '  " id="ex1" role="tabpanel" aria-labelledby="home-tab">
                    <form-input @output="value.input2 = $event" :form="form1"></form-input>
                </div>
               
            </div>
            <table-data class="mt-3" :col="10" :row="5" :input="true"></table-data>
           
        </div>
       
    
    
    </div>
</template>

<script>
    import NavTitle from '@/components/widget/NavTitle';
    import FormInput from '@/components/widget/FormInput';
    import TableData from '@/components/widget/TableData';
    import Tabs from '@/components/widget/Tabs';
    export default {
        components: {
            NavTitle,
            Tabs,
            FormInput,
            TableData
        },
        data() {
            return {
                input:null,
                input1:null,
                value:{
                    input1:null,
                    input2:null
                },
                form: {
                    fields: [{
                            name: 'Name',
                            col: 2,
                            dialog: []
                        },
                        {
                            name: 'Surname',
                            col: 2,
                        },
                        {
                            name: 'Age',
                            col: 2,
                        }
                    ],
                },
                  form1: {
                    fields: [{
                            name: 'xxx',
                            col: 2,
                            dialog: []
                        },
                        {
                            name: 'yyyyy',
                            col: 2,
                        },
                       
                    ],
                },
                tabsData: [{
                        name: 'Genaral Info '
                    },
                    {
                        name: 'Example 2'
                    },
                    {
                        name: 'Example 3'
                    },
                    {
                        name: 'Example 4'
                    },
                ],
                tabsData2: [{
                        name: 'Genaral Infoxx '
                    },
                    {
                        name: 'Example 2 xx'
                    },
                    {
                        name: 'Example 3 xx'
                    },
                    {
                        name: 'Example 4 xx'
                    },
                ]
    
            }
        }
    }
</script>

<style scoped>
    .nowrap {
        white-space: nowrap;
    }
</style>


