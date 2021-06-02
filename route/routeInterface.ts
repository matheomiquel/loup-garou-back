import { FastifySchema, FastifyRequest, FastifyReply } from 'fastify'
export interface RouteInterface {
  method: 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS'
  url: string,
  schema?: FastifySchema,
  querystring?: any,
  preHandler?: (request: FastifyRequest, reply: FastifyReply) => Promise<any>
  handler: (request: FastifyRequest, reply: FastifyReply) => Promise<object>
}