<template>
  <div class="personInfo">
    <div class="fix" v-if="show">
    </div>
    <div class="list">
      <div class="item" @click="editImg">
        <div class="text">头像</div>
        <div class="info">
          <div class="info_cont img">
            <img src="../../../static/img/banner001.jpg" alt="">
          </div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="item" @click="editUserName">
        <div class="text">昵称</div>
        <div class="info">
          <div class="info_cont userName">安其拉安其拉安其拉安其拉安其拉</div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="item">
        <div class="text">性别</div>
        <div class="info">
          <div class="info_cont"></div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="item" @click="toShow">
        <div class="text">在读年级</div>
        <div class="info">
          <div class="info_cont"></div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="item">
        <div class="text">在读学校</div>
        <div class="info">
          <div class="info_cont"></div>
          <div class="arrow"></div>
        </div>
      </div> 
      <div class="item" @click="cityShow">
        <div class="text">所在城市</div>
        <div class="info">
          <div class="info_cont">
            <p class="select">请选择</p> 
          </div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="item" @click="loginRevise">
        <div class="text">修改密码</div>
        <div class="info">
          <div class="info_cont"></div>
          <div class="arrow"></div>
        </div>
      </div>
      <div class="item" @click="addressManage">
        <div class="text">地址管理</div>
        <div class="info">
          <div class="info_cont"></div>
          <div class="arrow"></div>
        </div>
      </div>
    </div>
    <!-- 更换头像 -->
    <yd-popup class="imgPopup" v-model="pople_img" position="bottom" height="28%">
      <div class="item takePhoto">拍照</div>
      <div class="item select_img">从相册选择</div>
      <div class="item cancle" @click="cancle">取消</div>
    </yd-popup>
    <!-- 选择年级 -->
    <vue-pickers
      :show="show"
      :columns="columns"
      :defaultData="defaultData"
      :selectData="pickData"
      :link="link"
      v-on:cancel="close"
      v-on:confirm="confirmFn">
    </vue-pickers>
    <!-- 省市区 -->
    <yd-cityselect v-model="cityPopup" :callback="result1" :items="district"></yd-cityselect>
  </div>
</template>
<script>
import vuePickers from 'vue-pickers'
import District from 'ydui-district/dist/jd_province_city_area_id';
export default {
  components: {
    vuePickers
  },
  data(){
    return {
      pople_img:false,
      cityAddress:'',
      cityPopup:false,
      district: District,
      pople_grade:true,
      res: null,
      show: false,
      columns: 2, // 两列
      link: true, // 联动必须需要link 参数
      defaultData: [],
      pickData: {
        // 第一列数据结构
        data1: [
          {
            text: '小学',
            value: 1
          },
          {
            text: '初中',
            value: 2
          },
          {
            text: '高中',
            value: 3
          }
        ],
        // 第二列数据结构
        data2: {
          '1': [
            {
              text: '一年级',
              value: 'a'
            },
            {
              text: '二年级',
              value: 'b'
            },
            {
              text: '三年级',
              value: 'c'
            },
            {
              text: '四年级',
              value: 'd'
            },
            {
              text: '五年级',
              value: 'e'
            },
            {
              text: '六年级',
              value: 'f'
            }
          ],
          '2': [
            {
              text: '一年级',
              value: 'a'
            },
            {
              text: '二年级',
              value: 'b'
            },
            {
              text: '三年级',
              value: 'c'
            },
          ],
          '3': [
             {
              text: '一年级',
              value: 'a'
            },
            {
              text: '二年级',
              value: 'b'
            },
            {
              text: '三年级',
              value: 'c'
            },
          ]
        }
      },
    }
  },
  methods:{
    close() {
      this.show = false
    },
    confirmFn(val) {
      this.show = false
      console.log(val)
      this.res = val
      this.pickData.default = [val.select1, val.select2]
    },
    toShow() {
      this.show = true
    },
    result1(ret) {
        this.cityAddress = ret.itemName1 + ' ' + ret.itemName2 + ' ' + ret.itemName3;
    },
    cityShow(){
      this.cityPopup = true
    },
    editImg(){
      this.pople_img = true
    },
    cancle(){
      this.pople_img = false
    },
    loginRevise(){
      this.$router.push({
        path:'LoginRevise'
      })
    },
    editUserName(){
      this.$router.push({
        path:'editUserName'
      })
    },
    addressManage(){
      this.$router.push({
        path:'addressManage'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .personInfo{
    .select{
      font-size: 15px;
      color:#ccc;
    }
    .arrow{
      width: 18px;
      height: 18px;
      background: url('../../../static/img/arrow_wp.png');
      background-size: 100% 100%;
    }
    .list{
      padding: 0 15px;
      .item{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding:18px 0;
        border-bottom:1px solid #f5f5f5;
        .text{
          color: #888;
          font-size: 15px;
        }
        .info{
          display: flex;
          justify-content: center;
          align-items: center;
          .info_cont{
            margin-right: 15px;
            color: #333;
            font-size: 15px;
          }
          .userName{
            max-width: 180px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;  //溢出不换行
          }
          .img{
            width: 72px;
            height: 72px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 100%;
            }
          }
        }
      }
    }
    .imgPopup{
      text-align: center;
      .item{
        border-bottom: 1px solid #f2f2f2;
        padding:20px 0;
        font-size: 16px;
        color: #222;
      }
      .item:last-child{
        border-bottom:0 none;
      }
    }
    .allCont{
      display: flex;
      padding:0 30px;
      border:1px solid red;
      justify-content: space-between;
    }
    .fix{
      position: fixed;
      left:0;
      top: 0;
      background: rgba(0, 0, 0, 0.5);
      width: 100%;
      height:100%;
      z-index:10;
    }
  }
</style>
<style>
.area_btn_box{
    background: #fff!important;
}
.area_btn_box[data-v-c4222420]:before, .area_btn_box[data-v-c4222420]:after {
    background: #fff!important;
    box-shadow: 0 10px 20px #aaa;
}
.area_roll>div{
  /* height: 300px!important; */
}
</style>



