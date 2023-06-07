# jQuery17.1.14DOMpractice

**Part one, write jQuery statements to perform some DOM manipulation.**
$(document).ready(function() {
  console.log("Let’s get ready to party with jQuery!");

  $("article img").addClass("image-center");

  $("article p").last().remove();

  $("#title").css("font-size", Math.floor(Math.random() * 101));

  $("aside").empty().append("<p>Sorry for the list's existence.</p>");

  $("input[type='number']").change(function() {
    var red = $("input[type='number']").eq(0).val();
    var blue = $("input[type='number']").eq(1).val();
    var green = $("input[type='number']").eq(2).val();
    $("body").css("background-color", `rgb(${red}, ${green}, ${blue})`);
  });

  $("article img").click(function() {
    $(this).remove();
  });
});

**Part two and further study, movies application**
see files in this repo. all have PartTwo at the start of their file names.
