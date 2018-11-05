<template>
    <div>
        <!-- <div class="header shadow-sm mt-3 font-size-main">
            Tables Info
        </div> -->
        <div class="linex"></div>
    
        <div class="table-responsive ">
            <table class="table table-bordered table-sm  shadow-sm text-center ">
    
                <thead>
    
                    <tr class="shadow-sm text-main bg-white ">
                        <th scope="col" class="nowrap " v-for="(n,key) in col" :key="key"><b>Example header</b> </th>
    
                    </tr>
                </thead>
                <tbody class=" text-secondary ">
                    <tr class="bg-light" v-if="input">
    
                        <td v-for="(n,key) in col" :key="key"><input type="text" class="form-control form-control-sm border" value="" placeholder="กรุณากรอกข้อมูล"></td>
    
                    </tr>
                    <tr v-for="(n,key) in row" :key="key" class="bg-white">
                        <th scope="row">{{key+1}}</th>
                        <td class="nowrap">2000</td>
                        <td class="nowrap">บ. วาโก้ศรีราชา จำกัด </td>
                        <td class="nowrap">200</td>
                        <td class="nowrap">E0.0</td>
                        <td class="nowrap">รายละเอียด</td>
                        <td class="nowrap">รายละเอียด</td>
                        <td class="nowrap">รายละเอียด</td>
                        <td class="nowrap">รายละเอียด</td>
                        <td class="nowrap">รายละเอียด</td>
                    </tr>
    
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name:'table-data',
    props:{
        input:Boolean,
        row:Number,
        col:Number
    }
}
</script>
<style scoped>
    .nowrap {
        white-space: nowrap;
    }
    ::-webkit-scrollbar {
        height: 5px !important;
    
    }

/* Track */
::-webkit-scrollbar-track {
    background: #FFFFFF; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
thead th {
    font-size: 14px;
}
tbody td{
    font-size: 13px !important;
}
</style>

