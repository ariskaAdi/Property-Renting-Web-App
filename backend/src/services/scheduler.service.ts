import PgBoss from "pg-boss";

const boss = new PgBoss(process.env.DATABASE_URL as string);
boss.start()

export const scheduler = boss