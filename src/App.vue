<template>
    <div id="app">
    
        <div class="wrapper">
            <!-- Sidebar  -->
            <nav id="sidebar">
                <div class="sidebar-header shadow">
                    <h4><img src="@/assets/logo.png" width="40px" alt=""> Prototype</h4>
    
                </div>
    
                <ul class="list-unstyled mt-3">
                    <div class="input-group p-1 ">
                        <input type="text" class="form-control" v-model="searchQuery" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                    </div>
                    <li v-if="listMenu.length != 0" v-for="(m,key) in filteredMenu" :key="key" class="font-size-main">
                        <a :href="'#homeSubmenu'+key" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">
                            <img :src="m.icon" width="25px" alt=""> 
                             <!-- <img src="./assets/module.png" width="25px" alt="">  -->
                            {{m.name}}
                        </a>
                        <ul class="collapse list-unstyled" :id="'homeSubmenu'+key">
                            <li v-for="(s,skey) in m.sub" :key="skey">
                                <router-link :to="s.to">{{s.name}}</router-link>
                                
                            </li>
    
    
                        </ul>
                    </li>
    
    
    
                </ul>
    
    
            </nav>
    
            <!-- Page Content  -->
            <div id="content">
                <router-view/>
            </div>
        </div>
    
    </div>
</template>

<script>
    import $ from 'jquery';
    $(document).ready(function() {
        $('#sidebarCollapse').on('click', function() {
            $('#sidebar').toggleClass('active');
        });
    });
    export default {
        name: 'App',
        computed: {
            filteredMenu() {
                if(this.listMenu.length != 0){
                    var x = this.listMenu.filter((menu) => {
                        return menu.sub.some((item) => {
                            return item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
                        });
                    });
                    return x;
                }else{
                    return [];
                }
            }
        },
        created(){
            console.log('2')
        },
        data() {
            return {
                searchQuery: '',
                listMenu: [{
                        name: 'Module MM',icon:'./src/assets/module.png',
                        sub: [
                            {name:'Master Prototype',to:'/MM/MASTER'},
                            {name:'Transection Prototype',to:'/MM/TRANSECTION'},
                            {name:'Test',to:'/MM/Test'},
                           
                        ]
                    },
                    {
                        name: 'Module SD',icon:'/module.png',
                        sub: [
                           {name:'SD 1',to:'/MM/MASTER'},
                           {name:'SD 2',to:'/'},
                        ]
                    },
                     {
                        name: '@DEV',icon:'/dev.png',
                        sub: [
                           {name:'API',to:'/'},
                           {name:'Component',to:'/'},
                        ]
                    },
                ]
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
</style>
