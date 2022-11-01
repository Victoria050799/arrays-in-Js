/*Создайте три массива: 
	- Фамилии студентов.
	- Успеваемость каждого студента.
	- Количество часов отработанной практики.

Фамилия Успеваемость Практика
Петров        4         100
Иванов        4.5       120
Сидоров       5         110
Белкин        3         150
	
Выведите в цикле информацию о каждом студенте в виде:
1) Студент Иванов имеет успеваемость 4.5 баллов и отработал 120 часов практики.

2) Удалите второго студента из массива 
и снова выведете информацию о каждом студенте.
	
Совет: для вывода информации о студентах удобно написать функцию.*/

    let studentlastName = ['Петров','Иванов','Сидоров','Белкин'];
    let studentAcademicPerformance = [4,4.5,5,3];
    let studentPracticeHours = [100,120,110,150];
    
console.log(studentlastName.splice(1,1));
console.log(studentAcademicPerformance.splice(1,1));
console.log(studentPracticeHours.splice(1,1));


const  studentData = ()=>{
    for (let i = 0; i <studentlastName.length; i++){
    console.log(`Студент ${studentlastName[i]} имеет успеваемость ${studentAcademicPerformance[i]} баллов и отработал ${studentPracticeHours[i]} часов практики `);}
};
 
const student= studentData()

