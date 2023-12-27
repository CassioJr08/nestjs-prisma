import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //define uma lista com as propriedades aceitadas
      forbidNonWhitelisted: true, // recusar requisições se necessario
      transform: true, // trasnforma os dados da requisição de acordo com o dto
    }),
  );
  await app.listen(process.env.PORT || 3000);
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
}
bootstrap();
