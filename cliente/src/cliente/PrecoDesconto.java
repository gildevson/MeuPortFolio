package cliente;

import java.util.Scanner;

public class PrecoDesconto {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		
		double preco = scanner.nextFloat();
		double desconto;
		
		if (preco < 20.0) {
			desconto = preco * 0.1;
		} 
		else {
			desconto = preco * 0.05;
		}

		System.out.printf("PRECO: " + desconto);
		
		scanner.close();
	}

}
