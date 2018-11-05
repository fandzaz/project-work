<template>
    <div class="sticky-top">
        <nav class="navbar navbar-expand-lg shadow-sm navbar-light bg-white ">
            <div class="container-fluid">
                <span class="p-0"><img src="@/assets/func.png" width="30px" alt=""> {{header}}</span>
    
                <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                      <i class="fas fa-align-justify"></i>
                                                  </button>
    
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="nav navbar-nav ml-auto">
                        <li class="nav-item ml-1">
                            <button type="button" class="btn btn-danger btn-sm  text-white" @click="clickError"> Example button</button>
    
                        </li>
                        <li class="nav-item ml-1">
                            <button type="button" class="btn btn-warning btn-sm   text-white" @click="info"> Example button</button>
    
                        </li>
    
                        <li class="nav-item ml-1">
                            <button type="button" class="btn btn-primary btn-sm text-white " @click="save"><i class="fa fa-floppy-o fa-lg" aria-hidden="true"></i> SAVE</button>
    
                        </li>
    
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueSweetalert2 from 'vue-sweetalert2';
    Vue.use(VueSweetalert2);
    export default {
        name: 'nav-title',
        props: {
            title: {
                type:String,
                default:'Default Title'
            },
            data:{
                type:Object,
                default:null
            },
           
        },
        data(){
            return {
                header:this.title,
            }
        },
        created(){
            
        },
       
        methods: {
            clickError() {
                this.$swal({
                    type: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            },
            info() {
                this.$swal(
                    'The Internet?',
                    'That thing is still around?',
                    'question'
                )
            },
            save() {
                this.$swal({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, Save it!'
                }).then((result) => {
                    console.log(this.data);
                })
            }
        }
    }
</script>

<style scoped>
    nav-title {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1020;
    }
</style>


