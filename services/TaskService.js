export class TaskService {

    constructor(){

    }
    //Định nghĩa phương thức getAllTask
    getAllTask = () => {
       const promise = axios({
            url:'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method:'GET'
        })

        return promise;
    }

    //Định nghĩa hàm đưa dữ liệu về backend
    addTask = (task) =>{//<= đúng định dang backend quy định

        const promise = axios({
            url:'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method:"POST",
            data: task // {taskName:'abc'}
        })

        return promise;
    } 
}

