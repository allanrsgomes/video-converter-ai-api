import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionRoute } from './routes/generate-ai-completion'
const { execSync } = require('child_process');

try {
  // Execute o comando 'prisma generate' durante o build
  execSync('npx prisma generate', { stdio: 'inherit' });
} catch (error) {
  console.error('Erro ao gerar o Prisma Client:', error);
  process.exit(1);
}

const app = fastify()
app.register(fastifyCors, {
  origin: '*'
})

app.get('/', async (request, reply) => {
  reply.send({ message: 'Bem-vindo à API!' })
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)
app.listen({
  port: 3333
}).then(() => {
  console.log('HTTP Server Running!')
})