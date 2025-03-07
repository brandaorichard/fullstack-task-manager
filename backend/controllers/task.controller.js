import Task from '../models/task.model.js';
import mongoose from 'mongoose';

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as tarefas', error: error.message });
  }
};
export const createTask = async (req, res) => {
  try {
    const { title, status, priority } = req.body;

    if (!title || !status || !priority) {
      return res.status(400).json({
        message:
          'Preencha todos os campos obrigatórios: title, status e priority',
      });
    }

    const newTask = new Task(req.body);
    await newTask.save();

    res
      .status(201)
      .json({ message: 'Tarefa criada com sucesso!', task: newTask });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Erro ao criar a tarefa', error: error.message });
  }
};
export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'ID da tarefa inválido!' });
  };

  try {
    const updatedTask = await Task.findByIdAndUpdate(id, task, { new: true });
    res.status(200).json({ success: true, data: updatedTask });
  } catch {
    res.status(404).json({ success: false, message: 'Tarefa não encontrada!' });
  }
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: 'ID da tarefa inválido!' });
  };
  
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: 'Tarefa deletada com sucesso!' });
  } catch {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};