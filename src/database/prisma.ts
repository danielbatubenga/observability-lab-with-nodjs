import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient as BasePrismaClient } from '@prisma/client';

// 1. Cria a piscina (Pool) de conexões nativa do PostgreSQL usando a URL do arquivo .env

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// 2. Cria o adaptador compatível com a arquitetura do Prisma 7
const adapter = new PrismaPg(pool);

// 3. Injeta o adaptador no construtor do PrismaClient e exporta a instância global
export const prisma = new BasePrismaClient({ adapter });