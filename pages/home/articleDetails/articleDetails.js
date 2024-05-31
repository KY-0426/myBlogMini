// pages/home/articleDetails/articleDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: {
      "id": 1,
      "title": "MySQL约束：数据完整性守护者",
      "content": `<p>在数据库设计中，数据完整性是至关重要的。MySQL中的约束就是用来确保数据的准确性和一致性，它们扮演着数据完整性的守护者角色。通过设定一系列规则，约束能够防止无效数据的插入、更新或删除，从而保证数据库中存储的数据是有效且可靠的。</p> <h4>常见的MySQL约束类型</h4> <ul> <li><strong>PRIMARY KEY：</strong> 这是一个唯一标识表中每一行的约束。一个表只能有一个主键，且主键列的值必须是唯一的，不能为NULL。</li> <li><strong>FOREIGN KEY：</strong> 外键约束用于确保数据的引用完整性。它定义了一个表中的字段与另一个表的主键字段之间的引用关系。</li> <li><strong>UNIQUE：</strong> 唯一约束确保表中的特定列中的所有值都是唯一的。</li> <li><strong>CHECK：</strong> 检查约束用于确保列中的值满足指定的条件。如果值不满足条件，则不允许进行插入或更新操作。</li> <li><strong>DEFAULT：</strong> 默认值约束为列指定默认值。当插入新的行而没有为该列提供值时，将使用该默认值。</li> <li><strong>NOT NULL：</strong> 非空约束确保列不包含NULL值。这意味着在插入或更新行时，必须为该列提供一个值。</li> </ul> <h4>约束的作用</h4> <p>通过使用这些约束，数据库管理员可以确保数据的准确性和一致性，减少数据冗余和错误。例如，通过在订单表中设置外键约束，可以确保每个订单都引用了一个有效的客户ID，从而避免了孤立订单的出现。同样，通过在用户表中设置唯一约束，可以防止重复的用户名被插入到数据库中。</p> <h4>总结</h4> <p>MySQL的约束是数据库设计中不可或缺的一部分。它们通过定义一系列规则来确保数据的完整性和准确性，从而保护数据库免受无效和错误数据的侵害。了解并正确使用这些约束是构建健壮、可靠的数据库系统的关键。</p>`,
      "author": "张三",
      "create_time": "2023-06-20T10:00:00Z",
      "update_time": "2023-06-21T15:30:00Z",
      "type_id": "1",
      "tags": ["编程", "学习", "基础语法"],
      "img":"https://tdesign.gtimg.com/mobile/demos/swiper1.png"
    },
  },
  onBack() {
    wx.navigateBack();
  },
  onGoHome() {
    wx.reLaunch({
      url: '/pages/index/index',
    });
  },
 // 文本格式化
  // // 处理图片自适应
  // let content = that.data.content
  // that.setData({
  //   contentInfo: content.replace('<img ', '<img style="max-width:100%;height:auto;display:block;margin:10px 0;"')
  // })
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let id = options.id
    console.log(id)
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