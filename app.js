var app = angular.module("todoApp", []);

app.controller("TodoCtrl", TodoCtrlFn);

function TodoCtrlFn() {

    this.triggerEditMode = false;

    this.todos = [
        "learn angular 1",
         "learn angular 2"
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

/* Note:- Here is the thing if you pass duplicate words in the textbox will through error because this is how ng-repeat implemented.
So if you have duplicate elements in a arry will not work.
So in order to fix this issue we can do two ways
1st: rather than having string in array we can create an object like {element: ''}        it will work because you are not adding the value itself to the array you are        creating a object and assinging to the array.
     So the two stings could be same and value the same but object could not be the same.
2nd: Hint of the error message it says "Use 'track by' expression to specify unique       keys"
     So All the ng-repeat needs some kind of unique number in order to track which iteration going through. So the way to do it use the class called "track by ___" and specify some unique scope variable for each iteration.
     So for that we used "$index" it's created by angular and have unique number.
*/