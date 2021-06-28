var guest_list_array = [];

function submit(){

    var name1 = document.getElementById("name_of_the_guest_1").value;
    guest_list_array.push(name1);
    document.getElementById("display_name_of_guest").innerHTML = guest_list_array;
    document.getElementById("name_of_the_guest_1").innerHTML = " ";
    console.log(guest_list_array);
    
}

function show(){

    var names_in_column = [];
    for( var k = 0; k < guest_list_array.length; k++ ){
        names_in_column.push(guest_list_array[k] + "<br>");
        document.getElementById("display_name_of_guest_in_column").innerHTML = names_in_column;
    }

}

function sort(){

    var sorted_names_in_column = [];
    var sorted_names = guest_list_array.sort();
    console.log(sorted_names);
    for( var j = 0; j < guest_list_array.length; j++ ){
        sorted_names_in_column.push(guest_list_array[j] + "<br>");
        document.getElementById("display_sorted_name_of_guests").innerHTML = sorted_names_in_column + '<br>';
    }

}

function search(){

    var s = document.getElementById("name_of_the_searched_guest").value;
    var found = 0;
    var j;
    for(j=0;j<=guest_list_array.length;j++){

        if(s==guest_list_array[j]){
            found = found+1;
        }
    }

    document.getElementById("display_searched_name_of_guest").innerHTML = "name found " + found + " time/s";
    console.log("name found " + found + "time/s");
}