<template>
  <div id="confirm">
    <div class="header">
      <p id="p">検証確認画面</p>
      <div class="button-group">
      <router-link to="/replace_generate"><el-button class="button1"><i class="el-icon-s-operation"> 条件变更</i></el-button></router-link>
       <router-link to="replace_compare"> <el-button class="button1"><i class="el-icon-reading"> 代案比较</i></el-button></router-link>
        <el-button><i class="el-icon-download"> 代案出力</i></el-button>
        <el-button><i class="el-icon-close"> 閉じる</i></el-button>
      </div>
    </div>


      <div class="body2-outer" >
        <happy-scroll  size="12" left>
          <div class="body2">
            <div class="earliest">17:30</div>
            <div class="earliest-tag tag-font">最早终了</div>
            <div class="divider"></div>

            <div class="latest">20:30</div>
              <div class="e-tag tag-font">最迟终了</div>
            <div class="divider1"></div>
              <!--时间线-->
                <div class="body1">
                  <div class="whole">18:00</div><div class="point"></div>
                  <div class="normal"></div>
                  <div class="whole">19:00</div><div class="point"></div>
                  <div class="normal"></div>
                  <div class="whole">20:00</div><div class="point"></div>
                  <div class="abnormal"></div>
                  <div class="whole">21:00</div><div class="point"></div>
                  <div class="normal"></div>
                  <div class="whole">22:00</div><div class="point"></div>
                  <div class="normal"></div>
                  <div class="whole">23:00</div><div class="point"></div>
                </div>



            <div class="num">
              <p id="p1">本案</p>
          </div>

         <div class="current">
        <el-col>
          <el-row v-for="item in this.showCurrentData" :key="item.contentDuration">
            <el-card class="card1">
              {{item.playTime}}  {{item.contentDuration}}<br>
              <br>
              {{item.programName}}<br>
              <br>
              {{item.programNumber}}
            </el-card>
          </el-row>
        </el-col>

        </div>


      <div class="outer">
      <happy-scroll size="12" :min-length-h="250"  :scroll-top.sync="scrollTop" top hide-vertical>
        <div class="inner" >
          <div class="p-replace">
            <p v-for="item in items" id="p2">代案{{item.message}}</p>
          </div>

          <div class="in-outer">
           <happy-scroll size="12" :min-length-h="250"  :scroll-top.sync="scrollTop" left hide-horizontal >
          <div class="inner-bottom">

            <div class="replace-div" v-for="item in this.showBackupData" :key="item.backupNumber">
              <el-card class="card5" v-for="list in item.backup" :key="list.contentDuration">
                {{list.playTime}} {{list.contentDuration}}<br>
                {{list.programName}}<br>
                {{list.programNumber}}
              </el-card>
            </div>
          </div>
        </happy-scroll>
      </div>
        
  </div>
</happy-scroll>
</div>

    </div>
      </happy-scroll>
    </div>

  </div>
</template>
<script>
import { verification } from '@/api/verificationApi';
  export default {
    data:function(){
      return {items:[
        {message:'1'},
        {message:'2'},
        {message:'3'},
        {message:'4'},
        {message:'5'},
        {message:'6'},
      ],
      showBackupData: [],
      showCurrentData: [],
      scrollTop:-100,
    }
    },
    methods:{
        init(){
          verification().then(response =>{
            var jsonData = JSON.parse(response.data[0].verification);
            this.showBackupData = jsonData.showBackupData;
            this.showCurrentData = jsonData.showCurrentData;
            console.log(jsonData)
          });
        }
    },
    mounted () {
      this.init();
    }
  }

</script>

<style>

  body{
    background-color:RGB(248,248,248);
  }

</style>

<style scoped>

@import "../assets/css/font.css";

.outer{
  width:1200px;
  height:750px;
  position:relative;
  left:13%;
  margin-top:10px;

}
#confirm{
  width:1583px;
  height:100%;
}

.header{
  height:30px;
  font-size:22px;
  width:100%;
}

.header #p{
  width:200px;
  position:absolute;
  left:80px;
}

.button-group{
  position:relative;
  width:500px;
  height:60px;
  left:64%;
  top:50%;
}

.in-outer{
  position:absolute;
  width:1200px;
  height:700px;
  position:absolute;
  top:44px;
}
.inner-bottom{
  width:2700px;
  height:1700px;
  margin-top:0px;
  position:relative;
}

.button-group>>>.button1{
  color:white;
  background-color:RGB(59,108,240);
}

.inner{
  width:2700px;
  height:750px;
  float:left;
  position:relative;
  left:0%;
  top:0;
  background-color:RGB(239,239,239);
}
.inner>>>.p-replace{
  width:2700px;
  height:44px;
  background:RGB(248,248,248);
  position:absolute;
}


