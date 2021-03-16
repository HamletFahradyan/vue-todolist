import Home from '../components/Home.vue';
import List from "@/components/List";
import AddTask from "@/components/AddTask";
import DeletedList from "@/components/DeletedList";
import Task from "@/components/Task";
import EditTask from "@/components/EditTask";

const routes = [
    { path: '/', component: Home },
    { path: '/list', component: List },
    { path: '/list/deleted', component: DeletedList },
    { path: '/list/add', component: AddTask },
    { path: '/list/:id', component: Task },
    { path: '/list/:id/edit', component: EditTask }
];

export default routes;