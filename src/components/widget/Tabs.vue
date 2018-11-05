<template>
    <div class="container-fluid">
        <div >
            <div class="row flex-nowrap">
          <div class="col-xl-11 col-lg-11 pr-0">
            <div class="tabbable font-size-main" >
              <ul class="nav nav-tabs  " id="myTab" role="tablist" ref="content">
  
               
  
                <li class="nav-item m-0 shadow-sm" v-for="(t,key) in tabs" :key="key">
                  <a :class="'nav-link '+ (key == 0 ? 'active':'') " id="contact-tab" data-toggle="tab" :href="'#' +name+key " role="tab" aria-controls="contact" aria-selected="false">
                    <b>
                      <!-- <i class="fa fa-lock" aria-hidden="true"></i>  -->
                      {{t.name}}
                    </b>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 text-center pl-0 text-white" >
              <div class="main-bg h-100 shadow-sm ">
                    <i class="fa fa-arrow-left mt-2 point-click"  @click="swipeLeft()" aria-hidden="true"></i>
                     <i class="fa fa-arrow-right mt-2 ml-3 point-click" @click="swipeRight()"  aria-hidden="true"></i>
              </div>
             
                  
             
           
          </div>
        </div>
        </div>
         <!-- <div class="tab-content  pt-0 mb-5" id="myTabContent">
            <div v-for="(n,key) in tabs.length" :key="key" :class="'tab-pane fade show '+(key == 0 ? 'active':'')  " :id="'t'+key" role="tabpanel" aria-labelledby="home-tab">
              Tab {{key}}
            </div>
         </div> -->
    </div>
</template>
<script>
export default {
    name:'tabs',
    props:{
      name:String,
      tabs:Array
    }
}
</script>
<style scoped>
    ::-webkit-scrollbar {
    display: none;
}
.triangle-bottomright {
      height: 5px;
      border-bottom: 100px solid red;
      border-left: 100px solid transparent;
    }
    .parallelogram {
      width: 80px;
      height: 45px;
      transform: skew(-20deg);
      background: white;
    }
</style>


