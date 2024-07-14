package cliente;

import java.util.Scanner;

public class Exercicio06ifelse {

	public static void main(String[] args) {
Scanner scanner = new Scanner(System.in);
		
		
		System.out.println("Digite o Codigo do Lanche: ? ");
		int codigoLanche = scanner.nextInt();
		
		System.out.println("Quantos lanches você vai querer: ? ");
		int quantidade = scanner.nextInt();
		
		double total;
		
		if (codigoLanche == 1) {
			total = quantidade * 4.0;
			System.out.printf("Seu lanche foi Cachorro quente deu: %.2f reais", total);
		} else if (codigoLanche == 2) {
			total = quantidade * 4.50;
			System.out.printf("Seu lanche foi X-Salada foi e deu: %.2f reais", total);
		} else if (codigoLanche == 3) {
			total = quantidade * 4.50;
			System.out.printf("Seu lanche foi X-Bacon e deu: %.2f reais", total);
		} else if (codigoLanche == 4) { 
			total = quantidade * 2.00;
			System.out.printf("Seu lanche foi Torrada Simples: %.2f", total);	
		} else if (codigoLanche == 5) { 
			total = quantidade * 2.00;
			System.out.printf("Seu pedido foi um Refrigerante e deu: %.2f reais", total);
		} else if (codigoLanche == 6) {
			total = quantidade * 1.50; 
			System.out.printf("Seu pedido foi um café e deu: %.2f reais", total);
		} else {
			System.out.println("Não existe esse lanche");
		}
		
		scanner.close();

	}

}
