<template>
  <div class="my_order">
    <div class="order_title">
      <router-link to="/login">
        <span>
          <img src="/static/img/icon_back.png" alt="返回">
        </span>
      </router-link>
      <h5>订单</h5>
    </div>
    <div class="order_list" v-if="list != ''">
      <div v-for="item, index in list" :key="index" class="order_container">
        <div class="order_number">
          <span class="num_title">订单编号：{{item.number}}</span>
          <span class="num_status">{{item.status}}</span>
        </div>
        <div class="order_content" v-for="(val, ind) in item.orderList">
          <div class="order_items">
            <div class="order_img">
              <img :src="val.img" alt="">
            </div>
            <div class="order_cont">
              <h5>{{val.title}}</h5>
              <span class="order_effective">有效期: {{val.date}}</span>
              <span class="order_teacher">老师：{{val.teacher}}</span>
            </div>
          </div>
        </div>
        <div class="order_date">
          <span class="date_title">订单时间：{{item.date}}</span>
          <span class="date_price">实付款：<em>￥</em>{{item.price}}</span>
        </div>
      </div>
    </div>
    <div class="learn_empty" v-if="list == ''">
      <div class="empty_img">
        <img src="/static/img/enpty.png" alt="暂无订单">
      </div>
      <span>暂无课程</span>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        list: [
          {
            number: 'erywtdsj999141068',
            status: '已付款',
            orderList: [
              {
                img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                title: "2019寒假高考英语考前特训班(上)",
                date: '2020/01/01',
                teacher: '李金玲'
              }
            ],
            date: '2019/01/24 12:40:00',
            price: '499'
          }
        ]
      }
    },
    methods: {

    },
  }
</script>
<style scoped lang="less">
  .my_order {
    .order_title {
      display: flex;
      padding: 10px 15px;
      border-bottom: 1px solid #E6E6E6;
      span {
        width: 24px;
        height: 24px;
        display: inline-block;
        img {
          width: 100%;
          height: 100%;
        }
      }
      h5 {
        font-size:18px;
        font-family:PingFangSC-Medium;
        font-weight:500;
        color:rgba(34,34,34,1);
        line-height:25px;
        margin: 0 auto;
      }
    }
    .order_list {
      .order_container {
        padding: 0 15px;
        border-bottom: 4px solid #F9F9F9;
        .order_number {
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          .num_title {
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:20px;
          }
          .num_status {
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(0,153,255,1);
            line-height:20px;
          }
        }
        .order_content {
          .order_items {
            padding: 15px 0;
            display: flex;
            align-items: flex-start;
            border-top: 1px solid #F2F2F2;
            .order_img {
              width: 76px;
              height: 76px;
              margin-right: 10px;
              flex: 1;
              img{
                width: 100%;
                height: 100%;
              }
            }
            .order_cont {
              h5 {
                font-size:16px;
                font-family:PingFangSC-Medium;
                font-weight:500;
                color:rgba(51,51,51,1);
                line-height:16px;
              }
              span {
                display: block;
              }
              .order_effective {
                font-size:14px;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:14px;
                padding: 8px 0 23px;
              }
              .order_teacher {
                font-size:14px;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:14px;
              }
            }
          }
        }
        .order_date {
          padding: 15px 0;
          display: flex;
          justify-content: space-between;
          flex-direction: row;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          .date_title {
            font-size:14px;
            font-weight:400;
            color:rgba(187,187,187,1);
            line-height:14px;
          }
          .date_price {
            font-size:14px;
            font-weight:400;
            color:rgba(51,51,51,1);
            line-height:14px;
          }
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
