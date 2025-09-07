import { Injectable, NotFoundException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { join } from 'path'
import { ensureDir, writeFile } from 'fs-extra'
import { TypeFileResponse } from './file.type'

@Injectable()
export class FileService {
  constructor(private configService: ConfigService) {}

  async save(
    file: Express.Multer.File,
    folder: string = 'coffees'
  ): Promise<TypeFileResponse> {
    if (!file) throw new NotFoundException('File not found!')

    const uploadDir = this.configService.get('UPLOADS_DIR')

    const uploadedFolder = join(
      __dirname,
      '..',
      '..',
      '..',
      uploadDir,
      '/',
      folder
    )

    await ensureDir(uploadedFolder)

    const fileName = `${Date.now()}-${file.originalname}`

    await writeFile(`${uploadedFolder}/${fileName}`, file.buffer)

    return {
      url: `/${uploadDir}/${folder}/${fileName}`,
    }
  }
}
