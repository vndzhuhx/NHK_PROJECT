<template>
  <div id="page">
    <div id="confirm">
      <div class="header">
        <p id="p">代案比較画面</p>
        <div class="button-group">
          <el-button class="button1"><i class="el-icon-s-operation"> 条件变更</i></el-button>
          <el-button class="button1" @click="open"><i class="el-icon-reading"> 条件表示</i></el-button>
          <el-button><i class="el-icon-download"> 代案出力</i></el-button>
          <el-button><i class="el-icon-close"> 閉じる </i></el-button>

        </div>
      </div>
      <div class="top">
        <div class="contentItemA">
          　 <!--时间线-->
          <div class="body1">
            <div class="earliest">17:30</div><div class="divider"/>
            <div class="whole">18:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">19:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">20:00</div><div class="point"/>
            <div class="latest">20:30</div><div class="divider1"/>
            <div class="whole">21:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">22:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">23:00</div><div class="point"/>
          </div>

          <div class="num">
            <p id="p1">本案</p>
          </div>

          <div class="body2-outer" >
            <happy-scroll :min-length-h="5" size="14" left hide-horizontal>
              <div class="body2">
                <div class="current">
                  <el-col>
                    <el-row><el-card class="card1">17:30-19:10  100分</br>
                    </br>ブロ野球</br>「巨人」对「阪神」</br></br>1266-265</el-card></el-row>
                    <el-row><el-card class="card2">17:30-19:10  100分</br>
                    </br>ブロ野球1266-265</el-card></el-row>
                    <el-row><el-card class="card3">17:30-19:10  100分</br>
                    </br>ブロ野球1266-265</el-card></el-row>
                    <el-row><el-card class="card4">17:30-19:10  100分</br>
                    </br>ブロ野球1266-265</el-card></el-row>
                  </el-col>

                </div>

                <div class="outer">
                  <happy-scroll :min-length-h="250" :scroll-top.sync="scrollTop" :hide-vertical="true" size="12" top>
                    <div class="inner" >
                      <div class="p-replace">
                        <p v-for="item in items" id="p2">代案{{ item.message }}</p>
                      </div>
                      <div class="replace-div">
                        <el-card class="card5">17:40~19:20 100分</br>2019MLB</br>
                          ザ·ベストブレー</br>1359-470</el-card><el-card class="card6">2019MLB</br>
                            ザ·ベストブレー</el-card>
                        <el-card class="card7">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card8">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card9">2019MLB</br>
                          ザ·ベストブレー</el-card></div>
                      <div class="replace-div">
                        <el-card class="card5">17:40~19:20 100分</br>2019MLB</br>
                          ザ·ベストブレー</br>1359-470</el-card><el-card class="card6">
                            2019MLB</br>
                            ザ·ベストブレー</el-card>
                        <el-card class="card7">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card8">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card9">2019MLB</br>
                          ザ·ベストブレー</el-card></div>

                      <div class="replace-div">
                        <el-card class="card10">17:30-19:10  100分</br>
                        </br>ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card11">ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card12">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card13">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card14">ブロ野球</br>「巨人」对「阪神」 </el-card>
                      </div>
                      <div class="replace-div">
                        <el-card class="card10">17:30-19:10  100分</br>
                        </br>ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card11">ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card12">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card13">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card14">ブロ野球</br>「巨人」对「阪神」 </el-card>
                      </div>
                      <div class="replace-div">
                        <el-card class="card10">17:30-19:10  100分</br>
                        </br>ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card11">ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card12">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card13">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card14">ブロ野球</br>「巨人」对「阪神」 </el-card>
                      </div>

                    </div>
                  </happy-scroll>
                </div>
              </div>
            </happy-scroll>
          </div>
        </div>
      </div>
      <div class="bottom">

        <div class="contentItemA">
          　<div class="body1">
            <div class="earliest">17:30</div><div class="divider"/>
            <div class="whole">18:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">19:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">20:00</div><div class="point"/>
            <div class="latest">20:30</div><div class="divider1"/>
            <div class="whole">21:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">22:00</div><div class="point"/>
            <div class="normal"/>
            <div class="whole">23:00</div><div class="point"/>
          </div>

          <div class="body2-outer" >
            <happy-scroll :min-length-h="5" size="14" left hide-horizontal>
              <div class="body2">
                <div class="current">
                  <el-col>
                    <el-row><el-card class="card1">17:30-19:10  100分</br>
                    </br>ブロ野球</br>「巨人」对「阪神」</br></br>1266-265</el-card></el-row>
                    <el-row><el-card class="card2">17:30-19:10  100分</br>
                    </br>ブロ野球1266-265</el-card></el-row>
                    <el-row><el-card class="card3">17:30-19:10  100分</br>
                    </br>ブロ野球1266-265</el-card></el-row>
                    <el-row><el-card class="card4">17:30-19:10  100分</br>
                    </br>ブロ野球1266-265</el-card></el-row>
                  </el-col>

                </div>

                <div class="outer">
                  <happy-scroll :min-length-h="250" :scroll-top.sync="scrollTop" :hide-vertical="true" size="12" top>
                    <div class="inner" >

                      <div class="replace-div">
                        <el-card class="card5">17:40~19:20 100分</br>2019MLB</br>
                          ザ·ベストブレー</br>1359-470</el-card><el-card class="card6">2019MLB</br>
                            ザ·ベストブレー</el-card>
                        <el-card class="card7">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card8">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card9">2019MLB</br>
                          ザ·ベストブレー</el-card></div>
                      <div class="replace-div">
                        <el-card class="card5">17:40~19:20 100分</br>2019MLB</br>
                          ザ·ベストブレー</br>1359-470</el-card><el-card class="card6">
                            2019MLB</br>
                            ザ·ベストブレー</el-card>
                        <el-card class="card7">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card8">2019MLB</br>
                          ザ·ベストブレー</el-card>
                        <el-card class="card9">2019MLB</br>
                          ザ·ベストブレー</el-card></div>

                      <div class="replace-div">
                        <el-card class="card10">17:30-19:10  100分</br>
                        </br>ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card11">ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card12">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card13">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card14">ブロ野球</br>「巨人」对「阪神」 </el-card>
                      </div>
                      <div class="replace-div">
                        <el-card class="card10">17:30-19:10  100分</br>
                        </br>ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card11">ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card12">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card13">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card14">ブロ野球</br>「巨人」对「阪神」 </el-card>
                      </div>
                      <div class="replace-div">
                        <el-card class="card10">17:30-19:10  100分</br>
                        </br>ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card11">ブロ野球</br>「巨人」对「阪神」</el-card>
                        <el-card class="card12">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card13">ブロ野球</br>「巨人」对「阪神」 </el-card>
                        <el-card class="card14">ブロ野球</br>「巨人」对「阪神」 </el-card>
                      </div>

                    </div>
                  </happy-scroll>
                </div>
              </div>
            </happy-scroll>
          </div>
        </div>

      </div>

      <div v-show="sider" class="side">
        <el-button type="text" @click="close"><i class="el-icon-close closeicon"/></el-button>

        <div class="itemA" >
          <h5>代案A</h5>
          <hr>
          <div class="uldiv">
            <ul>
              <li class="line1">「ロジック基本情報」</li>
              <li>代案内容長：　XX　分</li>
            </ul>

            <ul>
              <li class="line1">「制限条件」</li>
              <li>放送可能時間以外措置番組数　　　　　　２</li>
              <li>放送回数上限の措置番組数</li>
            </ul>
            <ul>
              <li class="line1">「判断条件」</li>
              <li>重みのH/M/Lの元番組数　　　　　　　2/1/1</li>
              <li>重みのH/M/Lの措置番組数　　　　　　3/5/4</li>
            </ul>

            <ul class="colorred">
              <li>重み優先パタン</li>
              <li>同じレベル元番組優先</li>
            </ul>
          </div>
        </div>
        <div class="itemA">
          <h5>代案B</h5>
          <hr>
          <div class="uldiv">
            <ul>
              <li class="line1">「ロジック基本情報」</li>
              <li>代案内容長：　XX　分</li>
            </ul>

            <ul>
              <li class="line1">「制限条件</li>
              <li>放送可能時間以外措置番組数　　　　　　２</li>
              <li>放送回数上限の措置番組数</li>
            </ul>
            <ul>
              <li class="line1">「判断条件」</li>
              <li>重みのH/M/Lの元番組数　　　　2/1/1</li>
              <li>重みのH/M/Lの措置番組数　　　3/5/4</li>
            </ul>

            <ul class="colorred">
              <li>重み優先パタン</li>
              <li>同じレベル元番組優先</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return { items: [
      { message: '1' },
      { message: '2' },
      { message: '3' },
      { message: '4' },
      { message: '5' },
      { message: '6' }
    ],
    scrollTop: -100,
    sider: false
    }
  },
  methods: {
    open() {
      this.sider = !this.sider
    },
    close() {
      this.sider = false
    }
  }

}

