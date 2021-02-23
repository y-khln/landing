
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
