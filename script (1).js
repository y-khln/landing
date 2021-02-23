
//1 и 1*: Вывод имени + сохранение
function Name(){
    let userName = document.getElementById('name').value;
    localStorage.setItem('user',userName)
    document.getElementById("userName").innerHTML =localStorage.getItem('user');
    document.getElementById("hello").innerHTML = "Здравствуйте, "+localStorage.getItem('user')+"!";
    //localStorage.setItem(userName);
}
function LoadName(){
    if(localStorage.getItem('user')!=null) document.getElementById("userName").innerHTML =localStorage.getItem('user');
}
function Punkt1(){
    document.getElementById('how_1').style.display="block";
}
function Close1(){
    document.getElementById('how_1').style.display="none";
}
function Close2(){
    document.getElementById('how_2').style.display="none";
}
function Close3(){
    document.getElementById('how_3').style.display="none";
}
function Close4(){
    document.getElementById('how_4').style.display="none";
}
function Close5(){
    document.getElementById('how_5').style.display="none";
}
function Close6(){
    document.getElementById('how_6').style.display="none";
}
//2: Нахождение площади треугольника
function Area(){
    let side=document.getElementById('q1_1').value;
    let height=document.getElementById('q1_2').value;
    document.getElementById("area").innerHTML = "Площадь треугольника: "+(side*height/2);
}
function Punkt2(){
    document.getElementById('how_2').style.display="block";
}
//3: Сравнение количества символов в введенных строках
function Compare(){
    let st1=document.getElementById('q2_1').value;
    let st2=document.getElementById('q2_2').value;
    if(st1.length== st2.length) document.getElementById("comparator").innerHTML = "True";
    else document.getElementById("comparator").innerHTML = "False";
}
function Punkt3(){
    document.getElementById('how_3').style.display="block";
}
//4: Нахождение мин и макс в массиве из 5 элементов
function MaxMin(){
    let m1=document.getElementById('q3').value.split(" ");
    if(m1.length!=5) document.getElementById("maxi").innerHTML = "Нужно 5 элементов";
    if(m1.length!=5) document.getElementById("mini").innerHTML = "";
    else{
        let max=Math.max.apply(null,m1);
        let min=Math.min.apply(null,m1);
        document.getElementById("maxi").innerHTML = "Максимальный элемент: "+max;
        document.getElementById("mini").innerHTML = "Минимальный элемент: "+min;
    }
}
function Punkt4(){
    document.getElementById('how_4').style.display="block";
}
//5: Таймер (секундомер)
let count, minute = 0,second = 0,hour = 0;
let Timer = {
  addTime() {
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("min").innerHTML = minute;
    document.getElementById("sec").innerHTML = second;
    ++second;
    if (second == 60){second = 0; minute++;}
    if (minute == 60){hour++; minute = 0;}
    count = window.setTimeout("Timer.addTime()",1000);
  },
  start() {
    if (!count)
      this.addTime();
  },
  pause() {
    if (count) {
      clearTimeout(count);
      count=0;}
  },
  reset(){
    hour = 0;
    minute = 0;
    second = 0;
    window.clearInterval(count);
    count = 0;
    document.getElementById("hour").innerHTML="0";
    document.getElementById("min").innerHTML="0";
    document.getElementById("sec").innerHTML="0";
  },
};
function Punkt5(){
    document.getElementById('how_5').style.display="block";
}
//6: Тест
function Test(){
    let answers = document.querySelectorAll('.test_q'); //Все элементы div с вопросами
    let score = 0; //Количество верных ответов
    let rightAnswers = ["1_1", "2_2","3_2","4_2","5_3","6_3","7_2","8_1","9_1","10_3"] //Список верных ответов
    let falseAnswers=[];
    let j=0;
    for (let i = 0; i < 10; i++) {
        let chosenAnswer = answers[i].querySelector("input[type='radio']:checked"); //Из массива вопросов выбираем элемент радио, который выбрал пользователь
        if (chosenAnswer==null) chosenAnswer="0"; //Засчитываем пропущенные вопросы как неправильные
        //alert("Пожалуйста, ответьте на все вопросы"); //При пропуске вопросов просим ответить на все 
        if (chosenAnswer && chosenAnswer.id == rightAnswers[i]) //Подсчет результата
        {
            score++; 
        }
        else{ //Подсчет в каких вопросах пользователь указал неправильные ответы
            falseAnswers[j]=i+1;
            j++;
        }
        //Вывод данных в консоль
        console.log("Выбранный ответ: " + chosenAnswer.id);
        console.log("Правильный ответ: " + rightAnswers[i]);
        console.log("Очки: " + score);
    }
    document.getElementById("testResult").innerHTML="Ваш результат: "+score+"/10";
    document.getElementById("testTrueFalse").innerHTML="Вы ответили неверно на вопросы: "+ falseAnswers;
}
function Punkt6(){
    document.getElementById('how_6').style.display="block";
}
//7: Заставка
function Background(){
    document.getElementById("zast_text").style.display="block";//Заставка появляется
    document.getElementById("zastavka").style.display="block";
    let date=new Date();
    let todayDate = date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
    let us = "Пользователь: "+localStorage.getItem('user');
    document.getElementById("zast_text").innerHTML=todayDate+"<br>"+us+"</br>";
    console.log(todayDate,us);
}
function Back(){
    document.getElementById("zast_text").style.display="none";//Заставка пропадает
    document.getElementById("zastavka").style.display="none";
}
//Закрытие подсказок о создании функций
 popup = document.querySelector('.popUp');
