# Static

> static이 붙어 있으면 class method이다.

```java
class Print {

	public static void a(String delimiter) {
		System.out.println(delimiter);
		System.out.println("a");
		System.out.println("a");
	}

	public static void b(String delimiter) {
		System.out.println(delimiter);
		System.out.println("b");
		System.out.println("b");
	}

}

public class StaticMethod {

	public static void main(String[] args) {
		Print.a("-");
		Print.b("-");

		Print.a("*");
		Print.b("*");
	}

}
```

> no static이면 instance method이다.

```java
class Print {

	public String delimiter;
	// method가 instance의 소속이면 'static'을 제거해야 한다.
	public void a() {
		System.out.println(this.delimiter);
		System.out.println("a");
		System.out.println("a");
	}

	public void b() {
		System.out.println(this.delimiter);
		System.out.println("b");
		System.out.println("b");
	}

}

public class StaticMethod {

	public static void main(String[] args) {
        // Instance
		Print t1 = new Print();
		t1.delimiter = "-";
		t1.a();
		t1.b();

		// Instance
		Print t2 = new Print();
		t2.delimiter = "*";
		t2.a();
		t2.b();
	}

}
```
