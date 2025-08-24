import { ConfigService } from '@nestjs/config'
import { ServeStaticModuleOptions } from '@nestjs/serve-static'
import { join } from 'path'

export const ServeStaticConfig = (
  configService: ConfigService
): Promise<ServeStaticModuleOptions[]> | ServeStaticModuleOptions[] => {
  const uploadDir = configService.get('UPLOADS_DIR')

  return [
    {
      rootPath: join(__dirname, '..', '..', '..', uploadDir),
      serveRoot: `/${uploadDir}/`,
    },
  ]
}
