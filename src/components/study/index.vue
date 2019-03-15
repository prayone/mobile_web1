<template>
  <div class="homePage">
    <div class="learn_container">
      <h1>我的课程</h1>
      <div class="learn_content" v-if="list != ''">
        <yd-list theme="4">
          <yd-list-item v-for="item, key in list" :key="key" @click.native="handleClickDetails(key)">
            <img slot="img" :src="item.img">
            <span slot="title" style="font-size:16px;font-family:PingFangSC-Semibold;font-weight:600;color:rgba(61,61,61,1);line-height:20px;">{{item.title}}</span>
            <yd-list-other slot="other">
              <div class="learn_other">
                <p class="learn_date"><em></em>{{item.date}}</p>
                <p class="learn_hour"><em></em>{{item.hour}}</p>
                <p class="learn_tea"><em></em><span>授课老师： {{item.tea_sk}}</span>&nbsp;&nbsp;&nbsp;<span>辅导老师： {{item.tea_fd}}</span></p>
              </div>
              <!--<div>content</div>-->
            </yd-list-other>
          </yd-list-item>
        </yd-list>
      </div>
      <div class="learn_empty" v-if="list == ''">
        <div class="empty_img">
          <img src="/static/img/enpty.png" alt="暂无课程">
        </div>
        <span>暂无课程</span>
      </div>
    </div>
    <tabbar :active_study='true' study_icon='static/img/study_active.png'></tabbar>
  </div>
</template>
<script>
import tabbar from '../base/tabbar';
export default {
  components:{
    tabbar
  },
  data() {
    return {
      list: [
        {
          img: "/static/img/banner001.jpg",
          title: "(2019寒假)高一英语直播班高一英语直播班",
          date: '3月3日-6月16日 每周六13:00-15:00',
          hour: '共20课时',
          tea_sk: '刘晓静',
          tea_fd: '李晓旭'
        },
      ]
    }
  },
  methods: {
    // 点击进入详情页面
    handleClickDetails(index) {
      console.log(index)
      this.$router.push({
        name: 'learnDetails',
        params: index
      })
    }
  }
}
</script>
<style scoped lang="less">
  .learn_container {
    width: 100%;
    height: 100%;
    padding: 20px 12px;
    margin-bottom: 24px;
    h1 {
      font-size:24px;
      font-family:PingFangSC-Medium;
      font-weight:500;
      color:rgba(61,61,61,1);
      line-height:24px;
      margin-bottom: 30px;
    }
    .learn_content {
      .learn_other {
        font-size: 13px;
        color:rgba(136,136,136,1);
        line-height:13px;
        .learn_hour {
          padding: 10px 0;
        }
      }
    }
    .learn_empty {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .empty_img {
        width: 180px;
        height: 153px;
        margin-top: 132px;
      }
      img {
        width: 100%;
        height: 100%;
      }
      span {
        font-size:16px;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height:16px;
        margin-top: 36px;
      }
    }
  }
</style>


