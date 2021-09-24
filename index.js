showToDoList();


//toDoList一覧の表示処理
function showToDoList() {
    let tableBody = document.getElementById('table-body');
    tableBody.innerHTML = "";
    let list = getToDolist();
    for (let i = 0; i < list.length; i++) {
        const tableRecord = document.createElement('tr');
        tableBody.appendChild(tableRecord);
        const tableComment = document.createElement('td');
        const tableStatus = document.createElement('button');
        tableComment.textContent = list[i];
        tableStatus.textContent = '完了';
        tableStatus.dataset.index = i;
        tableStatus.addEventListener('click', () => deleteToDo(i));
        tableBody.appendChild(tableComment);
        tableBody.appendChild(tableStatus);
    }
    document.getElementById('inputWords').focus();
}

//ToDoListの登録処理
function addToDo() {
    let words = document.getElementById("inputWords").value;
    let list = getToDolist();
    list.push(words);
    localStorage.setItem("ToDoList", JSON.stringify(list));
    document.getElementById("name").value = "";
    showToDoList();
}

function deleteToDo(index) {
    let list = getToDolist();
    list.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(list));
    showToDoList();
}

//ローカルストレージに入っている「ToDoList」に紐づけられた配列を取得
function getToDolist() {
    let storageData = localStorage.getItem("ToDoList");
    return storageData == null ? [] : JSON.parse(storageData);
}