var go1 = document.getElementById("go1");
var mytime1 = document.querySelector("#go1")

mytime1.addEventListener("click", function() {
  var getNum = document.getElementById("timefld").value;
  console.log(getNum)
  var timer = setInterval (() => {
    document.getElementById("time1").innerHTML = getNum;
    getNum--;
    console.log(getNum)
    if (getNum < -1) {
      document.getElementById("time1").innerHTML = "done";
      document.getElementById("one").innerHTML = "done";
      clearInterval(timer)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time1").innerHTML = "enter time"
      document.getElementById("one").innerHTML = document.getElementById("inptfld").value;
    }
}, 1000)
var can1 = document.getElementById("can1")

can1.addEventListener("click", function() {
  document.getElementById("one").innerHTML = "";
  resetBtn = clearInterval(timer)
  document.querySelector('#time1').innerHTML = "";
})
})
go1.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("one").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("one").innerHTML = "enter text"
   }
})

var go2 = document.getElementById("go2");
var mytime2 = document.querySelector("#go2")

mytime2.addEventListener("click", function() {
  var getNum2 = document.getElementById("timefld").value;
  console.log(getNum2)
  var timer2 = setInterval (() => {
    document.getElementById("time2").innerHTML = getNum2;
    getNum2--;
    console.log(getNum2)
    if (getNum2 < -1) {
      document.getElementById("time2").innerHTML = "done";
      document.getElementById("two").innerHTML = "done";
      clearInterval(timer2)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time2").innerHTML = "enter time"
      document.getElementById("two").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can2 = document.getElementById("can2")

can2.addEventListener("click", function() {
  document.getElementById("two").innerHTML = "";
  resetBtn = clearInterval(timer2)
  document.querySelector('#time2').innerHTML = "";
})
})
go2.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("two").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("two").innerHTML = "enter text"
   }
})

var go3 = document.getElementById("go3")
var mytime3 = document.querySelector("#go3")

mytime3.addEventListener("click", function() {
  var getNum3 = document.getElementById("timefld").value;
  console.log(getNum3)
  var timer3 = setInterval (() => {
    document.getElementById("time3").innerHTML = getNum3;
    getNum3--;
    console.log(getNum3)
    if (getNum3 < -1) {
      document.getElementById("time3").innerHTML = "done";
      document.getElementById("three").innerHTML = "done";
      clearInterval(timer3)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time3").innerHTML = "enter time"
      document.getElementById("three").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can3 = document.getElementById("can3")

can3.addEventListener("click", function() {
  document.getElementById("three").innerHTML = "";
  resetBtn = clearInterval(timer3)
  document.querySelector('#time3').innerHTML = "";
})
})

go3.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("three").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("three").innerHTML = "enter text"
   }
})

var go4 = document.getElementById("go4");
var mytime4 = document.querySelector("#go4")

mytime4.addEventListener("click", function() {
  var getNum4 = document.getElementById("timefld").value;
  console.log(getNum4)
  var timer4 = setInterval (() => {
    document.getElementById("time4").innerHTML = getNum4;
    getNum4--;
    console.log(getNum4)
    if (getNum4 < -1) {
      document.getElementById("time4").innerHTML = "done";
      document.getElementById("four").innerHTML = "done";
      clearInterval(timer4)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time4").innerHTML = "enter time"
      document.getElementById("four").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can4 = document.getElementById("can4")

  can4.addEventListener("click", function() {
    document.getElementById("four").innerHTML = "";
    resetBtn = clearInterval(timer4)
    document.querySelector('#time4').innerHTML = "";
  })
})
go4.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("four").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("four").innerHTML = "enter text"
   }
})

var go5 = document.getElementById("go5");
var mytime5 = document.querySelector("#go5")

mytime5.addEventListener("click", function() {
  var getNum5 = document.getElementById("timefld").value;
  console.log(getNum5)
  var timer5 = setInterval (() => {
    document.getElementById("time5").innerHTML = getNum5;
    getNum5--;
    console.log(getNum5)
    if (getNum5 < -1) {
      document.getElementById("time5").innerHTML = "done";
      document.getElementById("five").innerHTML = "done";
      clearInterval(timer5)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time5").innerHTML = "enter time"
      document.getElementById("five").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can5 = document.getElementById("can5")

  can5.addEventListener("click", function() {
    document.getElementById("five").innerHTML = "";
    resetBtn = clearInterval(timer5)
    document.querySelector('#time5').innerHTML = "";
  })
})
go5.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("five").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("five").innerHTML = "enter text"
   }
})

var go6 = document.getElementById("go6");
var mytime6 = document.querySelector("#go6")

mytime6.addEventListener("click", function() {
  var getNum6 = document.getElementById("timefld").value;
  console.log(getNum6)
  var timer6 = setInterval (() => {
    document.getElementById("time6").innerHTML = getNum6;
    getNum6--;
    console.log(getNum6)
    if (getNum6 < -1) {
      document.getElementById("time6").innerHTML = "done";
      document.getElementById("six").innerHTML = "done";
      clearInterval(timer6)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time6").innerHTML = "enter time"
      document.getElementById("six").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can6 = document.getElementById("can6")

  can6.addEventListener("click", function() {
    document.getElementById("six").innerHTML = "";
    resetBtn = clearInterval(timer6)
    document.querySelector('#time6').innerHTML = "";
  })
})
go6.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("six").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("six").innerHTML = "enter text"
   }
})

var go7 = document.getElementById("go7");
var mytime7 = document.querySelector("#go7")

mytime7.addEventListener("click", function() {
  var getNum7 = document.getElementById("timefld").value;
  console.log(getNum7)
  var timer7 = setInterval (() => {
    document.getElementById("time7").innerHTML = getNum7;
    getNum7--;
    console.log(getNum7)
    if (getNum7 < -1) {
      document.getElementById("time7").innerHTML = "done";
      document.getElementById("seven").innerHTML = "done";
      clearInterval(timer7)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time7").innerHTML = "enter time"
      document.getElementById("seven").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can7 = document.getElementById("can7")

  can7.addEventListener("click", function() {
    document.getElementById("seven").innerHTML = "";
    resetBtn = clearInterval(timer7)
    document.querySelector('#time7').innerHTML = "";
  })
})
go7.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("seven").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("seven").innerHTML = "enter text"
   }
})

var go8 = document.getElementById("go8");
var mytime8 = document.querySelector("#go8")

mytime8.addEventListener("click", function() {
  var getNum8 = document.getElementById("timefld").value;
  console.log(getNum8)
  var timer8 = setInterval (() => {
    document.getElementById("time8").innerHTML = getNum8;
    getNum8--;
    console.log(getNum8)
    if (getNum8 < -1) {
      document.getElementById("time8").innerHTML = "done";
      document.getElementById("eight").innerHTML = "done";
      clearInterval(timer8)
    }
    if (document.getElementById("timefld").value === "")
    {
      document.getElementById("time8").innerHTML = "enter time"
      document.getElementById("eight").innerHTML = document.getElementById("inptfld").value;
    }
  }, 1000)
  var can8 = document.getElementById("can8")

  can8.addEventListener("click", function() {
    document.getElementById("eight").innerHTML = "";
    resetBtn = clearInterval(timer8)
    document.querySelector('#time8').innerHTML = "";
  })
})
go8.addEventListener("click", function() {
  var myVal = document.getElementById("inptfld").value;
   document.getElementById("eight").textContent = myVal;
   if (document.getElementById("inptfld").value === "")
   {
    document.getElementById("eight").innerHTML = "enter text"
   }
})
