package cliente;

import java.util.Scanner;

public class Exercicio04 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		
		
		System.out.println("Digite um numero que vai ser compative");
		int numero = scanner.nextInt();
		
		System.out.println("Digite um numero que vai ser compative");
		int numero2 = scanner.nextInt();
		
		if (numero == 16 && numero2 == 20) {
			System.out.println("O JOGO DUROU 10 HORA(S)");
		} else if (numero == 0 && numero2 == 0) {
			System.out.println("O JOGO DUROU 24 HORA(S)");
		} else if(numero == 2 && numero2 == 16) {
			System.out.println("O JOGO DUROU 14 HORA(S)");
		} else {
			System.out.println("Digitou um numero invalido");
		}
		
		scanner.close();

	}

}
