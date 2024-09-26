import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {
    constructor(
        @InjectRepository(Task)
        private readonly taskRepository: Repository<Task>,
    ) {}

    findAll() {
        return this.taskRepository.find();
    }

    findOne(id: number) {
        return this.taskRepository.findOneBy({ id });
    }

    createTask(task: any) {
        const newTask = this.taskRepository.create(task);
        return this.taskRepository.save(newTask);
    }

    async updateTask(id: number, task: any) {
        const db_task = await this.taskRepository.findOneBy({ id });
        this.taskRepository.merge(db_task, task);
        return this.taskRepository.save(db_task);
    }

    async deleteTask(id: number) {
        await this.taskRepository.delete(id);
        return true;
    }

}
