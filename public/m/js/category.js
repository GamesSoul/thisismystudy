
$(function(){

  $.ajax({
    type:'get',
    url:'/category/queryTopCategory',
    data:{},
    dataType:'json',
    success:function (result) {
      //如果是对象直接传对象，是数组就转对象再传
      //template 模板id名称  数据
      var html = template('firstCategoryTemp',result);
      $(".lt_left ul").html(html);
      getSecondCategory(result.rows[0].id);
    }
  })

  function getSecondCategory(id) {
    $.ajax({
      type:"get",
      url:'/category/querySecondCategory',
      data:{"id":id},
      dataType:'json',
      success:function (res) {
        var html = template('secondCategoryTemp',res);
        $(".lt_secondC").html(html);
      }
    })
  }

  $(".lt_left ul").on("click","a",function () {
    console.log(1);
    $(this).parent().addClass("active").siblings().removeClass("active")
    getSecondCategory($(this).data("id"));
  })

})