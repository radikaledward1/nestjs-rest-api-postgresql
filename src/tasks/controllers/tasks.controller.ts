import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from '../services/tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @Get()
    getAllTasks() {
        return this.tasksService.findAll();
    }

    @Get(':id')
    getTaskById(@Param('id') id: string) {
        return this.tasksService.findOne(parseInt(id));
    }

    @Post('add')
    createTask(@Body() body: any) {
        return this.tasksService.createTask(body);
    }

    @Delete(':id')
    deleteByTaskId(@Param('id') id: string) {
        return this.tasksService.deleteTask(parseInt(id));
    }
}
