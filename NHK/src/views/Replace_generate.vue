<template>
  <div id="rg">
    <div class="header">
      <p id="p" class="header-font">代案生成画面</p>
      <p id="username" class="header-font">NHK太郎</p>
    </div>

    <div class="left">
      <div class="left1">
        <el-table
          :data="tableData1"
          :header-cell-style="row"
          border

          class="table1 table-font">
          <el-table-column
            prop="moment"
            label="時刻"
            class="table1"/>
        </el-table>
      </div>
      <div class="left2">
        <el-table
          :data="tableData"
          :cell-style="cell"
          :header-cell-style="header2"
          border>
          <el-table-column
            prop="program"
            label="番組"
            width="306">
          <!--<template slot-scope="scoped">
            <div class="starttime">
              18:00
            </div>
          </template>-->
          </el-table-column>
          <el-table-column
            prop="contetntDuration"
            label="内容時間"
            width="107"/>
          <el-table-column
            prop="priority"
            label="重み"
            width="96"/>
          <el-table-column
            prop="live"
            label="生放送"
            width="93"/>
        </el-table>
      </div>
    </div>

    <div class="right">
      <div class="first">
        <el-form class="form1">
          <p id="p1" class="p-font">代案基本設定</p>
          <el-form-item label="早終延伸対象番組">
            <p id="p2" class="p-font">{{ this.genSetting.objectProgramName }}</p>
          </el-form-item>
          <el-form-item label="最早终了時刻">
            <el-input v-model="this.earlyTime[0]" placeholder="19"/> :
            <el-input v-model="this.earlyTime[1]" placeholder="00"/>
          </el-form-item>
          <el-form-item label="最遅終了時刻">
            <el-input v-model="this.latestTime[0]" placeholder="19"/> :
            <el-input v-model="this.latestTime[1]" placeholder="00"/>
          </el-form-item>
          <el-form-item label="早終延伸の刻み時間">
            <div class="input1">
              <el-input v-model="this.genSetting.unitTime" placeholder="10"/> 分
            </div>
          </el-form-item>
          <el-form-item label="代案範囲">
            <div class="input-group">
              <el-input v-model="this.behalf[0]" placeholder="18"/> :
              <el-input v-model="this.behalf[1]" placeholder="00"/> ~
              <el-input v-model="this.behalf[2]" placeholder="21"/> :
              <el-input v-model="this.behalf[3]" placeholder="20"/>
            </div>
          </el-form-item>

        </el-form>
      </div>

      <div class="second">
        <p id="p3" class="p-font">代案生成条件确定</p>
        <el-button class="button1">履歴から条件設定</el-button>
        <p id="p4" class="p-font">v1.03の条件を設定しました</p>
        <el-divider/>
        <div class="select">
          <el-button class="button2">措置番組選定</el-button>
          <p id="p5" class="p-font"><span id="sp">3</span>
          <span id="sp1" class="p-font">個措置番組を選定しました</span></p>
        </div>
        <el-radio-group v-model="radio" >
          <div class="ra1"><el-radio :label="1" class="p-font">元番組の重み優先</el-radio></div>
          <div class="ra2"><el-radio :label="2" class="p-font">同じレベルで元番組の重み優先</el-radio></div>
          <div class="ra3"><el-radio :label="3" class="p-font">措置番組の重み優先</el-radio></div>
          <div class="ra4"><el-radio :label="4" class="p-font">同じレベルで措置番組の重み優先</el-radio></div>
        </el-radio-group>
      </div>

      <div class="third">
        <p id="p6" class="p-font">代案自动生成</p>
        <el-form class="form2 p-font">
          <el-form-item label="生成バージョン">
            <select id="format"class="p-font" >
              <option>v1.0.1</option>
              <option>v1.0.2</option>
            </select>
          </el-form-item >
          <el-form-item label="コメント（任意）">
            <el-input
              :rows="3"
              type="textarea"
            />
          </el-form-item >
          <router-link to="/inspection_confirm"><el-button id="button1" class="button-font">代案表自动生成</el-button></router-link>
          <p id="p7" class="p-font"> ※自動生成すると</br>
            対象番組の設定、措置番組、生成された代案表</br>
            を履歴として保存します</p>
        </el-form>
      </div>

    </div>

  </div>
</template>

