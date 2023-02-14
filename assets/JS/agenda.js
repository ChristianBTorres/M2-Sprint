document.addEventListener('DOMContentLoaded', function () {
    let eventos = []
    let dia_actual = new Date()
    for (let x = dia_actual.getDate() - 5; x < (dia_actual.getDate() + 5); x++) {
        dia = "2023-02-" + x.toString().padStart(2, '0')
        if ((new Date(dia).getUTCDay()) != 0) {
            if ((new Date(dia).getUTCDay()) != 6) {
                for (let i = 9; i < 18; i++) {
                    if (i != 13) {
                        var name = "Hrs:" + faker.name.findName()
                    } else { var name = "Colación" }
                    let inicio = dia + "T" + i.toString().padStart(2, '0') + ":00:00"
                    eventos.push({ title: name, start: inicio, allDay: false })


                }
            } else if ((new Date(dia).getUTCDay()) == 6) {
                for (let i = 9; i < 15; i++) {
                    if (i != 15) {
                        var name = "Hrs:" + faker.name.findName()
                    } else { var name = "Colación" }
                    let inicio = dia + "T" + i.toString().padStart(2, '0') + ":00:00"
                    eventos.push({ title: name, start: inicio, allDay: false })


                }
            }
        }
    }
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: eventos,
        locale: 'es',
        buttonText: {
            today: 'Hoy',
            month: 'Mes',
            week: 'Semana',
            day: 'Día',
            list: 'Lista'
        },
        navLinks: true,
        customButtons: {
            myCustomButton: {
                text: '+',
                click: function () {
                    
                }
            }
        },
        initialDate: dia_actual,
        initialView: 'timeGridWeek'
      
    });
    calendar.render();
});
