<template>
  <div id="page">
    <div class="header">
      <p id="p" class="header-font">代案一覧画面</p>
      <p id="username" class="header-font">NHK太郎</p>
    </div>

    <div class="search">
      <el-upload
        ref="upload"
        :file-list="fileList"
        :auto-upload="false"
        :on-change="handleChange"
        :limit="1"
        :show-file-list="false"
        class="upload-demo"
        action="alert"
      >
        <el-button type="primary" class="button1 button-font">番組表データ読み込み</el-button>
      </el-upload>
      <el-form ref="form" :model="form">
        <el-form-item>
          <el-input v-model="form.input" placeholder="番組名、バージョン、コメント"/>
          <el-button class="button2 button-font" @click="onSubmit">検索</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="pmlist">
      <el-table
        :data="tableData"
        :header-cell-style="row"
        :span-method="objectSpanMethod"
        :row-class-name="tableRowClassName"
        border
        style="width: 90%"
        class="table-font"
      >
        <el-table-column prop="choice" label="選択" min-width="5%">
          <template slot-scope="scoped">
            <el-checkbox id="box"/>
          </template>
        </el-table-column>
        <el-table-column prop="substitution.inputTime" label="読み込み日時" min-width="10%"/>
        <el-table-column prop="substitution.programmeFile" label="番組表ファイル" min-width="20%"/>
        <el-table-column prop="substitution.backupNumber" label="代案番号" min-width="8%"/>
        <el-table-column prop="substitution.backupCreateTime" label="代案生成日時" min-width="10%"/>
        <el-table-column prop="substitution.logicVersion" label="ロジックバージョン" min-width="8%"/>
        <el-table-column prop="substitution.objectProgramName" label="早終延伸对象番組名" min-width="10%"/>
        <el-table-column prop="substitution.backupScope" label="代案範囲" min-width="10%"/>
        <el-table-column prop="substitution.comment" label="コメント" min-width="14%"/>
      </el-table>
    </div>
    <div class="button-group1">
      <el-button class="button3 button-font">代表案削除</el-button>
      <router-link to="/replace_generate">
        <el-button class="button4 button-font" @click="generateClass()">代案生成</el-button>
      </router-link>
      <router-link to="/replace_generate">
        <el-button class="button5 button-font">条件变更再生成</el-button>
      </router-link>
      <el-button class="button6 button-font">结果参照</el-button>
    </div>
  </div>
</template>

<script>
import { substitution } from '@/api/menuApi'
import {
  saveAll,
  saveSub,
  find,
  saveCase1,
  saveCase2,
  saveCase3
} from '@/api/substitutionApi'
export default {
  data() {
    return {
      form: {
        input: ''
      },
      tableData: [],
      fileList: [],
      uploadFiles: [],
      jsondata: [],
      backupShowData: {
        choice: 0,
        inputTime: '',
        programmeFile: '',
        backupNumber: '',
        backupCreateTime: '',
        logicVersion: '',
        objectProgramName: '',
        backupScope: '',
        comment: ''
      },
      alterNative: [],
      theCase: []
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    row(row, rowIndex) {
      return 'background-color:RGB(91,155,213);color:white;text-align:center;'
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 === 0) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 1 || columnIndex === 2) {
        if (rowIndex === 0) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex === 1) {
          return {
            rowspan: 4,
            colspan: 1
          }
        } else if (rowIndex === 5) {
          return {
            rowspan: 1,
            colspan: 1
          }
        } else if (rowIndex === 6) {
          return {
            rowspan: 2,
            colspan: 1
          }
        } else if (rowIndex === 8) {
          return {
            rowspan: 3,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    // 初始化数据
    init() {
      if (this.$route.params.subData) {
        var data = this.$route.params.subData[0].substitution
        this.tableData = JSON.parse(data).backupShowData
      } else {
        this.upload()
      }
    },
    upload() {
      find().then(response => {
        this.tableData = response.data
      })
    },
    // 格式化日期
    date() {
      var day2 = new Date()
      day2.setTime(day2.getTime())
      var hours = day2.getHours()
      var minutes = day2.getMinutes()
      var seconds = day2.getSeconds()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
      if (seconds < 10) {
        seconds = '0' + seconds
      }
      var s2 =
        day2.getFullYear() +
        '/' +
        (day2.getMonth() + 1) +
        '/' +
        day2.getDate() +
        ' ' +
        hours +
        ':' +
        minutes +
        ':' +
        seconds
      return s2
    },
    // 分析数据重建可利用数据
    analysis(param) {
      var arr = param.hensei
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].anshubetsu === '0') {
          this.theCase.push(arr[i])
        } else if (arr[i].anshubetsu === '1') {
          this.jsondata.push(arr[i])
        } else if (arr[i].anshubetsu === '2') {
          this.alterNative.push(arr[i])
        }
      }
      saveCase1(this.theCase).then(response => {
        console.log(response)
      })
      saveCase2(this.jsondata).then(response => {
        console.log(response)
      })
      saveCase3(this.alterNative).then(response => {
        console.log(response)
      })
    },
    // 创建一览数据
    subsMethod(nowTime, filename) {
      this.backupShowData.inputTime = nowTime
      this.backupShowData.programmeFile = filename
      saveSub(this.backupShowData).then(response => {
        console.log(response)
      })
    },
    // 上传文件
    handleChange(file, fileLists) {
      this.fileList = []
      var nowTime = this.date()
      this.uploadFiles = fileLists
      if (this.uploadFiles) {
        for (let i = 0; i < this.uploadFiles.length; i++) {
          const file = this.uploadFiles[i]
          if (!file) continue
          const reader = new FileReader()
          reader.onload = async e => {
            try {
              var data = e.target.result
              var filename = file.name
              if (filename.indexOf('.xlsx') != -1) {
                wb = XLSX.read(data, {
                  type: 'binary'
                })
                const data1 = JSON.stringify(
                  XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
                )
                console.log(data1)
              } else if (filename.indexOf('.json') != -1) {
                const doc = JSON.parse(data)
                saveAll(doc).then(response => {
                  console.log(response)
                })
                this.subsMethod(nowTime, filename)
                this.analysis(doc)
                this.upload()
              }
            } catch (err) {
              console.log(err)
            }
          }
          reader.readAsText(file.raw)
        }
      }
    }
    // importf(obj) {
    //   if (!obj.files) {
    //     return;
    //   }
    //   var f = obj.files[0];
    //   console.log(f);
    //   var reader = new FileReader();
    //   reader.onload = function (e) {
    //     var data = e.target.result;
    //     if (rABS) {
    //       wb = XLSX.read(btoa(fixdata(data)), {
    //         type: "base64"
    //       });
    //     } else {
    //       wb = XLSX.read(data, {
    //         type: "binary"
    //       });
    //     }
    //     let data1 = JSON.stringify(
    //       XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
    //     );
    //   };
    //   if (rABS) {
    //     reader.readAsArrayBuffer(f);
    //   } else {
    //     reader.readAsBinaryString(f);
    //   }
    // }
  }
}
</script>

<style scoped>
@import "../assets/css/replace_show.css";
@import "../assets/css/font.css";
</style>
