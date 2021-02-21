var students = [];
let message="success";
document.getElementById('submit').addEventListener('click', () => {
    let x = 20;
	let nameInputEl = document.getElementById('name');
	let idInputEl = document.getElementById('idNumber');
	let gdpaInputEl = document.getElementById('gdpa');

	// Validation for input
	inputValidation(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// insert student
	insertStudent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	//showcontent
	showContent(nameInputEl.value, idInputEl.value, gdpaInputEl.value);

	// Show success message
	showMessage('Addition',message);

    
});
document.getElementById('Delete').addEventListener('click', () => {
	let nameInputE2 = document.getElementById('name');
	let idInputE2 = document.getElementById('idNumber');
	let gdpaInputE2 = document.getElementById('gdpa');

	inputValidation(nameInputE2.value, idInputE2.value, gdpaInputE2.value);
	deleteStudent(nameInputE2.value, idInputE2.value, gdpaInputE2.value);
	showMessage("Deletion",message);


});
function inputValidation(name, id, gdpa) {
	// check for the value of each element
    let x = 30;

	if (name == '') {
		alert('Please insert the student name');
		message = 'Fail';
	}

	if (id == '') {
		alert('Please insert the student id number');
		message = 'Fail';
	}

	if (gdpa == '') {
		alert('Please insert the student gdpa');
		message = 'Fail';
	}
}

function insertStudent(name, id, gdpa) {
	let student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	students.push(student);
    console.log('students array: ', students);
}
//SF means success of fail
function showMessage(event,SF){
    if (SF == 'success') {
		if(event='Addition'){
        alert('Studnet added!')
		}else if(event='Deletion'){
			alert('Studnet deleted!')
		}else if(event='Update'){
			alert('Studnet update!')
		}
    }else{
        if(event='Addition'){
			alert('Failed studnet addition!')
			}else if(event='Deletion'){
				alert('Failed studnet deletion!')
			}else if(event='Update'){
				alert('Failed studnet update!')
			}
    }
} 
function deleteStudent(name,id,gdpa){
	let student ={
		name:name,
		id:id,
		gdpa:gdpa
	}
	let counter=0;
	for(item in students){
		if (item.name==name && item,id==id && item.gdpa==gdpa){
			students.splice(counter,1);
		}
		counter = counter + 1;
	}
}
document.getElementById('Show').addEventListener('click', () => {
	alert(students);

});
function showContent(name,id,gdpa){
	let Student = {
		name: name,
		id: id,
		gdpa: gdpa,
	};
	//getElementById('demo').innerHTML = Student;
	alert(Student);
}