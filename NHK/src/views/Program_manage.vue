<template>
  <div id="manage">
    <div class="header">
      <p id="p" class="header-font">措置番組管理画面</p>
      <p id="username" class="header-font">NHK太郎</p>
    </div>

    <div class="button-group1">
      <el-button type="primary" class="button1 button-font">履歴から選択</el-button>
      <img src="/static/img/logo.png">
      <el-button type="primary" class="button2 button-font" @click="small = true">絞り込み選択</el-button>
    </div>

    <el-dialog
      :visible.sync="small"
      title="絞り込み選択"
      width="30%"
      center
    >
      <el-form
        ref="addForm"
        :model="reduceForm"
        label-width="130px">
        <el-form-item label="番組名：">
          <el-input v-model="reduceForm.programName"/>
        </el-form-item>
        <el-form-item label="放送可能区間：">
          <el-input v-model="reduceForm.enablePlayTime1" class="longInput"/> ：
          <el-input v-model="reduceForm.enablePlayTime2" class="longInput"/> ~
        </el-form-item>
        <el-form-item label="放送推奨：">
          <el-input v-model="reduceForm.playRecommend1" class="shortInput"/> ：
          <el-input v-model="reduceForm.playRecommend2" class="shortInput"/> ~
          <el-input v-model="reduceForm.playRecommend3" class="shortInput"/> ：
          <el-input v-model="reduceForm.playRecommend4" class="shortInput"/>
        </el-form-item>
        <el-form-item label="内容時間：">
          <el-input v-model="reduceForm.contentDuration1" class="longInput"/> ：
          <el-input v-model="reduceForm.contentDuration2" class="longInput"/> ：
          <el-input v-model="reduceForm.contentDuration3" class="longInput"/>
        </el-form-item>
        <el-form-item label="重み：">
          <el-input v-model="reduceForm.priority"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer" >
        <el-button @click="small = false">キャンセル</el-button>
        <el-button type="primary"@click="reduce();small=false">選択確認</el-button>
      </span>

    </el-dialog>

    <el-table
      :data="tableData"
      :header-cell-style="row"
      border
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"/>

      <el-table-column
        prop="programName"
        label="番組名"/>

      <el-table-column
        prop="enablePlayTime"
        label="放松可能区間"/>

      <el-table-column
        prop="playRecommend"
        label="放送推獎"/>

      <el-table-column
        prop="contentDuration"
        label="内容时長"/>

      <el-table-column
        prop="media"
        label="メデイア"/>

      <el-table-column
        prop="priority"
        label="重み"/>

      <el-table-column
        prop="play"
        label="放送"/>

      </el-table-column>
      <el-table-column
        prop="operation"
        label="操作"
        width="292">
        <template slot-scope="scope">
          <el-button class="button3 button-font" @click="handleCopy(scope.$index, scope.row)">コピー</el-button></br>
          <el-button class="button4 button-font" @click="handleEdit(scope.$index, scope.row)">編集</el-button></br>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination

        :current-page.sync="currentPage"
        :page-size="pageSize"

        :total="totalItems"
        layout="total, prev, pager, next, jumper"
        @current-change="handleCurrentChange"/>
    </div>

    <!--新规作成弹窗-->
    <el-dialog
      :visible.sync="add"
      title="新規"
      width="30%"
      center>

      <el-form
        ref="addForm"
        :model="addForm"
        label-width="130px">
        <el-form-item label="番組名：">
          <el-input v-model="addForm.program" />
        </el-form-item>
        <el-form-item label="放送可能区間：">
          <el-input v-model="addForm.section"/>
        </el-form-item>
        <el-form-item label="放送推奨：">
          <el-input v-model="addForm.a"/>
        </el-form-item>
        <el-form-item label="内容時長：">
          <el-input v-model="addForm.time"/>
        </el-form-item>
        <el-form-item label="メディア：">
          <el-input v-model="addForm.media"/>
        </el-form-item>
        <el-form-item label="重み：">
          <el-input v-model="addForm.priority"/>
        </el-form-item>
        <el-form-item label="放送：">
          <el-input v-model="addForm.live"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="add = false">キャンセル</el-button>
        <el-button type="primary" @click="addSubmit()">新規作成</el-button>
      </span>
    </el-dialog>

    <!--复制弹窗-->
    <el-dialog
      :visible.sync="copy"
      title="コピー"
      width="30%"
      center>

      <el-form
        ref="copyForm"
        :model="copyForm"
        label-width="130px">
        <el-form-item label="番組名：">
          <el-input v-model="copyForm.program" />
        </el-form-item>
        <el-form-item label="放送可能区間：">
          <el-input v-model="copyForm.section"/>
        </el-form-item>
        <el-form-item label="放送推奨：">
          <el-input v-model="copyForm.a"/>
        </el-form-item>
        <el-form-item label="内容時長：">
          <el-input v-model="copyForm.time"/>
        </el-form-item>
        <el-form-item label="メディア：">
          <el-input v-model="copyForm.media"/>
        </el-form-item>
        <el-form-item label="重み：">
          <el-input v-model="copyForm.priority"/>
        </el-form-item>
        <el-form-item label="放送：">
          <el-input v-model="copyForm.live"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="copy = false">キャンセル</el-button>
        <el-button type="primary"@click="copySubmit()">コピー</el-button>
      </span>
    </el-dialog>

    <!--编辑弹窗-->
    <el-dialog
      :visible.sync="edit"
      title="編集"
      width="30%"
      center>

      <el-form
        ref="editForm"
        :model="editForm"
        label-width="130px">
        <el-form-item label="番組名：">
          <el-input v-model="editForm.program" />
        </el-form-item>
        <el-form-item label="放送可能区間：">
          <el-input v-model="editForm.section"/>
        </el-form-item>
        <el-form-item label="放送推奨：">
          <el-input v-model="editForm.a"/>
        </el-form-item>
        <el-form-item label="内容時長：">
          <el-input v-model="editForm.time"/>
        </el-form-item>
        <el-form-item label="メディア：">
          <el-input v-model="editForm.media"/>
        </el-form-item>
        <el-form-item label="重み：">
          <el-input v-model="editForm.priority"/>
        </el-form-item>
        <el-form-item label="放送：">
          <el-input v-model="editForm.live"/>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click.native="edit = false">キャンセル</el-button>
        <el-button type="primary"@click.native="editSubmit(index)">編集完了</el-button>
      </span>
    </el-dialog>

    <div class="button-group2">
      <el-button class="button5 button-font">選択确定</el-button>
      <el-button class="button6 button-font" @click="add = true">新規</el-button>
      <el-button class="button7 button-font">削除</el-button>
      <router-link to="/menu"><el-button class="button8 button-font">戻る</el-button></router-link>
    </div>
  </div>
