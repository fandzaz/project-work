<template>
  <div class="hello font-size-main">
   
    <nav-title  title="MASTER PROTOTYPE"></nav-title>
    <div class="card-body">
      <div class="">
        <div class="row ">
          <div class="col-xl-11 col-lg-11 pr-0">
            <div class="tabbable " >
              <ul class="nav nav-tabs  " id="myTab" role="tablist" ref="content">
  
                <li class="nav-item m-0 shadow-sm">
  
                  <a class="nav-link  active " id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><b>Example Tabs</b></a>
                </li>
  
                <li class="nav-item m-0 shadow-sm" v-for="(n,key) in 14" :key="key">
                  <a class="nav-link " id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><b><i class="fa fa-lock" aria-hidden="true"></i> Example Tabs</b></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-1 col-lg-1 text-center  main-bg   p-2 text-white" >
            <i class="fa fa-arrow-left  point-click" @click="swipeLeft()" aria-hidden="true"></i>
            <i class="fa fa-arrow-right ml-3 point-click" @click="swipeRight()"  aria-hidden="true"></i>
          </div>
        </div>
  
        <div class="tab-content  pt-0 mb-5" id="myTabContent">
          <div class="tab-pane fade show active " id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="">
              <div class="row ">
                <div class="col-xl-6 col-lg-6 mt-3" v-for="(n,key) in 5" :key="key">
                  <div class="header ">
                    Genaral Info {{key+1}}
                  </div>
                  <div class="linex"></div>
                  <div class="shadow-sm bg-white">
  
                    <div class="card-body">
  
                      <div class="row">
                        <div class="col-xl-4 col-lg-6">
                          <div class="form-group">
                            <label for="formGroupExampleInput"><b>Example label </b> </label>
                            <div class="input-group mb-3">
  
                              <div class="input-group-prepend">
                                <button class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModalLong" type="button" id="button-addon1"><i class="fa fa-file-text" aria-hidden="true"></i></button>
                              </div>
                              <input type="text" class="form-control border" placeholder="กรุณากรอกข้อมูล" aria-label="Example text with button addon" aria-describedby="button-addon1">
                            </div>
                          </div>
  
                        </div>
                        <div class="col-xl-4 col-lg-6">
                          <div class="form-group">
                            <label for="formGroupExampleInput" class="label-invalid "><b>Example label </b></label>
                            <input type="text" class="form-control is-invalid border" id="formGroupExampleInput" placeholder="กรุณากรอกข้อมูล">
                          </div>
                        </div>
                        <div class="col-xl-4 col-lg-6">
                          <div class="form-group">
                            <label for="formGroupExampleInput"><b>Example label </b></label>
                            <input type="text" class="form-control border" id="formGroupExampleInput" placeholder="กรุณากรอกข้อมูล">
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-6">
                          <div class="form-group">
                            <label for="formGroupExampleInput"><b>Example label </b></label>
                            <input type="text" class="form-control border" id="formGroupExampleInput" placeholder="กรุณากรอกข้อมูล">
                          </div>
                        </div>
                        <div class="col-xl-12 col-lg-6">
                          <div class="form-group">
                            <label for="formGroupExampleInput"><b>Example label </b></label>
                            <input type="text" disabled="true" class="form-control border" id="formGroupExampleInput" placeholder="กรุณากรอกข้อมูล">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
              </div>
  
              
  
            </div>
  
  
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="card-body">
              This is some text within a card body.2
            </div>
          </div>
          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <div class="card-body">
              This is some text within a card body.3
            </div>
          </div>
        </div>
  
  
      </div>
  
      <!-- <div class="header shadow-sm mt-3 top-rounded">
              Tables Info
            </div>
            <div class="linex"></div>
            <table class="table table-bordered bg-white  shadow-sm ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody class="text-secondary">
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table> -->
  
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
            <table class="table table-bordered table-sm shadow-lg text-center  bg-white  table-hover top-rounded">
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
  import NavTitle from '@/components/widget/NavTitle';
  export default {
    components:{
      NavTitle
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      scrollTo(element, scrollPixels, duration) {
        
        const scrollPos = element.scrollLeft;
        if (!((scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {
          const startTime =
            "now" in window.performance ?
            performance.now() :
            new Date().getTime();
  
          function scroll(timestamp) {
            const timeElapsed = timestamp - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            element.scrollLeft = scrollPos + scrollPixels * progress;
            if (timeElapsed < duration) {
              window.requestAnimationFrame(scroll);
            } else {
              return;
            }
          }
          window.requestAnimationFrame(scroll);
        }
      },
      swipeLeft() {
        const content = this.$refs.content;
  
        this.scrollTo(content, -300, 400);
      },
      swipeRight() {
        const content = this.$refs.content;
        this.scrollTo(content, 300, 400);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   ::-webkit-scrollbar {
    display: none;
  }
</style>
