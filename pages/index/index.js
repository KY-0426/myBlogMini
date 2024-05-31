// pages/index/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    value: 'label_1',
    list: [
      { value: 'label_1', icon: 'home', ariaLabel: '首页' },
      { value: 'label_2', icon: 'app', ariaLabel: '应用' },
      { value: 'label_3', icon: 'chat', ariaLabel: '聊天' },
      { value: 'label_4', icon: 'user', ariaLabel: '我的' },
    ],
    text: 'Copyright © 2021-2024 WKY.All Rights Reserved.',
  },
  // 标签栏
  onChange(e) {
    this.setData({
      value: e.detail.value,
    });
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