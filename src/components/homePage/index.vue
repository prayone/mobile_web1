<template>
  <div class="homePage">
    <div class="course_selection">
      <h1>Hello, 朴新学员</h1>
      <div class="course_swiper">
         <yd-slider autoplay="3000">
            <yd-slider-item v-for="(item,index) in srcList" :key="index">
                <a href="http://www.ydcss.com">
                    <img :src="item">
                </a>
            </yd-slider-item>
        </yd-slider>
      </div>
      <div class="course_list">
        <div class="title">
          <h3>选课</h3> · <span>公开课</span>
          <div class="class_list">
            <ul>
              <li @click="handleClickInfo">
                <div class="lis_images">
                  <img src="/static/img/banner003.jpg" alt="">
                </div>
                <div class="lis_txt">
                  <div class="lis_container">
                    <h5>英语词汇训练营</h5>
                    <span><img src="/static/img/icon_zhibo.png" alt=""></span>
                    <!--<span>未开始</span>-->
                  </div>
                  <p class="introduce">独创词汇联想法，快速增强词汇理解和记忆忆，从此爱上背单词</p>
                  <p class="date">02月24日 14:00 <span>免费</span></p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
    <tabbar :active_homePage='true' homePage_icon='static/img/homePage_active.png'></tabbar>
  </div>
</template>
<script>
import tabbar from '../base/tabbar'
export default {
  components:{
    tabbar
  },
  data(){
    return{
      srcList:[
        'http://static.ydcss.com/uploads/ydui/1.jpg',
        'http://static.ydcss.com/uploads/ydui/2.jpg',
        'http://static.ydcss.com/uploads/ydui/3.jpg',
      ]
    }
  },
  methods: {
    handleClickInfo() {
      this.$router.push({
        name: 'learnDetails'
      })
    }
  }
}
</script>
<style lang="less" scoped>
  .homePage {
    .course_selection {
      h1 {
        padding: 20px 0 7px 15px;
        font-size:24px;
        font-family:PingFangSC-Semibold;
        font-weight:600;
        color:rgba(34,34,34,1);
        line-height:33px;
      }
      .course_swiper {
        width: 100%;
        height: 212px;
        background: #000;
      }
      .course_list {
        padding: 0 15px;
        .title {
          padding-top: 40px;
          padding-bottom: 10px;
          font-size:18px;
          font-family:PingFangSC-Medium;
          font-weight:500;
          line-height:25px;
          h3 {
            display: inline-block;
            padding-bottom:10px; 
          }
          span {
            color: #1DA1F8;
            padding-bottom:10px; 
          }
        }
        .class_list {
          ul {
            li {
              width:100%;
              height:124px;
              background:rgba(255,255,255,1);
              box-shadow:0px 1px 11px 0px rgba(0,0,0,0.06);
              border-radius:3px;
              border:1px solid rgba(246,246,246,1);
              display: flex;
              align-items: center;
              .lis_images {
                margin-right: 13px;
                width: 84px;
                height: 94px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .lis_txt {
                flex: 1;
                .lis_container {
                  font-size:16px;
                  font-family:PingFangSC-Medium;
                  font-weight:500;
                  color:rgba(51,51,51,1);
                  line-height:22px;
                  display: flex;
                  justify-content: space-between;
                  h5 {
                    display: inline-block;
                  }
                  span {
                    width: 44px;
                    height: 22px;
                    display: inline-block;
                    padding-right: 15px;
                    img {
                      width: 100%;
                      height: 100%;
                    }
                  }
                }
                p {
                  font-size:12px;
                  font-weight:400;
                  color:rgba(136,136,136,1);
                  line-height:17px;
                }
                p.introduce {
                  padding: 5px 0 10px;
                }
                p.date {
                  position: relative;
                  color: #BBBBBB;
                  span {
                    position: absolute;
                    right: 15px;
                    font-size: 17px;
                    color: #F16B11;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>


