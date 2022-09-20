<template>
  <div class="chuangkou">
    <ul>
        <li v-for="item in tian" :key="item.index">
            <p>{{item.value}}</p>
            <van-row class="row3">
                <van-col span="19">{{item.numer}}票</van-col>
                <van-col ref="zhuangtai"  span="5">
                    <van-icon name="circle" style="background: green;border-radius: 50%;" v-if="item.zhuangtai ==='进行中'" />
                    <van-icon name="circle" style="background: blue;border-radius: 50%;" v-if="item.zhuangtai ==='已通过'"/>
                    <van-icon name="circle" style="background: red;border-radius: 50%;" v-if="item.zhuangtai ==='未通过'"/>


                    {{item.zhuangtai}}
                    
                    
                </van-col>

            </van-row>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
name:'chuangkou',
data(){
    return{
        tian:[
            {value:'将提交门槛提升',numer:'1000',zhuangtai:'进行中'},
            {value:'创建一个新的农场——抵押赚取NFT',numer:'100',zhuangtai:'已通过'},
            {value:'帮助vtom项目',numer:'800',zhuangtai:'未通过'}
        ]
    }
},
mounted(){
    // this.$refs.zhuangtai.forEach(item => {
    //     console.log(item.$el.innerText)
    //     switch (item.$el.innerText){
    //         case '进行中':
            
    //     }
    // });
}


}
</script>

<style>

</style>