import { Controller } from '@nestjs/common';
import { PaymentExpirationService } from './payment-expiration.service';

@Controller('payment-expiration')
export class PaymentExpirationController {
  constructor(private readonly paymentExpirationService: PaymentExpirationService) {}
}