.current{
  width:185px;
  height:100%;
  float:left;
  position:absolute;
  left:6%;
  z-index:1;
  top:70px;
}

.num>>> #p1{
  position:absolute;
  left:9%;
  top:2%;
}

.inner #p2{
  position:relative;
  width:200px;
  left:20px;
  float:left;
  margin-top:24px;
}

.body2{
  width:2700px;
  height:1700px;
  float:left;
  position:relative;
  left:0%;
  top:0px;
}


.body2-outer{
  width:100%;
  height:1000px;
  position:relative;
  left:0%;
  margin-top:21px;

}

.body1{
  width:100%;
  height:100%;
  position:absolute;
  top:68px;
  z-index:0;
}

.divider{
  border-top:1px dashed red;
  height: 1px;
  overflow:hidden;
  width:97%;
  position:absolute;
  left:3.5%;
  height:1px;
  top:4%;
  z-index:99;
  }

.divider1{
  border-top:1px dashed red;
  height: 1px;
  overflow:hidden;
  width:94%;
  position:absolute;
  left:3.5%;
  top:437px;
  z-index:99;
}

.earliest-tag{
  position:absolute;
  width:66px;
  height:16px;
  top:76px;
  left:50px;
  color:red;
  text-align:left;
}
.e-tag{
  position:absolute;
  width:66px;
  height:16px;
  top:445px;
  left:50px;
  color:red;
  text-align:left;
}
.point{
  border-top:1px dashed grey;
  height: 1px;
  overflow:hidden;
  width:91%;
  position:relative;
  left:5%;
  margin-top:60px;
  height:2px;
}
.earliest{
  width:45px;
  height:16px;
  border-radius:15px;
  background-color:RGB(235,90,91);
  color:white;
  position:absolute;
  top:60px;
  left:50px;

}

.latest{
  width:45px;
  height:16px;
  border-radius:15px;
  background-color:RGB(235,90,91);
  color:white;
  position:relative;
  top:430px;
  left:50px;
}

.normal{
  border-top:1px dashed grey;
  height: 1px;
  overflow:hidden;
  width:94%;
  position:relative;
  left:3%;
  margin-top:60px;
  height:2px;
}
.abnormal{
  border-top:1px dashed grey;
  height: 1px;
  overflow:hidden;
  width:1%;
  position:relative;
  left:10%;
  margin-top:60px;
  height:2px;
}

.whole{
  width:45px;
  height:0px;
  position:relative;
  left:80px;
  top:50px;
}
.card1{
  height:365px;
  text-align:left;
  border-bottom:4px solid RGB(240,149,187);
}
.card2{
  height:90px;
  border-bottom:4px solid RGB(94,186,159);
}

.card3{
  height:90px;
  border-bottom:4px solid RGB(251,232,169);
}
.card4{
  height:130px;
  border-bottom:4px solid RGB(138,138,138);
}

.replace-div{
  width:188px;
  height:660px;
  margin-left:10px;
  margin-right:10px;
  margin-top:0px;
  background-color:RGB(243,243,243);
  position:relative;
  float:left;
}

.card5{
  position:relative;
  top:20px;
  height:200px;
  border-bottom:4px solid RGB(94,183,155);
}
.card6{
  position:relative;
  height:150px;
  top:20px;
  border-bottom:4px solid RGB(129,157,247);
}
.card7{
  position:relative;
  height:90px;
  top:20px;
  border-bottom:4px solid RGB(251,233,169);
}
.card8{
  position:relative;
  height:120px;
  top:20px;
  border-bottom:4px solid RGB(136,136,136);
}
.card9{
  position:relative;
  height:95px;
  top:20px;
  border-bottom:4px solid RGB(235,158,132);
}
.card10{
  position:relative;
  height:195px;
  top:45px;
  border-bottom:4px solid RGB(94,183,155);
}
.card11{
  position:relative;
  height:130px;
  top:45px;
  border-bottom:4px solid RGB(129,157,247);
}
.card12{
  position:relative;
  height:90px;
  top:45px;
  border-bottom:4px solid RGB(251,233,169);
}
.card13{
  position:relative;
  height:120px;
  top:45px;
  border-bottom:4px solid RGB(136,136,136);
}
.card14{
  position:relative;
  height:95px;
  top:45px;
  border-bottom:4px solid RGB(235,158,132);
}
#scr1{
  position:relative;
  left:300px;
  width: 500px;
  height:15px;
  overflow-x: scroll;
  overflow-y: hidden;
}

</style>