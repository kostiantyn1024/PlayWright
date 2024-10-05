let contacts = []

function addContact(a, b, c){
    contacts.push({"fname" : a, "lname" : b, age: c})
    console.log("Новый контакт успешно добавлен")
}

function showContacts(){
    if (contacts.length == 0) {
        console.log ("Нет контактов.")
    }
    else {
        count = 1
        for (let a of contacts) {
            console.log ("Контакт " + count + ": " + a.fname + " " + a.lname + " " + a.age)
            count ++
        }

    }
}

addContact("Vitali", "Brunovski", 34);
addContact("John", "Smith", 99);

showContacts();
