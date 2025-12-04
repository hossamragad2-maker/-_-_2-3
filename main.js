   const validUser = "hr_17";   // الاسم الصح
    const validPass = "2317";   // الباسورد الصح

    function login(event) {
        event.preventDefault();   // يمنع الفورم إنه يفتح صفحة جديدة لو البيانات غلط

        let user = document.getElementById("user").value;
        let pass = document.getElementById("pass").value;

        if (user === validUser && pass === validPass) {
            window.location.href = "home/home.html";  // الصفحة اللي يدخل عليها لو صح
        } else {
            alert("❌ البيانات غير صحيحة !");
        }
    }