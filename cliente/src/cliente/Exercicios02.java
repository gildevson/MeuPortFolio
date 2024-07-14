package cliente;

import java.util.Locale;
import java.util.Scanner;

public class Exercicios02 {

	public static void main(String[] args) {
		Locale.setDefault(Locale.US);
		Scanner scanner = new Scanner(System.in);
		
		double pi = 3.14159;
		System.out.print("Digite o valor da roda: ");
		double r = scanner.nextDouble();
		double area = pi * Math.pow(r,2);
		
		
		
		System.out.printf( "Area %.4f%n", area );	/**/	
		scanner.close();

	}

}