<script>
import { initData } from '@/api/generateApi'
export default {
  data() {
    return {
      tableData1: [{
        moment: '18'
      }, {
        moment: '19'
      }, {
        moment: '20'
      }, {
        moment: '21'
      }, {
        moment: '22'
      }
      ],
      tableData: [],
      genSetting: [],
      earlyTime: [],
      latestTime: [],
      behalf: [],
      autoCreate: [],
      radio: 1
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    row(row, rowIndex) {
      return 'text-align:center;color:white;background-color:RGB(90,155,214);'
    }, header2(row, rowIndex) {
      return 'text-align:center;color:white;background-color:RGB(90,155,214);'
    },
    cell({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return 'height:650px;'
      } else if (rowIndex === 1) {
        if (columnIndex === 2 || columnIndex === 3) {
          return 'background-color:RGB(244,203,255);'
        }
        return 'height:30px;'
      } else if (rowIndex === 2 || rowIndex === 6) {
        if (columnIndex === 2) {
          return 'background-color:RGB(244,203,255);'
        }
        return 'height:15px'
      } else if (rowIndex === 3) {
        if (columnIndex === 2) {
          return 'background-color:RGB(255,243,204);padding:0'
        }
        return 'height:40px'
      } else if (rowIndex === 4) {
        if (columnIndex === 2) {
          return 'background-color:RGB(255,243,204)'
        }
        return 'height:55px;'
      } else if (rowIndex === 4) {
        if (columnIndex === 2) {
          return 'background-color:RGB(255,243,204)'
        }
        return 'height:50px;'
      } else if (rowIndex === 5) {
        if (columnIndex === 2) {
          return 'background-color:RGB(208,206,206)'
        }
        return 'height:55px;'
      }
    },
    init() {
      initData().then(response => {
        var _data = JSON.parse(response.data[0].generation)
        this.tableData = _data.showCurrentData
        this.genSetting = _data.basicCondition
        this.earlyTime = this.genSetting.earlyStartTime.split(':', 2)
        this.latestTime = this.genSetting.latestFinishTime.split(':', 2)
        this.behalf = this.genSetting.backupScope.replace('~', ':').split(':', 4)
        this.autoCreate = this.genSetting.autoCreate
        console.log(this.genSetting)
      })
    }
  }
}
</script>

<style scoped>
@import  "../assets/css/font.css";

#rg{
  width:1583px;
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

.header #username{
  width:200px;
  position:absolute;
  right:80px;
}

.left{
  height:100%;
  width:50%;
  float:left;
  position:relative;
  top:50px;
}

.table1{
  width:60px;
  height:100%;
}

.left1{
  width:12%;
  height:1050px;
  position:relative;
  left:8%;
  float:left;
}

.left2{
  position:relative;
  float:left;
  width:85%;
  height:100%;
  left:22px;
}

.table1>>>.el-table__row{
  height:200px;
  font:#000;
  background-color:RGB(243,243,242);
}

.el-table >>>td,
.el-table >>>th.is-leaf {
        border: 0.5px solid RGB(112,149,183);
}

.right{
  height:100%;
  width:50%;
  float:left;
  position:relative;
  top:50px;
}

.el-table{
  width:90%;
  position:relative;
  left:5%;
}

.first{
  width:86%;
  position:relative;
  left:7%;
  height:320px;
  border:2px solid RGB(154,194,230);
  border-radius:50px;
}

.first >>>#p1{
  width:150px;
  position:relative;
  top:10%;
  color:RGB(90,155,214);
}

.el-form-item >>>#p2 {
    line-height: 1px;
    position: relative;
    font-size: 18px;
    color:RGB(238,125,50);
}

.el-form-item>>>.el-form-item__label{
  position:relative;
  left:130px;
}

.el-form-item>>>.el-input{
  width:50px;
}

.el-form-item>>>.el-input__inner{
  width:50px;
  border:1px solid RGB(69,116,158);
}

.input1{
  position:relative;
  left:18px;
}

.input-group{
  position:relative;
  left:78px;
}

.el-form-item{
  margin:10px;
}

.second{
  width:86%;
  position:relative;
  top:5px;
  left:7%;
  height:400px;
  border:2px solid RGB(154,194,230);
  border-radius:50px;
}

.second >>>#p3{
  width:150px;
  position:relative;
  left:20px;
  top:3%;
  color:RGB(90,155,214);
}

.second >>>.button1{
  position:relative;
  top:15px;
  left:-230px;
  color:white;
  background-color:RGB(90,155,214);
  border:1px solid RGB(65,113,156);
}

.second >>>#p4{
  position:relative;
  top:15px;
  left:-210px;
}

.select>>>.button2{
  width:154px;
  position:relative;
  left:-230px;
  color:white;
  background-color:RGB(90,155,214);
  border:1px solid RGB(65,113,156);
}

.select>>>#p5{
  width:300px;
  position:relative;
  left:30%;
  top:-40px;
}
.select>>>#sp{
  font-weight:bold;
}
.select>>>#sp1{
  position:relative;
  left:20px;
}

.ra1{
  position:relative;
  top:-30px;
  right:103%;
}
.ra2{
  position:relative;
  margin-top:-15px;
  right:85%;
}
.ra3{
  position:relative;
  margin-top:15px;
  right:100%;
}
.ra4{
  position:relative;
  margin-top:15px;
  right:82%;
}

.third{
  width:86%;
  position:relative;
  top:10px;
  left:7%;
  height:350px;
  border:2px solid RGB(154,194,230);
  border-radius:50px;
}

.third>>>#p6{
  width:150px;
  position:relative;
  left:20px;
  top:3%;
  color:RGB(90,155,214);
}

.third>>>.el-form-item__label{
  position:relative;
  left:80px;
}

.third>>>#format{
  width:220px;
  height:30px;
  border:1px solid RGB(90,155,214);
}

.form2>>>.el-textarea__inner{
  width:300px;
  position:relative;
  left:41%;
  top:-30px;

}

.form2>>>#button1{
  position:relative;
  top:-20px;
  left:2%;
  color:white;
  background-color:RGB(90,155,214);
  border:1px solid RGB(65,113,156);
}

.form2>>>#p7{
  width:320px;
  font-size:14px;
  position:relative;
  text-align:left;
  left:41%;
  top:-20px;
  line-height:25px;
}

.el-table >>>.cell {
  text-align:center;
}

.el-table.starttime{

  position:relative;
  top:0px;
  left:0px;
  width:100px;
  height:80px;
  background-color:blue;
  color:white;

}

.el-table--border{
  border-bottom:1px solid RGB(112,149,183);

}

</style>
