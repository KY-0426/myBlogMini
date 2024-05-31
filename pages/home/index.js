// pages/home/index.js
const article_types_data = require('../../data/article_types_data')
const article_data = require('../../data/article_data')
const imageCdn = 'https://tdesign.gtimg.com/mobile/demos';
const swiperList = [
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
  {
    value: `${imageCdn}/swiper1.png`,
    ariaLabel: '图片1',
  },
  {
    value: `${imageCdn}/swiper2.png`,
    ariaLabel: '图片2',
  },
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
    tabPanelstyle: 'display:flex;justify-content:center;align-items:center;flex-direction: row;',
    visible: false,
    navbarHeight: {
      type: Number,
      value: 0,
    },
    articleTypesList:article_types_data.article_types_data,
    articleList:article_data.article_data,
    image: 'https://tdesign.gtimg.com/mobile/demos/empty1.png',
  },
    // 选项卡
    onTabsChange(event) {
      console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },
  
    onTabsClick(event) {
      console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },
    showPopup() {
      this.setData({
        visible: true
      }, () => {
        const tabs = this.selectComponent('tabs');
        tabs.setTrack(); // 这一步很重要，因为小程序的无法正确执行生命周期，所以需要手动设置下 tabs 的滑块
      })
    },
    /**
   * 跳转搜索页面
   */
  ToSearchPage(){
    wx.navigateTo({
      url: '../search/index',
    })
  },
  /**
   *  跳转文章页面
   */
  ToArticlePage(e){
    let id = e.target.dataset.id
    wx.navigateTo({
      url: '../home/articleDetails/articleDetails?id='+id,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
   
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})