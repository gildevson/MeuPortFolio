package cliente;

import java.util.Locale;
import java.util.Scanner;

public class Exercicios04 {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);
		
		
		System.out.print("Qual seu nome: ");
		String funcionario = scanner.next();
		
		
		System.out.print("Qual seu numero identificação: ");
		int numeroId = scanner.nextInt();
		
		System.out.print("Quantas Horas você trabalhou? : ");
		int Horas = scanner.nextInt();
		
		System.out.print("Quanto valor em hora? : ");
		double valorHora = scanner.nextDouble();
		
		double resultado = Horas * valorHora;
		
		
		System.out.println("Seu numero id: " + numeroId );
		System.out.println("Funcionario: " + funcionario );
		System.out.printf("Voce trabalhou: U$ %.2f%n",  resultado );
	
		
		scanner.close();  

	}

}