</template>

<script>
import { reduce } from '@/api/reduceApi'
export default {
  data() {
    return {
      add: false,
      copy: false,
      small: false,
      edit: false,
      checked: false,
      tableDataName: '',
      tableDataEnd: [],
      currentPage: 1,
      pageSize: 4,
      totalItems: 0,
      filterTableDataEnd: [],
      flag: false,
      editForm: {
        id: 0,
        program: '',
        section: '',
        a: '',
        time: '',
        media: '',
        priority: '',
        live: ''
      },
      copyForm: {
        id: 0,
        program: '',
        section: '',
        a: '',
        time: '',
        media: '',
        priority: '',
        live: ''
      },
      addForm: {
        id: 0,
        program: '',
        section: '',
        a: '',
        time: '',
        media: '',
        priority: '',
        live: ''
      },
      reduceForm: {
        programName: '',
        enablePlayTime1: '',
        enablePlayTime2: '',
        enablePlayTime3: '',
        enablePlayTime4: '',
        playRecommend1: '',
        playRecommend2: '',
        playRecommend3: '',
        playRecommend4: '',
        contentDuration1: '',
        contentDuration2: '',
        contentDuration3: '',
        priority: ''
      },
      tableData: [],
      tableDataBegin: []
    }
  },
  created() {
    this.totalItems = this.tableDataBegin.length
    if (this.totalItems > this.pageSize) {
      for (let index = 0; index < this.pageSize; index++) {
        this.tableDataEnd.push(this.tableDataBegin[index])
      }
    } else {
      this.tableDataEnd = this.tableDataBegin
    }
  },
  mounted() {
    this.init()
  },

  methods: {
    reduce() {
      reduce(this.reduceForm).then(response => {
        console.log(reduceForm)
      })
    },

    row(row, rowIndex) {
      return 'background-color:RGB(91,155,213);color:white;text-align:center;font-family:Microsoft JhengHei'
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
      this.currentPage = val
      // 需要判断是否检索
      if (!this.flag) {
        this.currentChangePage(this.tableDataBegin)
        console.log(this.tableDataEnd)
      } else {
        this.currentChangePage(this.filterTableDataEnd)
        console.log(this.tableDataEnd)
      }
    }, // 组件自带监控当前页码

    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize
      const to = this.currentPage * this.pageSize
      this.tableDataEnd = []
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from])
        }
      }
    },
    handleEdit(index, row) {
      this.edit = true
      this.editForm = Object.assign({}, row)
    },
    handleCopy(index, row) {
      this.copy = true
      this.copyForm = Object.assign({}, row)
    },
    addSubmit() {
      console.log(this.addForm)
      this.tableDataBegin.push(this.addForm)
      this.add = false
    },
    copySubmit() {
      console.log(this.copyForm)
      this.tableDataBegin.push(this.copyForm)
      this.copy = false
    },
    editSubmit(index) {
      console.log(this.editForm)
      this.selected = index // 修改的位置
      this.selectedlist = this.tableDataBegin[index]
      this.copy = false
    },
    init() {
      if (this.$route.params.fanData) {
        var _data = JSON.parse(this.$route.params.fanData[0].fan)
        this.tableData = _data.showSubstituteData
      } else {
        this.uploadfan()
      }
    },
    uploadfan() {
      fan().then(response => {
        var _data = JSON.parse(response.data[0].fan)
        this.tableData = _data.showSubstituteData
      })
    }

  }

}

</script>

<style scoped>

  @import  "../assets/css/program_manage.css";
  @import "../assets/css/font.css";

</style>
