discipline = ["Математика", "Русский язык", "Литература", "Иностранный язык", "История", "Физическая культура", "Музыка", "Технология", "Химия", "Биология", "Физика", "Экология", "География", "Естествознание", "Астрономия", "Окружающий мир", "ИЗО", "Обществознание", "Информатика", "Геометрия"]

classnum = {
    "number": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    "letter": ["а", "б", "в", "г", "д"]
}

$("#class1_par").change(function() {

    if ($(this).val() == 'class1_par-1') {
        //выполняем код при выборе "Пункт 2"
        var groups = {
            "group1": {
                "number": 1,
                "count": "a",
                "saturday_not_study": Boolean
            }
        }
    } else {
        if ($(this).val() == 'class1_par-2') {
            //выполняем код при выборе "Пункт 2"
            function groups() {
                group1: {
                    "number": 1,
                    "count": "a",
                    "saturday_not_study": Boolean
                }
                "group2": {
                    "number": 1,
                    "count": "б",
                    "saturday_not_study": Boolean
                }
            }

        }
    }
});
discipline.forEach((item, i, discipline) => {
    $('#pair').append('<option value="pair1">' + discipline[i] + '</option>');
});

var parent = $(".discipline_container");
for (let i = 0; i < discipline.length; i++) {
    const item = discipline[i];
    var id ="disp_one_cont" + i;
    parent.append("<div class='discipline' id='" + id + "' " +
    + "> <div class='discipline" + i + "' " +"id='discipline" + i + "' " +"> " + item + "  </div>   </div>");
    
    var innerParent = $("#" + id);
    innerParent.append("<div class='discipline-chek'> <input type='checkbox'  name='discipline" + i + "' " +" value='discipline" + i + "' " +" checked>     <input type='checkbox' name='discipline1-pair' value='discipline1-pair'> </div>");
}
