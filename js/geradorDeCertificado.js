class Informations {
    constructor(name, email, school, course) {
        this.name = name;
        this.email = email;
        this.school = school;
        this.course = course;
    }

}

let allInfors  = [];

function verificarInfors() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let school = document.getElementById('school');
    let course = document.getElementById('course');

    let infors = new Informations(
        name.value,
        email.value,
        school.value,
        course.value
    );

    if(name.value !== '' && email.value !== '' && school.value !== '' || course.value !== '') {
        localStorage.setItem('certificado', JSON.stringify(infors));
        window.location.href = 'certificado.html';        
    } else {
        alert('Algo deu errado! Verifique se todos os campos foram preenchidos.');
    }
}


function mostrarCertificado() {
    let name = document.getElementById('inforName');
    let school = document.getElementById('inforSchool');
    let course = document.getElementById('inforCourse');

    let x = JSON.parse(localStorage.getItem('certificado'));
    
    name.innerHTML = x.name;
    school.innerHTML = x.school;
    course.innerHTML = x.course;
}

function imprimirCertificado() {
    let btn = document.querySelector('.btnImprimir');
    btn.style.display = 'none';
    window.print();
}