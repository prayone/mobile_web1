<template>
  <div class="px_index">
    <!--头部-->
    <div class="px_header">
      <div class="px_logo">
        <img src="/static/img/login_logo.png" alt="朴新网校">
      </div>
      <div class="px_login">
        <router-link to="/login">
          <yd-button type="hollow">登录</yd-button>
        </router-link>
      </div>
    </div>
    <!--内容-->
    <div class="px_content">
      <div class="px_title">
        <img src="/static/img/login_banner.png" alt="">
      </div>

      <!--朴新网校助力教育公平-->
      <div class="px_introduce">
        <div class="px_bgCol">
          <h2>朴新网校助力教育公平</h2>
          <i style="width: 4.4rem;"></i>
        </div>
        <div class="px_bot">自主研发的学生培养方案，致力于实现“三大跨越”</div>
        <div class="px_list">
          <ul>
            <li v-for="(item, index) in list">
              <img class="px_figure" :src="item.src" alt="">
              <div class="px-body">
                <h4>{{item.title}}</h4>
                <p>{{item.content}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="px_spread" v-if="isShow">
        <div class="px_conten">
          <div class="sp_left">
            <div class="spread_img">
              <img src="/static/img/clo_logo.png" alt="">
            </div>
            <div class="spread_txt">
              <p>朴新网校</p>
              <p>好老师在朴新</p>
            </div>
          </div>
          <div class="sp_right" @click="handleClickOpen">
            <div class="sp_open">立即打开</div>
          </div>
          <div class="delete" @click="handleDelInfo">
          </div>
        </div>
      </div>

      <!--为什么孩子要到朴新网校学习-->
      <div class="px_introduce">
        <div class="px_bgCol">
          <h2>为什么孩子要到朴新网校学习</h2>
          <i style="width: 5.76rem;"></i>
        </div>
        <div class="px_bot">朴新网校独特“6大优势”</div>
        <CarouselCom></CarouselCom>
      </div>

      <!--独创九步闭环教学法-->
      <div class="px_introduce px_math">
        <div class="px_bgCol">
          <h2>为什么孩子要到朴新网校学习</h2>
        </div>
        <div class="px_bot">学习过程透明化</div>
        <div class="px-mathImg">
          <img src="/static/img/index_shuxuefa.png" alt="">
        </div>
      </div>

      <!--学习服务-->
      <div class="px_introduce">
        <div class="px_bgCol">
          <h2>学习服务</h2>
          <i style="width: 1.74rem;"></i>
        </div>
        <div class="px_bot" style="padding: 0 2rem;">全程服务 优质陪伴</div>
        <div class="px_list px_studyList">
          <ul>
            <li v-for="item, key in studyList" :key="key">
              <div>
                <img :src="item.img">
                <p>{{item.title}}</p>
                <span>准时上课不遗忘</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!--家长反馈-->
      <div class="px_introduce px_math" style="margin-bottom: 0;">
        <div class="px_bgCol">
          <h2>家长反馈</h2>
        </div>
        <div class="px-mathImg">
          <img src="/static/img/index_fankui.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import './swiper/swiper.min'
  import CarouselCom from './carousel/CarouselCom'
  export default {
    components: { CarouselCom },
    data() {
      return {
        isShow: true,
        list: [
          {
            src: '/static/img/icon_kuayue1.png',
            title: '跨越教育资源不均衡',
            content: '跨越北京优质教育资源与地方教育资源之间 不均衡的障碍，让教育发展更加公平'
          },
          {
            src: '/static/img/icon_kuayue2.png',
            title: '跨越与地方教师的地域障碍',
            content: '跨越专家、名师与地方教师的地域障碍，让 地方教师在专家名师的指导下实现快速提升'
          },
          {
            src: '/static/img/icon_kuayue3.png',
            title: '跨越与各地学生的地域障碍',
            content: '跨越专家、名师与地方学生的地域障碍，让 学员得到名师专家的点拨，从优秀走向卓越'
          }
        ],
        studyList: [
          {img: '/static/img/index_kqtx.png', title: "课前提醒", price: 156.23, w_price: 89.36},
          {img: '/static/img/index_khzy.png', title: "课后作业", price: 256.23, w_price: 89.36},
          {img: '/static/img/index_huikan.png', title: "随时回看", price: 356.23, w_price: 89.36},
          {img: '/static/img/index_tuifei.png', title: "随时退费", price: 456.23, w_price: 89.36},
        ],
      }
    },
    methods: {
      handleDelInfo() {
        this.isShow = false;
      },
      // 立即打开
      handleClickOpen() {
        console.log('立即打开')
      }
    }
  }
</script>
<style scoped lang="less">
  .px_index {
    .px_header {
      padding: 0.18rem 0.4rem 0 0.4rem;
      display: flex;
      justify-content: space-between;

      .px_logo {
        img {
          width: 2.08rem;
          height: 0.66rem;
        }
      }

      .yd-btn {
        height: 0.64rem;
        padding: 0 .36rem;
        font-family: PingFangSC-Medium;
        font-weight: 500;
        color: rgba(50, 171, 252, 1);
        line-height: .32rem;
      }

      .yd-btn-hollow {
        border: 0.02rem solid #32ABFC;
        -webkit-border-radius: 0.08rem;
        -moz-border-radius: 0.08rem;
        border-radius: 0.08rem;
      }
    }

    .px_content {
      position: relative;
      .px_title {
        width: 100%;
        height: 144px;
        background: #000;
        margin: 8px 0 30px;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .px_introduce {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .px_bgCol {
          h2 {
            font-size: 22px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(51, 51, 51, 1);
            line-height: 20px;
          }

          i {
            display: block;
            height: 12px;
            background: rgba(203, 234, 255, 1);
            margin-top: -7px;
          }
        }

        .px_bot {
          font-size: 14px;
          font-weight: 400;
          color: rgba(136, 136, 136, 1);
          line-height: 14px;
          margin-top: 10px;
          margin-bottom: 15px;
        }

        .px_list {
          margin-bottom: 50px;

          ul {
            li {
              display: flex;
              align-items: flex-start;
              width: 345px;
              height: 126px;
              background: rgba(255, 255, 255, 1);
              box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.06);
              border-radius: .06rem;
              margin: 15px;

              .px_figure {
                width: 47px;
                height: 50px;
                margin: 25px 20px 0 13px;
              }

              .px-body {
                padding-top: 31px;
                flex: 1;
                font-size: 18px;
                font-weight: 400;
                color: rgba(51, 51, 51, 1);
                line-height: 16px;

                p {
                  width: 248px;
                  margin-top: 12px;
                  font-size: 13px;
                  font-family: PingFangSC-Light;
                  font-weight: 300;
                  color: rgba(176, 176, 176, 1);
                  line-height: 20px;
                }
              }
            }
          }
        }

        .px_studyList {
          border-top: 1px dotted #E8E8E8;

          ul {
            display: flex;
            flex-wrap: wrap;
            align-content: space-between;

            li {
              border-bottom: 1px dotted #E8E8E8;
              border-right: 1px dotted #E8E8E8;
              padding: 31px 45px 36px 49px;
              width: 50%;
              height: auto;
              box-shadow: none;
              border-radius: 0;
              float: left;
              margin: 0;

              div {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;

                img {
                  width: 44px;
                  height: 44px;
                  display: block;
                }

                p {
                  line-height: 16px;
                  padding: 11px 0 8px;
                }

                span {
                  font-size: 13px;
                  font-family: PingFangSC-Light;
                  font-weight: 300;
                  color: rgba(176, 176, 176, 1);
                  line-height: 13px;
                }
              }
            }

            li:nth-child(2n) {
              border-right: none;
            }
          }
        }
      }

      .px_math {
        width: 100%;
        height: 421px;
        margin-bottom: 50px;
        background: #70C4FE;

        .px_bgCol {
          h2 {
            font-size: 22px;
            font-family: PingFangSC-Semibold;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            padding-top: 30px;
          }
        }

        .px_bot {
          color: rgba(255, 255, 255, 1);
        }

        .px-mathImg {
          img {
            width: 355px;
            height: 320px;
          }
        }
      }

      .px_spread {
        width: 100%;
        height:50px;
        background:rgba(241,249,255,1);
        position: fixed;
        bottom: 0;
        padding-left: 15px;
        .px_conten {
          position: relative;
          width: 100%;
          height:50px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .sp_left {
            display: flex;
            flex-direction: row;
            .spread_img {
              width: 38px;
              height: 38px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .spread_txt {
              p {
                padding-left: 8px;
                padding-top: 6px;
              }
              p:first-child {
                font-size:16px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:16px;
              }
              p:last-child {
                font-size:11px;
                font-family:PingFangSC-Regular;
                font-weight:400;
                color:rgba(160,160,160,1);
                line-height:11px;
              }
            }
          }
          .sp_right {
            width:80px;
            height:32px;
            background:rgba(50,171,252,1);
            border-radius:4px;
            text-align: center;
            margin-right: 27px;
            .sp_open {
              font-size:16px;
              font-weight:400;
              color:rgba(255,255,255,1);
              line-height:32px;
              /*-webkit-background-clip:text;*/
              /*-webkit-text-fill-color:transparent;*/
            }
          }
          .delete {
            position: absolute;
            top: 3px;
            right: 3px;
            width: 8px;
            height: 8px;
            background: url("../../static/img/delete.png") no-repeat center;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
          }
        }
      }
    }

    .pc-banner {
      .swiper-slide {
        width: 244px!important;
        height: 230px;
        text-align: center;
        position: relative;
        a {
          width: 244px;
          height: 230px;
          margin: 0 auto;
        }
        span.swiper-introduce {
          padding: 20px 0;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }
    }
  }
</style>
