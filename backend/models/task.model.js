import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Título da tarefa
  description: { type: String }, // Descrição detalhada (opcional)
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending',
  }, // Status da tarefa
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium',
  }, // Prioridade
  dueDate: { type: Date }, // Data de vencimento
  createdAt: { type: Date, default: Date.now }, // Data de criação
  updatedAt: { type: Date, default: Date.now }, // Última atualização
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Referência ao usuario. REALIZAR SOMENTE QUANDO CRIAR O SCHEMA NO MONGODB
  tags: [{ type: String }], // Tags para organização
  isRecurring: { type: Boolean, default: false }, // Se a tarefa é recorrente
  recurrence: { type: String, enum: ['daily', 'weekly', 'monthly', 'yearly'] }, // Frequência (se recorrente)
  attachments: [{ url: String, fileType: String }], // Anexos da tarefa
  completedAt: { type: Date }, // Data de conclusão (se aplicável)
});

const Task = mongoose.model('Task', taskSchema);
export default Task;