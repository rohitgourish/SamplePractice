import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface Type {
  id:number,
  name:string,
  isCompleted: boolean
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos = [
    {
      id:1,
      name: 'go to movie',
      isCompleted: false,
      editing:false
    },
    {
      id:2,
      name: 'watch TV',
      isCompleted: false,
      editing:false
    },
  ];
  name:string = ''
  public counter :number =  3;
  constructor() { }

  ngOnInit() {
  }



  addTodo(){
    if(this.name!==''){
    this.todos.push({
      id:this.counter,
      name:this.name,
      isCompleted:false,
      editing:false
    });
    alert('task added..!!!!!!')
    this.counter++;
    this.name='';
  }
  }

  check(item){
    if (confirm('are you sure that you have completed this?')) {
      item.isCompleted=true;
  } else {
      
  }
    
  }
  deleteTodo(id:number){
    if(confirm('Are you sure you want to delete it?')){
    this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
  
  
}
