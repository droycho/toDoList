// businnes logic start
function Task (task, dueDay, notes) {
  this.task = task;
  this.dueDay = dueDay;
  this.notes = notes;
}
// businnes logic end

// user logic start
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var task = $("input#inputTask").val();
    var dueDay = $("input#inputDueDay").val();
    var note = $("input#inputNotes").val();
    var newTask = new Task (task, dueDay, note);
    $(".output").append("<li class='task'>" + newTask.task + " " + newTask.dueDay + " " + newTask.notes + " " + "</li>");
    $(".task").click(function(){
      $(this).hide();
    });
  });
});
// user logic end
