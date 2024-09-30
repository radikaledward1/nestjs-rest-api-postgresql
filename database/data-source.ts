import { DataSource, DataSourceOptions } from "typeorm"
import ormconfig from '../ormconfig.json'

const config: DataSourceOptions = {
    type: "postgres",
    host: ormconfig.host,
    port: ormconfig.port,
    username: ormconfig.username,
    password: ormconfig.password,
    database: ormconfig.database,
    entities: ormconfig.entities,
    migrations: ormconfig.migrations,
    migrationsTableName: ormconfig.migrationsTableName,
    migrationsRun: ormconfig.migrationsRun,
    synchronize: ormconfig.synchronize
}

export const AppDataSource = new DataSource(config)
