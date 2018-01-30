var app = angular.module("todoApp", []);

app.controller("TodoCtrl", TodoCtrlFn);

function TodoCtrlFn() {

    this.triggerEditMode = false;

    this.todos = [
        "Social Media",
         "Google Trends"
    ];

    this.addnNewTodo = function(){
        this.todos.push(this.newTodo);
        this.newTodo = "";
    };

    this.triggerEditMode = function(){
        this.editMode = !this.editMode;
    };

    this.deleteTodo = function(index){
        this.todos.splice(index, 1);
    };

}

