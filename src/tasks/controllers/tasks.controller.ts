import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    getAllTasks() {
        return 'This will return all tasks';
    }

    @Get(':id')
    getTaskById(@Param('id') id: string) {
        return `This will return task with id ${id}`;
    }

    @Post('add')
    createTask(@Body() body: any) {
        return body;
    }

    @Delete(':id')
    deleteByTaskId(@Param('id') id: string) {
        return `This will delete task with id ${id}`;
    }
}
