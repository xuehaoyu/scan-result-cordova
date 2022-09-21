
// layer.open({ content: '<p>已修复不能获取token问题\n\r现在已经可以正常获取token！</p>' })
// let i = 0; let n = 0; let token; let frequency; let radio

// $('#get_token').click(function () {
//   const index = layer.msg('正在获取请稍后', { type: 0, icon: 16, time: 3000 })
//   $.ajax({
//     url: 'https://cat-match.easygame2021.com/sheep/v1/game/user_info?uid=' + $('#uid').val() + '&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMjcyNDYsIm5iZiI6MTY2MzIyNTA0NiwiaWF0IjoxNjYzMjIzMjQ2LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo4MzU0MzAxNCwiZGVidWciOiIiLCJsYW5nIjoiIn0.5qpiRRjxwUmN1U8Qst8dFBMWMQyWi26DcfTgHIITZds&content-type=application%2Fjson&User-Agent=Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2015_6%20like%20Mac%20OS%20X)%20AppleWebKit%2F605.1.15%20(KHTML%2C%20like%20Gecko)%20Mobile%2F15E148%20MicroMessenger%2F8.0.28(0x18001c26)%20NetType%2FWIFI%20Language%2Fzh_CN',
//     type: 'get',
//     async: true,
//     dataType: 'json',
//     success: function (res) {
//       if (res.err_code === 0) {
//         console.log(11)
//         $.ajax({
//           url: 'https://cat-match.easygame2021.com/sheep/v1/user/login_oppo',
//           data: 'uid=' + res.data.wx_open_id + '&avatar=1&nick_name=1&sex=1&t=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQzMjcyNDYsIm5iZiI6MTY2MzIyNTA0NiwiaWF0IjoxNjYzMjIzMjQ2LCJqdGkiOiJDTTpjYXRfbWF0Y2g6bHQxMjM0NTYiLCJvcGVuX2lkIjoiIiwidWlkIjo4MzU0MzAxNCwiZGVidWciOiIiLCJsYW5nIjoiIn0.5qpiRRjxwUmN1U8Qst8dFBMWMQyWi26DcfTgHIITZds&content-type=application%2Fjson&User-Agent=Mozilla%2F5.0+(iPhone%3B+CPU+iPhone+OS+15_6+like+Mac+OS+X)+AppleWebKit%2F605.1.15+(KHTML%2C+like+Gecko)+Mobile%2F15E148+MicroMessenger%2F8.0.28(0x18001c26)+NetType%2FWIFI+Language%2Fzh_CN',
//           type: 'post',
//           async: true,
//           success: function (res) {
//             if (res.data.token) {
//               $('#token').val(res.data.token)
//               layer.close(index)
//             }
//           }
//         })
//       } else {
//         layer.close(index)
//         layer.msg(res.err_msg, { icon: 1, time: 3000 })
//       }
//     }

//   })
// })

// $('#get_code').click(function () {
//   token = $('#token').val()
//   frequency = $('#frequency').val()

//   if (token.length < 10) {
//     layer.msg('请输入token', { icon: 2 })
//     return
//   }
//   $(this).attr('disabled', 'true')
//   radio = $('input:radio[name="sb"]:checked').val()
//   qdq()
// })

// function qdq () {
//   n++
//   layer.close(index)
//   var index = layer.msg('正在循环刷新提交第' + n + '次', { type: 0, icon: 16, time: 500 })
//   for (let ii = 0; ii < 200; ii++) {
//     setTimeout(shuashua)
//   }
//   $('#content').html('以为您刷通关' + i + '次')
//   setTimeout(qdq, 500)
// }
// function shuashua () {
//   if (radio == '1') {
//     var url = 'https://cat-match.easygame2021.com/sheep/v1/game/game_over?rank_score=1&rank_state=1&rank_time=0&rank_role=2&skin=34&t=' + token + '&content-type=application%2Fjson&User-Agent=Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2015_6%20like%20Mac%20OS%20X)%20AppleWebKit%2F605.1.15%20(KHTML%2C%20like%20Gecko)%20Mobile%2F15E148%20MicroMessenger%2F8.0.28(0x18001c26)%20NetType%2FWIFI%20Language%2Fzh_CN'
//   } else {
//     var url = 'https://cat-match.easygame2021.com/sheep/v1/game/topic_game_over?rank_score=1&rank_state=1&rank_time=1&rank_role=1&skin=1&t=' + token + '&content-type=application%2Fjson&User-Agent=Mozilla%2F5.0%20(iPhone%3B%20CPU%20iPhone%20OS%2015_6%20like%20Mac%20OS%20X)%20AppleWebKit%2F605.1.15%20(KHTML%2C%20like%20Gecko)%20Mobile%2F15E148%20MicroMessenger%2F8.0.28(0x18001c26)%20NetType%2FWIFI%20Language%2Fzh_CN'
//   }

//   $.ajax({
//     url: url,
//     type: 'get',
//     async: true,
//     dataType: 'json',
//     timeout: 100000,
//     success: function (res) {
//       i++
//     },
//     error: function (res) {
//       $('#content').html('失败，未知问题，请联系客服解决')
//     }

//   })

//   if (i > frequency) {
//     return
//   }

//   if (i > 9999) {

//   }
// }
// $('#jiaocheng .btn1').click(function () {
//   layer.open({
//     title: '安卓教程',
//     area: ['80%', '700px'],
//     content: '<video controls="" autoplay="" name="media" style="height: 550px;"><source src="https://tx2.a.yximgs.com/upic/2022/09/16/00/BMjAyMjA5MTYwMDI0MzFfNDcxMDYyMzlfODQyOTUxNTkxNDNfMF8z_b_B49a2a5ba468d9134f88c1d64f2ce30d7.mp4" type="video/mp4"></video>'
//   })
// })
// $('#jiaocheng .btn2').click(function () {
//   layer.open({
//     title: '苹果教程',
//     area: ['80%', '700px'],
//     content: '<video controls="" autoplay="" name="media" style="height: 550px;"><source src="https://tx2.a.yximgs.com/upic/2022/09/16/00/BMjAyMjA5MTYwMDI1NDFfNDcxMDYyMzlfODQyOTUxODg0NjZfMF8z_b_B340df0ca2ac69857373f268411561b17.mp4" type="video/mp4"></video>'
//   })
// })

// $('.uid .btn3').click(function () {
//   layer.open({
//     title: '查看uid教程',
//     area: ['80%', '700px'],
//     content: '<video controls="" autoplay="" name="media" style="height: 550px;"><source src="https://tx2.a.yximgs.com/upic/2022/09/17/21/BMjAyMjA5MTcyMTU2MDVfNDcxMDYyMzlfODQ0MzYyNDc4NjlfMF8z_b_Bd384b058c3cff3f86a026cac93a43930.mp4" type="video/mp4"></video>'
//   })
// })
