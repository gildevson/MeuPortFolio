package cliente;

import java.util.Scanner;

public class ExpressaoCondicionalTernaria {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		double preco = scanner.nextFloat();
        double desconto = (preco < 20.0) ? preco * 0.1: preco * 0.05;
		
		System.out.println("O seu sistema pode equivaler: " + desconto);
		
		
	
		scanner.close();

	}

}