</script>

<style scoped>

  .top{
    top:30px;
    width:100%;
    height:400px;
    overflow:hidden;
    position:relative;
    overflow-x:hidden;
    border-bottom:1px solid #ccc;

  }
  .bottom{
    width:100%;
    height:400px;
    margin-top:40px;
    position:relative;
    overflow:hidden;
  }
  .side{
    float:right;
    width:300px;
    height:1100px;
    position:fixed;
    right:0px;
    top:100px;
    background-color:white;
    z-index:999;
  }

 .outer{
  width:1200px;
  height:1750px;
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
  width:600px;
  height:60px;
  left:64%;
  top:50%;
}

.button-group>>>.button1{
  color:white;
  background-color:RGB(59,108,240);
}

.inner{
  width:2700px;
  float:left;
  position:relative;
  left:0%;
  top:0;
  background-color:RGB(239,239,239);
}
.inner>>>.p-replace{
  width:2700px;
  height:65px;
  background:RGB(248,248,248);
}

.current{
  width:195px;
  height:100%;
  float:left;
  position:absolute;
  left:6%;
  z-index:1;
  top:66px;
}

.num #p1{
  position:absolute;
  width:15%;
  left:8%;
  top:10%;
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
  position:relative;
  top:20px;
  left:0%;
  top:0;
}

