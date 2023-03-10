interface Card {
  balance: number;
}

interface Debit extends Card {
  level: number;
}

interface Credit extends Card {
  creditLimit: number;
}

function isCreditCard(card: Credit | Debit): card is Credit {
  return "creditLimit" in card;
}

function checkout(card: Credit | Debit, amount: number): void {
  if (isCreditCard(card)) {
    if (amount > card.creditLimit) {
      throw new Error("bla bla bla credit");
    }
  } else {
    if (amount > card.level) {
      throw new Error("bla bla bla level");
    }
  }
}
