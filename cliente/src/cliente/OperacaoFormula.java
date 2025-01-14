package cliente;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.Scanner;

public class OperacaoFormula {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite o valor final (VF): ");
        double valorFace = scanner.nextDouble();

        System.out.print("Digite a taxa (%): ");
        double taxa = scanner.nextDouble();

        scanner.nextLine(); // Consumir a nova linha deixada por nextDouble()
        System.out.print("Digite a data de vencimento (dd/MM/yyyy): ");
        String dataVencimentoStr = scanner.nextLine();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        LocalDate dataVencimento = LocalDate.parse(dataVencimentoStr, formatter);

        // Verifica se a data de vencimento cai em um sábado
        if (dataVencimento.getDayOfWeek() == DayOfWeek.SATURDAY) {
            System.out.println("A data de vencimento cai em um sábado.");
            System.out.print("Digite o número de dias para adicionar: ");
            int diasExtras = scanner.nextInt();
            dataVencimento = dataVencimento.plusDays(diasExtras);
            System.out.printf("Nova data de vencimento ajustada para: %s%n", dataVencimento.format(formatter));
        }

        LocalDate dataAtual = LocalDate.now();
        long periodo = ChronoUnit.DAYS.between(dataAtual, dataVencimento);

        double porcentagem = 100.0;
        double resultado = valorFace * ((taxa / 30) * periodo) / porcentagem;

        System.out.print("Deseja acrescentar uma tarifa? (Digite 1 para sim ou 0 para não): ");
        int desejaTarifa = scanner.nextInt();
        scanner.nextLine();  // Consumir a nova linha deixada por nextInt()

        // Inicialização fora do loop para o caso de não entrar no loop
        double tarifaTotal = 0.0;

        while (desejaTarifa == 1) {
            System.out.print("Digite o valor da tarifa: ");
            double tarifa = scanner.nextDouble();
            scanner.nextLine(); // Consumir a nova linha

            System.out.print("Digite o nome da tarifa: ");
            String nomeTarifa = scanner.nextLine();

            resultado += tarifa;
            tarifaTotal += tarifa;

            System.out.printf("Tarifa '%s' de R$ %.2f aplicada.%n", nomeTarifa, tarifa);

            System.out.print("Deseja aplicar outra tarifa? Digite 1 para SIM ou 0 para NÃO: ");
            desejaTarifa = scanner.nextInt();
            scanner.nextLine();  // Consumir a nova linha
        }

        System.out.printf("Portanto, o resultado é R$ %.2f%n", resultado);
        System.out.printf("Valor líquido é R$ %.2f%n", valorFace - resultado);
        System.out.printf("Valor total das tarifas é R$ %.2f%n", tarifaTotal);
        System.out.printf("Data de vencimento: %s%n", dataVencimento.format(formatter));
        System.out.printf("Período em dias: %d%n", periodo);

        // Fechando o scanner
        scanner.close();
    }
}
