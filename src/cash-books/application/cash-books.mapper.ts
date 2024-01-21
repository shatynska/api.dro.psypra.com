import { CashBook } from '~/cash-books/domain/entities/cash-book.entity';
import { CashBookDto } from './dto/cash-book.dto';

export class CashBookMapper {
  static mapToDto(cashBook: CashBook): CashBookDto {
    const mappedCashBook = {
      id: cashBook.getId(),
      title: cashBook.getTitle(),
      cashBalance: cashBook.getCashBalance(),
    };

    return mappedCashBook;
  }
}