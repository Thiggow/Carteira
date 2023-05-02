export class Carteira {
    constructor() {
      this.Saldo = 0;
      this.Dono = "";
      this.NumeroConta = 0;
      this.Cpf = 0;
    }
  
    Depositar(valor) {
      this.Saldo += valor;
    }
  
    Sacar(valor) {
      if (valor <= this.Saldo) {
        this.Saldo -= valor;
        return true;
      } else {
        return false;
      }
    }
  
    Transferir(valor, destino) {
      if (this.Sacar(valor)) {
        destino.Depositar(valor);
        return true;
      } else {
        return false;
      }
    }
  }