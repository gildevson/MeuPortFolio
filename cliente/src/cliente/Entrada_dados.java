package cliente;

import java.util.Scanner;

public class Entrada_dados {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

        System.out.print("Digite o seu nome: ");
        String nome = scanner.nextLine();
        
        System.out.print("Digite o seu sobrenome: ");
        String sobrenome = scanner.nextLine();
        
        System.out.print("Digite sua idade: ");
        int idade = scanner.nextInt(); // Use nextInt() para ler um inteiro
        
        System.out.print("Masculino ou Feminino?: ");
        String genero = scanner.next();
        

        
        System.out.println("Seu nome é: " + nome);
        System.out.println("Seu sobrenome é: " + sobrenome);
        System.out.println("Sua idade é: " + idade);
        System.out.println("Seu genero é " + genero);

        
        
        scanner.close();

	}

}
