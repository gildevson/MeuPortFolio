package cliente;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class OperacaoFormula {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        //	operacao securitizadora
        System.out.print("Digite o valor final (VF): ");
        double valorFace = scanner.nextDouble();

        System.out.print("Digite a taxa (%): ");
        double taxa = scanner.nextDouble();

        scanner.nextLine(); // Consumir a nova linha deixada por nextDouble()

        System.out.print("Digite a data de vencimento (dd/MM/yyyy): ");
        String dataVencimentoStr = scanner.nextLine();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate dataVencimento = LocalDate.parse(dataVencimentoStr, formatter);
        LocalDate dataAtual = LocalDate.now();

        long periodo = ChronoUnit.DAYS.between(dataAtual, dataVencimento);

        double porcentagem = 100.0;
        double resultado = valorFace * ((taxa / 30) * periodo) / porcentagem;

        System.out.print("Deseja acrescentar uma tarifa? (Digite 1 para sim ou 0 para não): ");
        int desejaTarifa = scanner.nextInt();

        double tarifa = 0.0;
        if (desejaTarifa == 1) {
            System.out.print("Digite o valor da tarifa: ");
            tarifa = scanner.nextDouble();
            resultado += tarifa;
        }

        System.out.printf("Portanto, o resultado é R$ %.2f%n", resultado);
        System.out.printf("Valor líquido é R$ %.2f%n", valorFace - resultado);
        System.out.printf("Valor da tarifa é R$ %.2f%n", tarifa);
        System.out.printf("Data de vencimento: %s%n", dataVencimento.format(formatter));
        System.out.printf("Período em dias: %d%n", periodo);

        // Fechando o scanner
        scanner.close();
    }
}

