import {
  Controller,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common'
import { FileService } from './file.service'
import { Auth } from '../auth/decorators/auth.decorator'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Auth('user')
  @UseInterceptors(FileInterceptor('file'))
  @Post('save')
  async save(
    @UploadedFile() file: Express.Multer.File,
    @Query('folder') folder?: string
  ) {
    return this.fileService.save(file, folder)
  }
}
