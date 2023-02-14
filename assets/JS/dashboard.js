
//Tablas
let examenes = ["Hemograma", "Perfil Lipídico", "Colesterol", "Orina", "Perfil Bioquiímico", "Coagulación"]
function randomint(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
}
for (let x = 0; x < 6; x++) {
    num = (x + 1).toString()
    let lista = []
    for (let i = 0; i < 10; i++) {
        let edad = randomint(10, 89)
        let mes = randomint(1, 2).padStart(2, '0')
        let dia = randomint(1, 28).padStart(2, '0')
        let telefono = "9 " + randomint(11111111, 99999999).substring(0, 4) + " " + randomint(11111111, 99999999).substring(4, 8)
        lista.push([
            faker.name.findName(),
            "2023/" + mes + "/" + dia,
            examenes[x],
            edad,
            telefono,
            faker.address.streetAddress(),
        ])
    }

    const grid = new gridjs.Grid({
        columns: [
            'Nombre',
            'Fecha',
            'Examen',
            'Edad',
            'Teléfono',
            'Dirección',
        ],
        data: lista,
        resizable: true,
        sort: true,
    });
    grid.render(document.getElementById(num));
}




//Gráficos
function creargrafico(cantidad, cant2) {
    let data = []
    for (let n = 0; n < cantidad; n++) {
        data.push(randomint(1, cant2))
    }
    return data
}

const ctx = document.getElementById('myChart1');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hemograma', 'Perfil Lipídico', 'Colesterol', 'Orina', 'Perfil Bioquímico', 'Coagulación'],
        datasets: [
            { label: 'Menores de 30', data: creargrafico(7, 50), borderWidth: 1 },
            { label: 'Entre 30 y 60', data: creargrafico(7, 50), borderWidth: 1 },
            { label: 'Mayores de 60', data: creargrafico(7, 50), borderWidth: 1 },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: 'Cantidad examenes por tipo',
                    font: {
                        size: 30
                    }
                },
            }
        }
    }
});

const ctx2 = document.getElementById('myChart2');
new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Hemograma', 'Perfil Lipídico', 'Colesterol', 'Orina', 'Perfil Bioquímico', 'Coagulación'],
        datasets: [
            { label: 'Enero', data: creargrafico(7, 50), borderWidth: 1 },
            { label: 'Febrero', data: creargrafico(7, 50), borderWidth: 1 },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: 'Cantidad examenes 2023',
                    font: {
                        size: 30
                    }
                },
            }
        }
    }
});
const ctx3 = document.getElementById('myChart3');
new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Enero', 'Febrero'],
        datasets: [
            { label: 'Hemograma', data: creargrafico(12, 10), borderWidth: 1 },
            { label: 'Perfil Lipídico', data: creargrafico(12, 10), borderWidth: 1 },
            { label: 'Colesterol', data: creargrafico(12, 10), borderWidth: 1 },
            { label: 'Orina', data: creargrafico(12, 10), borderWidth: 1 },
            { label: 'Perfil Bioquímico', data: creargrafico(12, 10), borderWidth: 1 },
            { label: 'Coagulación', data: creargrafico(12, 10), borderWidth: 1 },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: 'Total examenes por tipo',
                    font: {
                        size: 30
                    }
                },
            }
        }
    },
});

const ctx4 = document.getElementById('myChart4');
new Chart(ctx4, {
    type: 'line',
    data: {
        labels: ['Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Enero', 'Febrero'],
        datasets: [
            { label: 'Hombre', data: creargrafico(12, 100), borderWidth: 1 },
            { label: 'Mujer', data: creargrafico(12, 100), borderWidth: 1 },
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: 'Total examenes por sexo.',
                    font: {
                        size: 30
                    }
                },
            }
        }
    },

});



