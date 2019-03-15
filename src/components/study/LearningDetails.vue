<template>
  <div class="px_details">
    <div class="px_title">
      <h1>2019寒假高一数学直播班高一数学直播班 高一数学直播班（二期）</h1>
      <div class="px_txt">
        <p class="learn_date">
          <em></em>
          3月3日-6月16日 每周六13:00-15:00
        </p>
        <p class="learn_hour">
          <em></em>
          共20课时
        </p>
        <p class="learn_tea">
          <em></em>
          <span>授课老师： 刘晓静</span>
          &nbsp;&nbsp;&nbsp;
          <span>辅导老师： 李晓旭</span>
        </p>
      </div>
    </div>
    <div class="px_interval"></div>
    <div class="px_list">
      <div class="px_container">
        <h1>课程大纲</h1>
        <div class="px_content">
          <ul>
            <li v-for="item, index in detailsList" :key="index">
              <div class="list_left">
                <h5>{{item.title}}</h5>
                <span>{{item.date}}</span>
                <span>{{item.dateTime}}</span>
              </div>
              <div class="list_right"
                   :class="item.status === 0 ? 'list_btnBlue' : item.status === 1 ? 'list_btnOrange' : 'list_btnGray'">
                <div class="li_btn"
                     :class="item.status === 0 ? 'li_btnBlue' : item.status === 1 ? 'li_btnOrange' : 'li_btnGray'">
                  {{item.btnTxt}}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default  {
    data() {
      return {
        detailsList: [
          {
            title: '有趣的鸡兔同笼问题（一）',
            date: '2019-02-14',
            dateTime: '09:00-11:00',
            btnTxt: '看回放',
            status: 0
          },
          {
            title: '有趣的鸡兔同笼问题（一）',
            date: '2019-02-14',
            dateTime: '09:00-11:00',
            btnTxt: '去上课',
            status: 1
          },
          {
            title: '有趣的鸡兔同笼问题（一）',
            date: '2019-02-14',
            dateTime: '09:00-11:00',
            btnTxt: '待上课',
            status: 2
          },
        ]
      }
    }
  }
</script>
<style scoped lang="less">
  .px_details {
    padding-top: 16px;
    .px_title {
      padding: 0 15px;
      h1 {
        font-size:18px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(61,61,61,1);
        line-height:24px;
      }
      .px_txt {
        margin-top: 16px;
        font-size:13px;
        font-weight:400;
        color:rgba(136,136,136,1);
        line-height:13px;
        p {
          margin-bottom: 10px;
        }
      }
    }
    .px_interval {
      width: 100%;
      height:7px;
      margin-top: 20px;
      background:rgba(249,249,249,1);
    }
    .px_list {
      padding: 30px 15px;
      .px_container {
        h1 {
          font-size:18px;
          font-family:PingFangSC-Semibold;
          font-weight:600;
          color:rgba(61,61,61,1);
          line-height:16px;
        }
        .px_content {
          ul {
            li {
              display: flex;
              justify-content: space-between;
              padding: 21px 0 15px;
              border-bottom: 1px solid rgba(230,230,230,1);
              .list_left {
                h5 {
                  font-size:15px;
                  font-weight:400;
                  color:rgba(61,61,61,1);
                  line-height:16px;
                }
                span {
                  font-size:12px;
                  font-weight:400;
                  color:rgba(176,176,176,1);
                  line-height:12px;
                  padding-top: 8px;
                }
              }
              .list_right {
                width:66px;
                height:28px;
                border-radius:4px;
                text-align: center;
                .li_btn{
                  font-size:14px;
                  font-weight:400;
                  line-height: 28px;
                }
                .li_btnBlue {
                  color:rgba(0,153,255,1);
                }
                .li_btnOrange {
                  color: #FFA800;
                }
                .li_btnGray {
                  color: #ACACAC;
                }
              }
              .list_btnBlue {
                background:rgba(231,245,255,1);
              }
              .list_btnOrange {
                background:rgba(255,244,223,1);
              }
              .list_btnGray {
                background:rgba(246,246,246,1);
              }
            }
          }
        }
      }
    }
  }
</style>
