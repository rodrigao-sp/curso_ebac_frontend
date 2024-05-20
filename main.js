$(document).ready(function() {
    $('#form-name').on('submit', function(e) {
        e.preventDefault();
        
        var task = $('#task').val();
        var date = $('#date').val();

        if(task && date) {
            var formattedDate = new Date(date).toLocaleDateString('pt-BR');

            var listItem = $('<li></li>');
            var taskTitle = $('<span></span>').text(task + " - ");
            var taskDate = $('<span></span>').text(formattedDate);

            listItem.append(taskTitle);
            listItem.append(taskDate);

            listItem.on('click', function() {
                $(this).toggleClass('completed');
            });
            
            $('#lista-tarefa').append(listItem);
            $('#task').val('');
            $('#date').val('');
        }
    });
});
