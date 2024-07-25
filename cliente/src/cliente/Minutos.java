package cliente;

import java.util.Locale;
import java.util.Scanner;

public class Minutos {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);
		
		int minutos = scanner.nextInt();
		
		double conta = 50.00; 
			if (minutos > 100 ) {
				    conta = conta + (minutos - 100) * 2.0;
		}
		
		System.out.printf("Valor da conta = R$ %.2f%n", conta);
	    scanner.close();
	    //testando
	}

}