.body2-outer{
  width:100%;
  height:750px;
  position:relative;
  left:0%;
  margin-top:21px;

}

.body1{
  width:100%;
  height:100%;
  position:absolute;
  top:100px;
  z-index:0;
}

.divider{
  border-top:1px dashed red;
  height: 1px;
  overflow:hidden;
  width:94%;
  position:relative;
  left:6%;
  height:1px;
  }

.divider1{
  border-top:1px dashed red;
  height: 1px;
  overflow:hidden;
  width:94%;
  position:relative;
  left:6%;
  margin-top:40px;
  z-index:4;
}

.point{
  border-top:1px dashed grey;
  height: 1px;
  overflow:hidden;
  width:91%;
  position:relative;
  left:9%;
  margin-top:60px;
  height:2px;
}
.earliest{
  width:45px;
  height:16px;
  border-radius:15px;
  background-color:RGB(235,90,91);
  color:white;
  position:relative;
  top:8px;
  left:50px;

}

.latest{
  width:45px;
  height:16px;
  border-radius:15px;
  background-color:RGB(235,90,91);
  color:white;
  position:relative;
  top:50px;
  left:50px;
}

.normal{
  border-top:1px dashed grey;
  height: 1px;
  overflow:hidden;
  width:94%;
  position:relative;
  left:6%;
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

  .closeicon{
     display:block;
     position:absolute;
     top:3px;
     left:5px;
  }

  h5{
    display:block;
    margin-top:-30px;
    line-height:20px;
  }
  hr{
    color:gray;
    margin-bottom:20px;
    margin-top:-10px;
    margin-left:5px;
    border:1px solid #ccc;
  }
  .itemA{
    margin-top:40px;
    margin-left:10px;
    margin-right:20px;
    text-align:left;
  }
  .uldiv{
  }
  ul{
    display:block;
    margin-top:-10px;
  }

  ul li{
    display:block;
    margin-left:-30px;
    list-style-type:none;
    line-height:17px;
    font-size:13px;
    text-align:left;
  }

  .line1{
    font-weight:bolder;
  }
  .colorred{
    color:red;
  }
</style>
