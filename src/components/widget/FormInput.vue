<template>
    <div>
        <!-- <div class="header font-size-main">
                Genaral Info 
            </div>
            <div class="linex"></div> -->
        <div class="shadow-sm bg-white">
    
            <div class=" p-3" >
    
                <div class="row ">
                    <div :class="'col-xl-'+(f.col ? f.col : '3')" v-for="(f,key) in form.fields" :key="key">
                        <div class="form-group">
                            <label for="formGroupExampleInput"><b class="font-size-main">{{f.name}} </b> </label>
                            <div class="input-group mb-3">
                                <div class="input-group-prepend" v-if="f.showDialog">
                                    <button class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModalLong" type="button" id="button-addon1"><i class="fa fa-file-text" aria-hidden="true"></i></button>
                                </div>
                                <input type="text" v-model="f.input" class="form-control border" placeholder="กรุณากรอกข้อมูล" aria-label="Example text with button addon" aria-describedby="button-addon1">
                            </div>
                        </div>
    
                    </div>
                    <!-- <div class="col-xl-4 col-lg-6">
                            <div class="form-group">
                                <label for="formGroupExampleInput" class="label-invalid "><b class="font-size-main">Example label (Required) </b></label>
                                <input type="text" class="form-control is-invalid border" id="formGroupExampleInput" placeholder="กรุณากรอกข้อมูล">
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-6">
                            <div class="form-group">
                                <label for="formGroupExampleInput"><b class="font-size-main"><i class="fa fa-lock" aria-hidden="true"></i> Example label </b></label>
                                <input type="text" disabled="true" class="form-control border" id="formGroupExampleInput" placeholder="กรุณากรอกข้อมูล">
                            </div>
                        </div> -->
    
                </div>
            </div>
        </div>
        <div class="modal hide " id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog " role="document">
                <div class="modal-content">
    
                    <div class="modal-header p-1 main-bg text-white">
    
                        <h5 class="modal-title ml-3" id="exampleModalLongTitle"><i class="fa fa-file-text" aria-hidden="true"></i> Example Dialog</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
                    </div>
                    <div class="modal-body p-0">
                        <table class="table font-size-main table-bordered table-sm shadow-lg text-center  bg-white  table-hover top-rounded">
                            <thead>
                                <tr class="  text-white " style="background:#8C9EFF">
    
                                    <th scope="col"><b>ID</b> </th>
                                    <th scope="col"><b>NAME</b></th>
                                    <th scope="col"><b>Example</b></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(n,key) in 20" :key="key" class="point-click">
    
                                    <td>00{{key+1}}</td>
                                    <td>MMXXXXXXXXX</td>
                                    <td>YYXXXXXXXXX</td>
                                </tr>
    
                            </tbody>
                        </table>
                    </div>
    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'form-input',
        props: {
            form: {
                type: Object,
                default:()=>{
                    return {
                        fields:[]
                    }
                }
            }
        },
        data() {
            return {
                test: ''
            }
        },
        watch: {
            form: {
                handler: function(val, oldVal) {
                    var myObj = new Object;
                    var x = val.fields.forEach(v => {
                        myObj[v.name] = v.input;
                    })
                    this.$emit('output', myObj)
                },
                deep: true
    
            }
        },
        created() {
            if (this.form) {
               if (this.form.fields) {
                    this.form.fields.forEach(f => {
                        Vue.set(f, 'input', '');
                    });
                } else {
                    console.log('fields is empty form component FormInput');
                }
            }
        }
    }
</script>