document.onclick = function(e){
    if ( event.target.className != 'popUp' ) {
        popup.style.display = 'none';
    };
};
/*
class Sekundomer {
    constructor() {
        this.timeHour = 0;
        this.timeMin = 0;
        this.timeSec = 0;
    }
    startTimerInterval = () => {
        console.log(`${this.timeHour} : ${this.timeMin} : ${this.timeSec}`);
        this.timeSec++
        if (this.timeHour == 0 && this.timeMin == 0 && this.timeSec == 0) {
            this.pause()
            console.log(0, 0, 0);
        }
        if (this.timeSec == 60) {
            this.timeSec = 0
            this.timeMin++
            if (this.timeMin == 60) {
                this.timeMin = 0
                this.timeHour++
            }
        }
        this.lastTime = this.time;
    }
    timerInterval = setInterval(this.startTimerInterval, 1000);
    pause() {
            clearInterval(this.timerInterval);
    }
    start() {
        new Sekundomer();
    }
    reset() {
        new Sekundomer();
    }
}
s1.getElementById("pause").addEventListener("click",pause);


let questions =[
    new Film("Ривердейл", "США", "Детектив","Старые","Коул Спроус",'ser2.jpg'),
    new Film("Защищая Джейкоба", "США", "Драма, Детектив","Новинки", "Крис Эванс",'ser1.jpg'),
    new Film("13 причин почему", "США", "Драма, Детектив, Мистика","Старые",null,'ser4.jpg'),
    new Film("Элита", "Испания", "Драма, Детектив", "Старые",null,'ser11.jpg'),
    new Film("Скам", "Норвегия", "Драма, Мелодрама", "Старые", null, 'ser6.jpg'),
    new Film("Милые обманщицы", "США", "Драма, Детектив, Мелодрама", "Старые", null, 'ser5.jpg'),
    new Film("Игра престолов", "США, Великобритания", "Драма, Мелодрама, Приключения, Фантастика", "Старые",null, 'ser8.jpg'),
    new Film("Флэш", "США", "Драма, Фантастика", "Старые",null, 'ser3.jpg'),
    new Film("Волчонок", "США", "Драма, Мелодрама, Мистика, Приключения, Фантастика", "Старые", "Дилан О Брайен",'ser9.jpg'),
    new Film("Друзья", "США", "Комедия, Мелодрама", "Старые", "Дженнифер Энистон",'ser10.jpg'),
    new Film("Черное зеркало", "США", "Фантастика", "Старые",null,'ser7.jpg'),
    new Film("Ведьмак", "Польша, США", "Драма, Детектив, Приключения, Фантастика", "Новинки",null,'ser12.jpg'),
];


document.getElementById('first').addEventListener("submit", function (event) {
    event.preventDefault();
    let name
    let userName = '';
    userName.(function (input) {
        if (input.checked) {
            userName = input.value;
        }
    });

    localStorage.setItem(userName);
    localStorage.setItem('q2', checkedValue1);
    localStorage.setItem('q3', checkedValue2);
    localStorage.setItem('q4', checkedValue3);
    printName();
});  




/*
document.getElementById('service').addEventListener("submit", function(event){
    event.preventDefault();
    let nameInputs = document.getElementsByName('q1'); 
    let q2Inputs = document.getElementsByName('q2');
    let q3Inputs = document.getElementsByName('q3');
    let q4Inputs = document.getElementsByName('q4');
    let checkedValue = '';
    q1Inputs.forEach(function(input){
        if(input.checked){
            checkedValue = input.value;
        }
    });
    let checkedValue1='';
    q2Inputs.forEach(function(input){
        if(input.checked){
            checkedValue1 = input.value;
        }
    });
    
    let checkedValue2='';
    q3Inputs.forEach(function(input){
        if(input.checked){
            checkedValue2 = input.value;
        }
    });

    let checkedValue3='';
    q4Inputs.forEach(function(input){
        if(input.checked){
            checkedValue3 = input.value;
        }
    }); 
    localStorage.setItem('q1',checkedValue);
    localStorage.setItem('q2',checkedValue1);
    localStorage.setItem('q3',checkedValue2);
    localStorage.setItem('q4',checkedValue3);
    printFilms();
});

let printFilms = function(){
    let result=[];
    let result1=[];
    let result2=[];
    let result3=[];
    if(localStorage.getItem('q1') == 'США'){
        result = films.filter(b => b.country == 'США'|| b.country == 'Польша, США' || b.country == 'США, Великобритания');
    }
    else if(localStorage.getItem('q1') == 'Великобритания'){
        result = films.filter(b => b.country == 'Великобритания' || b.country == 'США, Великобритания');
    }
    else{
        result = films.filter(b => b.country == 'Норвегия' || b.country == 'Испания'|| b.country == 'Польша, США');
    }

    
    if(localStorage.getItem('q2') == 'Драма'){
        result1 = result.filter(b => b.genre == 'Драма' || b.genre == 'Драма, Детектив' || b.genre == 'Драма, Детектив, Мистика' || b.genre == 'Драма, Мелодрама' || b.genre == 'Драма, Детектив, Мелодрама' || b.genre == 'Драма, Мелодрама, Приключения, Фантастика' || b.genre == 'Драма, Фантастика' || b.genre == 'Драма, Мелодрама, Мистика, Приключения, Фантастика' || b.genre == 'Драма, Детектив, Приключения, Фантастика');
    }
    else if(localStorage.getItem('q2') == 'Детектив'){
        result1 = result.filter(b => b.genre == 'Детектив' || b.genre == 'Драма, Детектив' || b.genre == 'Драма, Детектив, Мистика' || b.genre == 'Драма, Детектив, Мелодрама' || b.genre == 'Драма, Детектив, Приключения, Фантастика');
    }
    else if(localStorage.getItem('q2') == 'Комедия'){
        result1 = result.filter(b => b.genre == 'Комедия, Мелодрама');
    }
    else if(localStorage.getItem('q2') == 'Мелодрама'){
        result1 = result.filter(b => b.genre == 'Драма, Мелодрама' || b.genre == 'Драма, Детектив, Мелодрама' || b.genre == 'Драма, Мелодрама, Приключения, Фантастика' || b.genre == 'Драма, Мелодрама, Мистика, Приключения, Фантастика' || b.genre == 'Комедия, Мелодрама');
    }
    else if(localStorage.getItem('q2') == 'Мистика'){
        result1 = result.filter(b => b.genre == 'Драма, Детектив, Мистика' || b.genre == 'Драма, Мелодрама, Мистика, Приключения, Фантастика');
    }
    else if(localStorage.getItem('q2') == 'Приключения'){
        result1 = result.filter(b => b.genre == 'Драма, Мелодрама, Приключения, Фантастика' || b.genre == 'Драма, Детектив, Приключения, Фантастика' || b.genre == 'Драма, Мелодрама, Мистика, Приключения, Фантастика');
    }
    else if(localStorage.getItem('q2') == 'Фантастика'){
        result1 = result.filter(b => b.genre == 'Фантастика' || b.genre == 'Драма, Мелодрама, Приключения, Фантастика' || b.genre == 'Драма, Фантастика' || b.genre == 'Драма, Детектив, Приключения, Фантастика');
    }

    if(localStorage.getItem('q3') == 'Новинки'){
        result2 = result1.filter(b => b.year == 'Новинки');
    }
    else {
        result2 = result1.filter(b => b.year == 'Старые');
    }

    if(localStorage.getItem('q4') == 'Известные'){
        result3 = result2.filter(b => b.star == 'Коул Спроус' || b.star == 'Крис Эванс' || b.star == 'Дженнифер Энистон' || b.star == 'Дилан О Брайен');
    }
    else {
        result3 = result2.filter(b => b.star != 'Коул Спроус' || b.star != 'Крис Эванс' || b.star != 'Дженнифер Энистон' || b.star != 'Дилан О Брайен');
    }
    if(result3 == ''){
        alert("К сожалению, у нас нет сериала данной категории");
    }

    let container = document.getElementById('list');
    container.innerHTML = '';
    result3.forEach(function(film){
        let poster = document.createElement('img');
        poster.src = film.poster;
        poster.classList.add('poster');
        let title = document.createElement('div');
        title.innerText = film.title;
        title.classList.add('title_answer');

        let country = document.createElement('p');
        country.innerText = film.country;
        let genre = document.createElement('p');
        genre.innerText = film.genre;

        let answerContainer = document.createElement('div');
        answerContainer.classList.add('descrip_answer');
        answerContainer.appendChild(country);
        answerContainer.appendChild(genre);
        container.appendChild(answerContainer);
                
        let oneFilmContainer = document.createElement('div');
        oneFilmContainer.classList.add('card');
        oneFilmContainer.appendChild(poster);
        oneFilmContainer.appendChild(title);
        oneFilmContainer.appendChild(answerContainer);
        container.appendChild(oneFilmContainer);
    }); 
}    
printFilms();    
*/