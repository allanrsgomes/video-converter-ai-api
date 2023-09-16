const { execSync } = require('child_process');

try {
  // Execute o comando 'prisma generate' durante o build
  execSync('npx prisma generate', { stdio: 'inherit' });
} catch (error) {
  console.error('Erro ao gerar o Prisma Client:', error);
  process.exit(1);
}