import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MenuItemModule } from './menu-item/menu-item.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [UserModule, MenuItemModule, CategoryModule, OrderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
