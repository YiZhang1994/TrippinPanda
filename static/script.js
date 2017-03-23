$(document).ready(function(){
  $('#search').click(function() {
    //event.preventDefault();
    var searchTopic = $('#topic').val();
    var searchDestination =$('#destination').val();
    $.ajax({
       type: "GET",
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'text/plain',
       },
       dataType: "json",
       url: "topic/"+searchTopic,
       //crossDomain: true,
       success: function (data){

         //console.log(dataset);
         $("#demo").text(JSON.stringify(data));
       },
       error: function () {
         console.log("error");
       }
   });


   $.ajax({
      type: "GET",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'text/plain',
      },
      dataType: "json",
      url: "destination/"+searchDestination,
      //crossDomain: true,
      success: function (data){

        //console.log(dataset);
        $("#demo").text(JSON.stringify(data));
      },
      error: function () {
        console.log("error");
      }
  });
  })

$("#addPost").click(function(){
  var title = $('#postTitle').val();
  var destination = $('#postDes').val();
  var topic = $('#postTopic').val();
  var content = $('#postContent').val();

  var postData = {
  //  _id: title.replace(/\s/g, "-"),
    title: title,
    destionation: destination,
    topic: topic,
    body: content
  }

  $.ajax({
    type: "post",
    dataType: "json",
    contentType : 'application/json',
    url: "/post",
    data: JSON.stringify(postData),
    success: function(){console.log("successful")},
    error: function() {console.log("error")}
  });
})



})
