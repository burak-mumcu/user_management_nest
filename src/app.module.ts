import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.sqlite',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true, // Sadece development için
        }),
        UsersModule,
        AuthModule,
    ],
})
export class AppModule {}