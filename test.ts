// import { Module } from '@nestjs/common';
// import {
//   ConfigService,
//   ConfigModule as NestConfigModule,
// } from '@nestjs/config';
// import * as Joi from 'joi';

// @Module({
//   imports: [
//     NestConfigModule.forRoot({
//       validationSchema: Joi.object({
//         POSTGRES_HOST: Joi.string().required(),
//         POSTGRES_PORT: Joi.number().required(),
//         POSTGRES_USER: Joi.string().required(),
//         POSTGRES_PASSWORD: Joi.string().required(),
//         POSTGRES_DB: Joi.string().required(),
//         PORT: Joi.number(),
//       }),
//     }),
//   ],
//   providers: [ConfigService],
//   exports: [ConfigService],
// })
// export class ConfigModule {}
